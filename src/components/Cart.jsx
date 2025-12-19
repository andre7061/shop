import './cart.css';
export const Cart = ({
  arr,
  isOpen,
  onClose,
  deleteFn,
  increaseFn,
  decreaseFn,
}) => {
  const total = arr.reduce((sum, item) => sum + item.price * item.count, 0);
  const lengthProduct = arr.reduce((sum, item) => sum + item.count, 0);
  return (
    <div className={`popup ${isOpen ? 'popup_active' : ''}`}>
      <div className="popup__conteiner">
        {/* Шапка */}
        <div className="cart-header">
          <h2>Корзина ({lengthProduct})</h2>
          <button className="cart-close" onClick={onClose}>
            ×
          </button>
        </div>

        {/* Список товаров */}
        <div className="cart-items">
          {arr.length === 0 ? (
            <div className="cart-empty">
              <p>Корзина пуста</p>
              <p>Добавьте товары из каталога</p>
            </div>
          ) : (
            arr.map((card) => (
              <div className="cart-item" key={card.id}>
                <img
                  src={card.image}
                  alt={card.name}
                  className="cart-item-image"
                />
                <div className="cart-item-info">
                  <h3 className="cart-item-title">{card.name}</h3>
                  <p className="cart-item-price">
                    {card.price.toLocaleString()} ₽
                  </p>

                  {/* Управление количеством */}
                  <div className="cart-item-quantity">
                    <button
                      onClick={() => decreaseFn(card.id)}
                      className="quantity-btn"
                    >
                      -
                    </button>
                    <span className="quantity-value">{card.count}</span>
                    <button
                      onClick={() => increaseFn(card.id)}
                      className="quantity-btn"
                    >
                      +
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => deleteFn(card.id)}
                  className="cart-item-remove"
                >
                  Удалить
                </button>
              </div>
            ))
          )}
        </div>

        {/* Итого и оформление */}
        <div className="cart-footer">
          <div className="cart-total">
            <span className="total-label">Итого:</span>
            <span className="total-price">{total.toLocaleString()} ₽</span>
          </div>
          <button className="cart-checkout">Оформить заказ</button>
        </div>
      </div>
    </div>
  );
};
