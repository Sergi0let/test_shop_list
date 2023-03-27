import React from 'react'
import {connect} from 'react-redux'
import {getTotalBasketPrice, getBasketPhonesWithCount} from '../../selectors'
import {removePhoneFromBasket, basketCheckout, cleanBasket} from '../../action'
import {Link} from 'react-router-dom'

const Basket = ({
  phones,
  totalPrice,
  removePhoneFromBasket,
  basketCheckout,
  cleanBasket,
}) => {
  const isBasketEmpty = phones.length <= 0

  const renderSidebar = () => {
    return (
      <div>
        <Link to="/" className="btn btn-info">
          <span className="glyphicon glyphicon-info-sign"></span>
          <span>Continue shopping</span>
        </Link>
        {!isBasketEmpty && (
          <div>
            <button onClick={cleanBasket} className="btn btn-danger">
              <span className="glyphicon glyphicon-trash"></span>
              Clean cart
            </button>
            <button
              className="btn btn-success"
              onClick={() => basketCheckout(phones)}
            >
              <span className="glyphicon glyphicon-envelope"></span>
              Clean cart
            </button>
          </div>
        )}
      </div>
    )
  }
  const renderContent = ({removePhoneFromBasket}) => {
    return (
      <div>
        {isBasketEmpty && <div>Your shopping cart is empty</div>}
        <div className="table-responsive">
          <table className="table-bordered table-striped table-condensed cf">
            <tbody>
              {phones.map((phone, index) => (
                <tr key={index} className="item-checout">
                  <td className="first-column-checkout">
                    <img
                      className="img-thumbnail"
                      src={phone.image}
                      alt={phone.name}
                    />
                  </td>
                  <td>{phone.name}</td>
                  <td>{phone.price}</td>
                  <td>{phone.count}</td>
                  <td>
                    <span
                      onClick={() => removePhoneFromBasket(phone.id)}
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
              <b>Total: </b>${totalPrice}
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="view-container">
      <div className="container">
        <div className="row">
          <div className="col-md-9">
            {renderContent({removePhoneFromBasket})}
          </div>
          <div className="col-md-3 btn-user-checkout">{renderSidebar()}</div>
        </div>
      </div>
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    phones: getBasketPhonesWithCount(state),
    totalPrice: getTotalBasketPrice(state),
  }
}

const mapDispatchToProps = {
  removePhoneFromBasket,
  basketCheckout,
  cleanBasket,
}
export default connect(mapStateToProps, mapDispatchToProps)(Basket)
