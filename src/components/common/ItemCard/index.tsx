import { createDescription } from '../../../helpers/helpers';
import { ItemType } from '../../../entities/Items';
import './index.scss';

type ItemCardProps = {
  category: ItemType['category'];
  image: ItemType['image'];
  title: ItemType['title'];
  isBestseller?: boolean;
  price: ItemType['price'];
  ratting: ItemType['ratting'];
  description: ItemType['description'];
};

function ItemCard(props: ItemCardProps): JSX.Element {
  const { category, image, title, isBestseller, price, ratting, description } =
    props;
  return (
    <article className="card">
      <picture className="card-img__wrapper ">
        <img className="card-img" src={image} alt="" />
      </picture>

      <div className="card-body">
        <div className="card-title">{title} </div>
        <div className="card-name">{category}</div>
        <div className="card-description">{createDescription(description)}</div>
        <div className="card-features">
          <span className="card-features__price">{price}₴</span>
          <span className="card-features__ratting">
            <b>рейтинг: </b>
            {ratting}
          </span>
        </div>
      </div>
      {isBestseller && (
        <div className="card-best-seller">
          <span>ТОП ПРОДАЖІВ</span>
        </div>
      )}
    </article>
  );
}

export default ItemCard;
