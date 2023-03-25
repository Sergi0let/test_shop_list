import { useEffect } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ItemsResponseType, ItemType, StateType } from '../../entities/Items';
import {
  getAllCategories,
  getAllItems,
  getMoreItems,
} from '../../store/items/actionsItems';

import ItemCard from '../common/ItemCard';
import ItemCardHeader from '../common/ItemCardHeader';
import * as selector from '../../store/items/selectorsItems';

import './index.scss';
import CategoryBtnGroup from '../CategoryBtnGroup';

function ListItems(props: PropsType): JSX.Element {
  const {
    itemList,
    getAllItems,
    isLoading,
    getMoreItemsList,
    skip,
    total,
    getAllCategories,
  } = props;

  useEffect(() => {
    getAllItems();
    getAllCategories();
  }, [getAllCategories, getAllItems]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const showMore = () => {
    getMoreItemsList(skip);
  };

  return (
    <div className="list-items">
      <CategoryBtnGroup />
      <ul className="list-items__list">
        <ItemCardHeader />
        {itemList &&
          itemList.map((item: ItemType) => (
            <li key={item.id} className="list-items__item-card">
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
    </div>
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
  getAllCategories: getAllCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItems);

type PropsType = {
  itemList: ItemsResponseType;
  isLoading: boolean;
  skip: number;
  total: number;
  getAllItems: () => void;
  getMoreItemsList: (skip: number) => void;
  getAllCategories: () => void;
};
