import { ItemType } from '../../../entities/Items';
import RattingRange from '../RattingRang';

import './index.scss';

export default function ItemPage(props: PropsType): JSX.Element {
  const {
    category,
    thumbnail,
    title,
    stock,
    price,
    rating,
    description,
    id,
    addToCart,
  } = props;

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
            <span>Rating ({rating})</span>
            <RattingRange rating={rating} />
          </div>

          <div className="description__text">
            <p>
              <strong>Description:</strong>
            </p>
            <p>{description}</p>
          </div>

          <p className="description__price">
            <span>Price</span>
            <span> {price}₴</span>
          </p>

          <p className="description__stroke">
            <span>Remainder</span>

            <span>
              {stock
                ? stock + ' items'
                : 'no information, check with the manager'}
            </span>
          </p>
        </div>
      </div>

      <div className="card-btn-seller ">
        <button
          onClick={() => addToCart({ id, thumbnail, title, price })}
          className="btn"
        >
          Add to cart
        </button>
      </div>
    </article>
  );
}

interface PropsType extends ItemType {
  addToCart: (id: any) => void;
}
