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

import './index.scss';
import CategoryBtnGroup from '../CategoryBtnGroup';
import FormAddItem from '../FormAddItem';
import { CartFeaturesType } from '../../entities/cart';
import Cart from '../Cart';
import RattingRange from '../common/RattingRang';
import { Link } from 'react-router-dom';
import ButtonRemove from '../common/ButtonRemove';
import Spinner from '../common/Loading';

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
        <CategoryBtnGroup />
        <div className="list-items__list">
          <table>
            <tbody>
              <ItemCardHeader />
              {itemList &&
                itemList.map((item: ItemType) => (
                  <tr key={item.id}>
                    <td>
                      <div>Id:</div>
                      {item.id}
                    </td>
                    <td
                      className="list-items__title"
                      onClick={() => addItemToCart({ ...item })}
                    >
                      {item.title}
                    </td>
                    <td className="list-items__description">
                      {item.description}
                    </td>
                    <td>{item.price}</td>
                    <td className="list-items__img-link">
                      <Link to={`item/${item.id}`}>
                        <img src={item.thumbnail} alt={item.title} />
                      </Link>
                    </td>
                    <td>
                      <div>
                        <div>({item.rating})</div>
                        <RattingRange rating={item.rating} />
                      </div>
                    </td>
                    <td>{item.category}</td>
                    <td>
                      <div>Amount</div>
                      {item.stock}
                    </td>
                    <td>
                      <ButtonRemove id={item.id} />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
          <div style={{ textAlign: 'center' }}>
            {total >= skip ? (
              <button className="btn btnPrimary" onClick={showMore}>
                Show more
              </button>
            ) : null}
          </div>
        </div>
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
