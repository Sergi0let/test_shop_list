import './index.scss';

function ItemPage() {
  return (
    <article className="item-card">
      <h1 className="title">Item Page</h1>
      <div className="item-card__content">
        <figure>
          <img
            src="https://content.rozetka.com.ua/goods/images/big_tile/277654765.jpg"
            alt=""
            title="Book"
          />
          <figcaption>category</figcaption>
        </figure>
        <div className="item-card__description description">
          <div className="description__ratting">ratting</div>
          <p className="description__text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi rerum
            qui dolore, enim numquam molestias voluptate? Sint ut, iste quo ab
            nobis ipsa voluptates hic corrupti qui obcaecati accusamus tempora?
          </p>
          <p className="description__price">
            <span>Price</span>
            <span>999~</span>
          </p>
          <p className="description__stroke">
            <span>Залишок</span>
            <span>12</span>
          </p>
          <div className="description__btn">
            <button className="btn">Add to cart</button>
          </div>
        </div>
      </div>
    </article>
  );
}

export default ItemPage;
