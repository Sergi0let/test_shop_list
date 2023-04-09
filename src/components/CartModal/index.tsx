import { connect } from 'react-redux';
import { CartFeaturesType } from '../../entities/cart';
import { StateType } from '../../entities/Items';
import { formatNumber, showOrderMessage } from '../../helpers/helpers';
import actionsCart from '../../store/cartReducer/actionsCart';
import {
  cartItems,
  cartSortItems,
  isOpenCart,
  totalPrice,
} from '../../store/cartReducer/selectorsCart';
import CartItem from '../common/CartItem';

import './index.scss';

function CartModal({
  isOpenCart,
  closeCart,
  itemsInCart,
  sortItems,
  totalPrice,
  plusItem,
  minusItem,
  removeItem,
  clearCart,
}: PropsType): JSX.Element {
  const isCartEmpty = itemsInCart.length <= 0;

  return (
    <div className={`cart-modal ${!isOpenCart && 'close-cart'}`}>
      <div className="cart-modal__header">
        <h2 className="cart-modal__title">Cart</h2>
        <button
          className="cart-modal__close-btn"
          type="button"
          onClick={() => closeCart()}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      {isCartEmpty ? (
        <div className="cart-modal__empty">Your shopping cart is empty</div>
      ) : (
        <ul className="cart-modal__list">
          {sortItems &&
            sortItems.map((item: CartFeaturesType, index: number) => (
              <CartItem
                key={index}
                id={item.id}
                src={item.thumbnail}
                title={item.title}
                count={item.count || 1}
                price={item.price}
                plusItem={plusItem}
                minusItem={minusItem}
                removeItem={removeItem}
                description={item.description}
              />
            ))}
        </ul>
      )}

      <div className="cart-modal__actions actions-cart">
        <button className="actions-cart__continue" onClick={() => closeCart()}>
          Continue shopping
        </button>
        {!isCartEmpty && (
          <div className="actions-cart__resive">
            <div className="actions-cart__amount">
              {formatNumber(totalPrice)}$
            </div>
            <button
              className="actions-cart__btn"
              onClick={() => {
                showOrderMessage(formatNumber(totalPrice));
                closeCart();
                clearCart();
              }}
            >
              To order
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

type PropsType = {
  isOpenCart: boolean;
  itemsInCart: any;
  totalPrice: number;
  sortItems: any;
  closeCart: () => void;
  plusItem: (id: number) => void;
  minusItem: (id: number) => void;
  clearCart: () => void;
  removeItem: (id: number) => void;
};

const mapStateToProps = (state: StateType) => {
  return {
    isOpenCart: isOpenCart(state),
    itemsInCart: cartItems(state),
    totalPrice: totalPrice(state),
    sortItems: cartSortItems(state),
  };
};

const mapDispatchToProps = {
  closeCart: actionsCart.closeCart,
  plusItem: actionsCart.plusItem,
  minusItem: actionsCart.minusItem,
  clearCart: actionsCart.clearCart,
  removeItem: actionsCart.removeItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(CartModal);
