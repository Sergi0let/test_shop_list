import { useState } from 'react';
import { formatNumber } from '../../../helpers/helpers';
import './index.scss';

function CartItem({
  id,
  src,
  title,
  price,
  count,
  plusItem,
  minusItem,
  removeItem,
}: PropsType) {
  const [showFeatures, setShowFeatures] = useState(false);
  const [removeBtn, setRemoveBtn] = useState(false);

  const handleShowFeatures = () => {
    setShowFeatures(!showFeatures);
  };

  const mouseLeave = () => {
    setRemoveBtn(false);
    console.log('mouseLeave', removeBtn);
  };

  const handleRemoveBtn = () => {
    setRemoveBtn(!removeBtn);
  };

  const defaultImg = 'https://via.placeholder.com/150';

  return (
    <li className="cart-modal__item item-cart">
      <div className="item-cart__top">
        <div className="item-cart__img">
          <img
            src={src || defaultImg}
            alt={title || 'some product image'}
            title={title || 'some product image'}
          />
        </div>
        <h3 className="item-cart__title">{title}</h3>
        <div className="item-cart__remove-block ">
          <button className="item-cart__remove" onClick={handleRemoveBtn}>
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
                d="M12 6.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 12.75a.75.75 0 110-1.5.75.75 0 010 1.5zM12 18.75a.75.75 0 110-1.5.75.75 0 010 1.5z"
              />
            </svg>
          </button>

          {removeBtn && (
            <div
              className="item-cart__remove-modal"
              onClick={() => removeItem(id)}
              onMouseLeave={mouseLeave}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="item-cart__remove-modal-icon"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                />
              </svg>
              <span>Remove</span>
            </div>
          )}
        </div>
      </div>
      <div className="item-cart__bottom">
        <div className="item-cart__features">
          <p className="item-cart__feature" onClick={handleShowFeatures}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className={`item-cart__chevron ${
                showFeatures && 'item-cart__chevron_left'
              }`}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
            Additional Services (...)
          </p>
          {showFeatures && (
            <ul className="item-cart__feature-list">
              <li className="item-cart__feature-item">additional services 1</li>
              <li className="item-cart__feature-item">additional services 2</li>
            </ul>
          )}
        </div>
        <div className="item-cart__controls">
          <button
            className="item-cart__control-btn"
            onClick={() => minusItem(id)}
          >
            -
          </button>
          <span className="item-cart__control-count">{count}</span>
          <button
            className="item-cart__control-btn"
            onClick={() => plusItem(id)}
          >
            +
          </button>
        </div>
        <div className="item-cart__price">{formatNumber(price)}$</div>
      </div>
    </li>
  );
}

export default CartItem;

type PropsType = {
  id: number;
  src: string;
  title: string;
  price: number;
  count: number;
  features?: Array<string>;
  plusItem: (id: number) => void;
  minusItem: (id: number) => void;
  removeItem: (id: number) => void;
};
