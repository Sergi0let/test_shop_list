import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as selectorsCart from '../../store/cartReducer/selectorsCart';
import actionsCart from '../../store/cartReducer/actionsCart';
import { StateType } from '../../entities/Items';

import { CartFeaturesType } from '../../entities/cart';
import FilterButtons from '../common/FilterButtons';

import './index.scss';

const Cart = ({
  itemsInCart,
  totalPrice,
  sortItems,
  plusItem,
  minusItem,
  clearCart,
}: PropsType): JSX.Element => {
  const isBasketEmpty = itemsInCart.length <= 0;

  const renderSidebar = () => {
    return (
      <div className="continue-shop">
        <Link to="/" className="continue-shop__link btn btnPrimary">
          Continue shopping
        </Link>
        {!isBasketEmpty && (
          <div>
            <button onClick={() => clearCart()} className="btn btnSecondary">
              Clean cart
            </button>
          </div>
        )}
      </div>
    );
  };
  const renderContent = () => {
    return (
      <div>
        {isBasketEmpty && (
          <div className="warning-cart">Your shopping cart is empty</div>
        )}
        <div>
          <table>
            <tbody>
              {sortItems &&
                sortItems.map((item: CartFeaturesType, index: number) => (
                  <tr key={index}>
                    <td>
                      <img
                        className="cart-img"
                        src={item.thumbnail}
                        alt={'item.title'}
                      />
                    </td>
                    <td>{item.title}</td>
                    <td className="cart-price">Price: {item.price}$</td>
                    <td className="cart-price">
                      total: {item.count ? item.count * item.price : item.price}
                      $
                    </td>
                    <td className="cart-price">Amount: {item.count}</td>

                    <td align="center" className="cart-count">
                      <FilterButtons
                        descending={() => plusItem(item.id)}
                        ascending={() => minusItem(item.id)}
                      />
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
        {!isBasketEmpty && (
          <div>
            <div>
              <b>Total: {totalPrice}</b>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="cart">
      <div className="cart__block">
        <div>{renderSidebar()}</div>
        <div>{renderContent()}</div>
      </div>
    </div>
  );
};
const mapStateToProps = (state: StateType) => {
  return {
    itemsInCart: selectorsCart.cartItems(state),
    totalPrice: selectorsCart.totalPrice(state),
    sortItems: selectorsCart.cartSortItems(state),
  };
};

const mapDispatchToProps = {
  plusItem: actionsCart.plusItem,
  minusItem: actionsCart.minusItem,
  clearCart: actionsCart.clearCart,
};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);

type PropsType = {
  itemsInCart: any;
  totalPrice: number;
  sortItems: any;
  plusItem: (id: number) => void;
  minusItem: (id: number) => void;
  clearCart: () => void;
};
