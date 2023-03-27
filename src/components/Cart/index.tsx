import { connect } from 'react-redux';
import * as selectorsCart from '../../store/cartReducer/selectorsCart';
// import { getTotalBasketPrice, getBasketPhonesWithCount } from '../../selectors';
// import {
//   removePhoneFromBasket,
//   basketCheckout,
//   cleanBasket,
// } from '../../action';
import { Link } from 'react-router-dom';
import { ItemsResponseType, StateType } from '../../entities/Items';

import './index.scss';

const Cart = ({ itemsInCart }: PropsType) => {
  const isBasketEmpty = itemsInCart.length <= 0;
  console.log('itemsInCart', itemsInCart);

  const renderSidebar = () => {
    return (
      <div>
        <Link to="/" className="btn btn-info">
          <span className="glyphicon glyphicon-info-sign"></span>
          <span>Continue shopping</span>
        </Link>
        {!isBasketEmpty && (
          <div>
            <button className="btn btn-danger">
              <span className="glyphicon glyphicon-trash"></span>
              Clean cart
            </button>
            <button className="btn btn-success">
              <span className="glyphicon glyphicon-envelope"></span>
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
        <div className="table-responsive">
          <table className="table-bordered table-striped table-condensed cf">
            <tbody>
              {itemsInCart.map((item) => (
                <tr className="item-checout">
                  <td className="first-column-checkout">
                    <img
                      className="img-thumbnail"
                      src={
                        'https://images.ctfassets.net/pwv49hug9jad/4TFlhL2UJq6QgwOy2msA2G/551ecbaf540cd98dc523afb9cff82240/picture_books_in_sec_shools_664_02_18_2.jpg?fm=webp'
                      }
                      alt={'item.title'}
                    />
                  </td>
                  <td>{'item.title'}</td>
                  <td>{'item.price'}$</td>
                  <td>count: {}</td>
                  <td>
                    <span
                      // onClick={() => removePhoneFromBasket(phone.id)}
                      className="delete-cart"
                    ></span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        {!isBasketEmpty && (
          <div className="row">
            <div className="pull-right total-user-checkout">
              <b>Total: </b>
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-9">{renderContent()}</div>
        <div className="col-md-3 btn-user-checkout">{renderSidebar()}</div>
      </div>
    </div>
  );
};
const mapStateToProps = (state: StateType) => {
  return {
    itemsInCart: selectorsCart.cartItems(state),
  };
};

const mapDispatchToProps = {};
export default connect(mapStateToProps, mapDispatchToProps)(Cart);

type PropsType = {
  itemsInCart: number[];
};
