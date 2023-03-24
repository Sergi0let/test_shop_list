import { ItemType } from '../../../entities/Items';
import RattingRange from '../RattingRang';
import './index.scss';

function ItemPage(props: ItemType): JSX.Element {
  const { category, thumbnail, title, stock, price, rating, description } =
    props;

  return (
    <article className="item-card" style={{ background: '#fff' }}>
      <h1 className="title">{title}</h1>
      <div className="item-card__content">
        <figure>
          <img src={thumbnail} alt={title} title={title} />
          <figcaption>{category}</figcaption>
        </figure>
        <div className="item-card__description description">
          <div className="description__ratting">
            <span>Рейтинг ({rating})</span>
            <RattingRange rating={rating} />
          </div>

          <div className="description__text">
            <p>
              <strong>Опис:</strong>
            </p>
            <p>{description}</p>
          </div>
          <p className="description__price">
            <span>Ціна</span>
            <span> {price}₴</span>
          </p>
          <p className="description__stroke">
            <span>Залишок</span>
            <span>{stock}</span>
          </p>
        </div>
      </div>

      <div className="card-btn-seller ">
        <button className="btn">Add to cart</button>
      </div>
    </article>
  );
}

export default ItemPage;
