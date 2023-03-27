import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import * as selectorsCart from '../../store/cartReducer/selectorsCart';
import { actionsCart } from '../../store/cartReducer/actionsCart';
import { StateType } from '../../entities/Items';

import './index.scss';
import { CartFeaturesType } from '../../entities/cart';
import FilterButtons from '../common/FilterButtons';
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
      <div>
        <Link to="/" className="btn btn-info">
          <span className="glyphicon glyphicon-info-sign"></span>
          <span>Continue shopping</span>
        </Link>
        {!isBasketEmpty && (
          <div>
            <button onClick={() => clearCart()} className="btn">
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
        {isBasketEmpty && <div>Your shopping cart is empty</div>}
        <div className="">
          <table className="">
            <tbody>
              {sortItems &&
                sortItems.map((item: CartFeaturesType, index: number) => (
                  <tr key={index} className="">
                    <td className="">
                      <img
                        className="cart-img"
                        src={
                          'https://images.ctfassets.net/pwv49hug9jad/4TFlhL2UJq6QgwOy2msA2G/551ecbaf540cd98dc523afb9cff82240/picture_books_in_sec_shools_664_02_18_2.jpg?fm=webp'
                        }
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

                    <td>
                      <FilterButtons
                        label="+/-"
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
          <div className="">
            <div className="">
              <b>Total: {totalPrice}</b>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="">
      <div className="">
        <div className="">{renderSidebar()}</div>
        <div className="">{renderContent()}</div>
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
