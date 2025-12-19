import './ProductCard.css';

const ProductCard = ({ product, addCard, count }) => {
  const getButtonText = () => {
    if (!product.inStock) return 'Нет в наличии';
    if (count > 0) return `В корзине (${count})`;
    return 'В корзину';
  };
  return (
    <article className="card">
      <div
        className={`availability ${
          product.inStock ? 'in-stock' : 'out-of-stock'
        }`}
      >
        {product.inStock ? 'В наличии' : 'Нет в наличии'}
      </div>

      <img
        src={product.image}
        alt={product.name}
        className="card-image"
        loading="lazy"
      />
      <div className="card-content">
        <span className="category">{product.category}</span>
        <h2>{product.name}</h2>
        <p className="description">{product.description}</p>
        <span className="rating">{product.rating}</span>
        <span className="price">{product.price.toLocaleString()} ₽</span>
        <button
          className={count < 0 || !count ? "add-to-cart":'add-to-cart in-cart'}
          disabled={!product.inStock}
          onClick={addCard}
        >
          {getButtonText()}
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
