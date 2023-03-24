import { createDescription } from '../../../helpers/helpers';
import { ItemType } from '../../../entities/Items';
import RattingRange from '../RattingRang';
import './index.scss';

type ItemCardProps = {
  category: ItemType['category'];
  title: ItemType['title'];
  thumbnail: ItemType['thumbnail'];
  price: ItemType['price'];
  rating: ItemType['rating'];
  description: ItemType['description'];
};

function ItemCard(props: ItemCardProps): JSX.Element {
  const { category, thumbnail, title, price, rating, description } = props;
  return (
    <article className="card">
      <picture className="card-img__wrapper ">
        <img className="card-img" src={thumbnail} alt={description} />
      </picture>

      <div className="card-body">
        <div className="card-title">{title} </div>
        <RattingRange rating={rating} />
        <div className="card-name">{category}</div>
        <div className="card-description">{createDescription(description)}</div>
        <div className="card-features">
          <span className="card-features__price">{price}₴</span>
          <span className="card-features__ratting">
            <b>рейтинг: </b>
            {rating}
          </span>
        </div>
      </div>
    </article>
  );
}

export default ItemCard;
