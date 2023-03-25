import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ItemsResponseType, ItemType, StateType } from '../../entities/Items';
import { getAllItems, getMoreItems } from '../../store/reducer';

import ItemCard from '../common/ItemCard';
import ItemCardHeader from '../common/ItemCardHeader';
import * as selector from '../../store/selectors';

import './index.scss';

function ListItems(props: PropsType): JSX.Element {
  const { itemList, getAllItems, isLoading, getMoreItemsList, skip, total } =
    props;

  useEffect(() => {
    getAllItems();
  }, [getAllItems]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const showMore = () => {
    getMoreItemsList(skip);
  };

  return (
    <ul className="list-items">
      <ItemCardHeader />
      {itemList &&
        itemList.map((item: ItemType) => (
          <li key={item.id} className="list-items__item-card">
            <Link to={`/item/${item.id}`}>
              <ItemCard
                stock={item.stock}
                id={item.id}
                title={item.title}
                thumbnail={item.thumbnail}
                category={item.category}
                price={item.price}
                rating={item.rating}
                description={item.description}
              />
            </Link>
          </li>
        ))}
      <div style={{ textAlign: 'center' }}>
        {total >= skip ? (
          <button className="btn btnPrimary" onClick={showMore}>
            Show more
          </button>
        ) : null}
      </div>
    </ul>
  );
}

const mapStateToProps = (state: StateType) => {
  return {
    itemList: selector.itemsList(state),
    isLoading: selector.isLoading(state),
    skip: selector.skip(state),
    total: selector.total(state),
  };
};

const mapDispatchToProps = {
  getAllItems: getAllItems,
  getMoreItemsList: getMoreItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItems);

type PropsType = {
  itemList: ItemsResponseType;
  isLoading: boolean;
  skip: number;
  total: number;
  getAllItems: () => void;
  getMoreItemsList: (skip: number) => void;
};
