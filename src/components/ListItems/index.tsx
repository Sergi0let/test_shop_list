import { useEffect } from 'react';
import { connect } from 'react-redux';
import { ItemsResponseType, ItemType, StateType } from '../../entities/Items';
import {
  actionsCart,
  actionsModal,
  getAllCategories,
  getAllItems,
  getMoreItems,
} from '../../store/items/actionsItems';

import ItemCard from '../common/ItemCard';
import ItemCardHeader from '../common/ItemCardHeader';
import * as selector from '../../store/items/selectorsItems';

import './index.scss';
import CategoryBtnGroup from '../CategoryBtnGroup';
import FormAddItem from '../FormAddItem';

function ListItems(props: PropsType): JSX.Element {
  const {
    itemList,
    getAllItems,
    isLoading,
    getMoreItemsList,
    skip,
    total,
    getAllCategories,
    isModalOpen,
    closeModal,
    addItemToCart,
    cart,
  } = props;

  console.log('cart :  ', cart);

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
    <>
      <div
        className="list-items"
        style={isModalOpen ? { opacity: '0.4' } : {}}
        onClick={closeModal}
      >
        <CategoryBtnGroup />
        <ul className="list-items__list">
          <ItemCardHeader />
          {itemList &&
            itemList.map((item: ItemType) => (
              <li key={item.id} className="list-items__item-card">
                <ItemCard
                  addItemToCart={addItemToCart}
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
      {isModalOpen && <FormAddItem />}
    </>
  );
}

const mapStateToProps = (state: StateType) => {
  return {
    itemList: selector.itemsList(state),
    isLoading: selector.isLoading(state),
    skip: selector.skip(state),
    total: selector.total(state),
    isModalOpen: selector.isModalOpen(state),
    cart: state.cart,
  };
};

const mapDispatchToProps = {
  getAllItems: getAllItems,
  getMoreItemsList: getMoreItems,
  getAllCategories: getAllCategories,
  closeModal: actionsModal.closeModal,
  addItemToCart: actionsCart.addToCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ListItems);

type PropsType = {
  cart: ItemsResponseType;
  itemList: ItemsResponseType;
  isLoading: boolean;
  skip: number;
  total: number;
  isModalOpen: boolean;
  getAllItems: () => void;
  getMoreItemsList: (skip: number) => void;
  getAllCategories: () => void;
  closeModal: () => void;
  addItemToCart: (id: any) => void;
};
