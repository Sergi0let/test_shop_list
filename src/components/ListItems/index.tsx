import { useEffect } from 'react';
import { connect } from 'react-redux';
import { ItemsResponseType, ItemType, StateType } from '../../entities/Items';
import {
  actionsModal,
  getAllCategories,
  getAllItems,
  getMoreItems,
} from '../../store/items/actionsItems';
import actionsCart from '../../store/cartReducer/actionsCart';

import ItemCardHeader from '../common/ItemCardHeader';
import * as selector from '../../store/items/selectorsItems';
import * as selectorsCart from '../../store/cartReducer/selectorsCart';

import CategoryBtnGroup from '../CategoryBtnGroup';
import FormAddItem from '../FormAddItem';
import { CartFeaturesType } from '../../entities/cart';
import Cart from '../Cart';
import RattingRange from '../common/RattingRang';
import { Link } from 'react-router-dom';
import RemoveFavorite from '../common/RemoveFavorite';
import Spinner from '../common/Loading';
import ImgCmpt from '../common/ImgCmpt';

import './index.scss';

function ListItems({
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
  isOpenCart,
}: PropsType): JSX.Element {
  useEffect(() => {
    getAllItems();
    getAllCategories();
  }, [getAllCategories, getAllItems]);

  if (isLoading) {
    return <Spinner />;
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
        <div className="list-items__header">
          <ItemCardHeader />
        </div>
        <CategoryBtnGroup />

        {/* <ul className="list-items__list">
          {itemList &&
            itemList.map((item: ItemType) => (
              <li key={item.id} className="item">
                <RemoveFavorite id={item.id} />

                {item.discountPercentage >= 10 &&
                item.discountPercentage < 15 ? (
                  <span className="item__discount item__discount_top">
                    хід продажу
                  </span>
                ) : item.discountPercentage >= 15 ? (
                  <span className="item__discount item__discount">акція</span>
                ) : null}

                <Link className="item__img" to={`item/${item.id}`}>
                  <ImgCmpt
                    src={item.images[0]}
                    srcNext={item.images[1]}
                    alt={item.title}
                  />
                </Link>

                <div className="item__rating">
                  <RattingRange rating={item.rating} />
                </div>

                <h3 className="item__title">{item.title}</h3>

                <div className="item__block-info">
                  {item.discountPercentage <= 15 ? (
                    <p className="price">{item.price}$</p>
                  ) : (
                    <div className="price-dicount">
                      <p className="price-dicount__old">{item.price}$</p>
                      <p className="price-dicount__new price">
                        {(
                          item.price -
                          +(item.price / item.discountPercentage).toFixed(2)
                        ).toLocaleString('en-GB')}
                        $
                      </p>
                    </div>
                  )}
                  <div
                    className="item__cart-icon"
                    onClick={() => addItemToCart(item)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                      />
                    </svg>
                  </div>
                </div>
              </li>
            ))}

          {total >= skip ? (
            <li className="item item__btn">
              <button className="" onClick={showMore}>
                Show more
              </button>

              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="item__btn-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 13.5L12 21m0 0l-7.5-7.5M12 21V3"
                />
              </svg>
            </li>
          ) : null}
        </ul> */}
      </div>
      {isModalOpen && <FormAddItem />}
      {isOpenCart && <Cart />}
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
    cart: selectorsCart.cartItems(state),
    isOpenCart: selectorsCart.isOpenCart(state),
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
  cart: number[];
  itemList: ItemsResponseType;
  isLoading: boolean;
  skip: number;
  total: number;
  isModalOpen: boolean;
  isOpenCart: boolean;
  getAllItems: () => void;
  getMoreItemsList: (skip: number) => void;
  getAllCategories: () => void;
  closeModal: () => void;
  addItemToCart: (item: CartFeaturesType | any) => void;
};
