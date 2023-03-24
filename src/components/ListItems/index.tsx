import { Link } from 'react-router-dom';
import { ItemType } from '../../entities/Items';
import itemsData from '../../seeds/items_data';
import ItemCard from '../common/ItemCard';

import './index.scss';

function ListItems(): JSX.Element {
  return (
    <ul className="list-items">
      {itemsData &&
        itemsData.map((item: ItemType) => (
          <li key={item.id} className="list-items__item-card">
            <Link to={`/item/${item.id}`}>
              <ItemCard
                title={item.title}
                image={item.image}
                category={item.category}
                price={item.price}
                ratting={item.ratting}
                isBestseller={item.isBestseller}
                description={item.description}
              />
            </Link>
          </li>
        ))}
    </ul>
  );
}

export default ListItems;
