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
  id: ItemType['id'];
  stock: ItemType['stock'];
};

export default function ItemCard(props: ItemCardProps): JSX.Element {
  const { category, thumbnail, title, price, rating, description, id, stock } =
    props;
  return (
    <article className="table">
      <div className="table__id">
        <div>ID</div>
        <div>{id}</div>
      </div>
      <div className="table__title">{title} </div>
      <div className="table__description">{createDescription(description)}</div>
      <span className="table__price">{price}₴</span>
      <picture className="table__img-wrapper">
        {/* <img className="" src={thumbnail} alt={description} /> */}
      </picture>

      <div className="">
        <RattingRange rating={rating} />
        <div className="">{rating}</div>
      </div>
      <div className="table__stock">
        <div>{stock}</div>
        <div className="table__category">{category}</div>
      </div>
    </article>
  );
}
