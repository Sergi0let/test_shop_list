import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ItemsResponseType, ItemType } from '../../entities/Items';
import { getAllItems } from '../../store/reducer';
import ItemCard from '../common/ItemCard';

import './index.scss';

function ListItems(props: PropsType): JSX.Element {
  const { itemList, getAllItems, isLoading } = props;

  useEffect(() => {
    getAllItems();
  }, [getAllItems]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <ul className="list-items">
      {itemList &&
        itemList.map((item: ItemType) => (
          <li key={item.id} className="list-items__item-card">
            <Link to={`/item/${item.id}`}>
              <ItemCard
                title={item.title}
                image={item.thumbnail}
                category={item.category}
                price={item.price}
                rating={item.rating}
                isBestseller={item.isBestseller}
                description={item.description}
              />
            </Link>
          </li>
        ))}
    </ul>
  );
}

const mapStateToProps = (state: StateType) => {
  return {
    itemList: state.itemList,
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = {
  getAllItems: getAllItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItems);

type StateType = {
  itemList: ItemsResponseType;
  isLoading: boolean;
};
type PropsType = {
  itemList: ItemsResponseType;
  getAllItems: () => void;
  isLoading: boolean;
};
