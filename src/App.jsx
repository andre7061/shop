import { products } from './data/products';
import ProductCard from './components/ProductCard';
import { useState } from 'react';
import FilterCards from './components/FilterCards';
import { Cart } from './components/Cart';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [cart, setCart] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  const filterCards =
    selectedCategory === ''
      ? products
      : products.filter((card) => card.category === selectedCategory);

  return (
    <>
      <header>
        <h1>Магазин Андрея</h1>
        <div className="container">
          <FilterCards
            setValue={setSelectedCategory}
            value={selectedCategory}
          />
          <button onClick={() => setIsOpen(true)} className="btn__basket">
            <span className="basket">🛒</span>
            {<span className="count">{cart.reduce((sum, item) => sum + item.count, 0)}</span>}
          </button>
        </div>
      </header>
      <main>
        <section className="products-grid">
          {filterCards.map((card) => (
            <ProductCard
              addCard={() => {
                let x;
                setCart((prev) => {
                  const elIndex = prev.findIndex((el) => el.id === card.id);

                  if (elIndex < 0) {
                    x = [...prev, { ...card, count: 1 }];
                    return x;
                  } else {
                    return prev.map((item) =>
                      item.id === card.id
                        ? { ...item, count: item.count + 1 }
                        : item
                    );
                  }
                });
              }}
              count={cart.find((el) => el.id === card.id)?.count}
              key={card.id}
              product={card}
            />
          ))}
        </section>
        <Cart
          deleteFn={(id) => {
            setCart((prev) => prev.filter((el) => el.id !== id));
          }}
          decreaseFn={(id) => {
            setCart((prev) => {
              if (prev.find((el) => el.id === id).count === 1) {
                return prev.filter((el) => el.id !== id);
              } else {
                return prev.map((el) =>
                  el.id === id ? { ...el, count: el.count - 1 } : el
                );
              }
            });
          }}
          increaseFn={(id) => {
            setCart((prev) =>
              prev.map((el) =>
                el.id === id ? { ...el, count: el.count + 1 } : el
              )
            );
          }}
          onClose={() => setIsOpen(false)}
          isOpen={isOpen}
          arr={cart}
        />
      </main>
    </>
  );
}

export default App;
