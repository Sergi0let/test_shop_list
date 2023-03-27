import { createDescription } from '../../../helpers/helpers';
import { ItemType } from '../../../entities/Items';
import RattingRange from '../RattingRang';
import './index.scss';
import ButtonRemove from '../ButtonRemove';
import { Link } from 'react-router-dom';
import { CartFeaturesType } from '../../../entities/cart';

export default function ItemCard(props: ItemCardProps): JSX.Element {
  const {
    category,
    thumbnail,
    title,
    price,
    rating,
    description,
    id,
    stock,
    addItemToCart,
  } = props;

  return (
    <article className="table">
      <div className="table__id">
        <div>ID</div>
        <div>{id}</div>
      </div>
      <div
        className="table__title"
        onClick={() => {
          id && addItemToCart({ id, thumbnail, title, price });
        }}
      >
        {title}
      </div>
      <div className="table__description">{createDescription(description)}</div>
      <span className="table__price">{price}₴</span>
      <Link to={`/item/${id}`}>
        <picture className="table__img-wrapper">
          <img className="" src={thumbnail} alt={description} />
        </picture>
      </Link>

      <div className="">
        <RattingRange rating={rating} />
        <div className="">{rating}</div>
      </div>
      <div className="table__stock">
        <div>{stock}</div>
        <div className="table__category">{category}</div>
      </div>
      <ButtonRemove id={id} />
    </article>
  );
}

type ItemCardProps = {
  category: ItemType['category'];
  title: ItemType['title'];
  thumbnail: ItemType['thumbnail'];
  price: ItemType['price'];
  rating: ItemType['rating'];
  description: ItemType['description'];
  id: ItemType['id'];
  stock: ItemType['stock'];
  addItemToCart: (item: CartFeaturesType) => void;
};
