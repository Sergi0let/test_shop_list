import { ItemType } from '../../../entities/Items';
import RattingRange from '../RattingRang';
import './index.scss';

function ItemPage(props: ItemType): JSX.Element {
  const {
    category,
    image,
    title,
    isBestseller,
    stoke,
    price,
    ratting,
    description,
  } = props;
  console.log('typeof ratting', typeof ratting);
  return (
    <article className="item-card">
      <h1 className="title">{title}</h1>
      <div className="item-card__content">
        <figure>
          <img src={image} alt={title} title={title} />
          <figcaption>{category}</figcaption>
        </figure>
        <div className="item-card__description description">
          <div className="description__ratting">
            <span>Рейтинг ({ratting})</span>
            <RattingRange ratting={ratting} />
          </div>

          <p className="description__text">
            <p>
              <strong>Опис:</strong>
            </p>
            <p>{description}</p>
          </p>
          <p className="description__price">
            <span>Ціна</span>
            <span> {price}₴</span>
          </p>
          <p className="description__stroke">
            <span>Залишок</span>
            <span>{stoke}</span>
          </p>
        </div>
      </div>
      {isBestseller && (
        <div className="card-best-seller">
          <span>ТОП ПРОДАЖІВ</span>
        </div>
      )}
      <div className="card-btn-seller ">
        <button className="btn">Add to cart</button>
      </div>
    </article>
  );
}

export default ItemPage;
