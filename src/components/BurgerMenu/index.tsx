import { useState } from 'react';
import { connect } from 'react-redux';

import { actions } from '../../store/itemsReducer/actionsItems';

import CategoryBtnGroup from '../CategoryBtnGroup';
import telegram from '../../img/telegram.png';
import viber from '../../img/viber.png';
import gmail from '../../img/gmail.png';
import google_play from '../../img/google_play.png';
import app_store from '../../img/app_store.png';
import whatsup from '../../img/whatsup.png';
import logo from '../../img/logo-rozetka.svg';

import './index.scss';

import actionsCart from '../../store/cartReducer/actionsCart';

function BurgerMenu({
  closeMenu,
  cartlength,
  openCart,
}: BurgerMenuProps): JSX.Element {
  const [categories, setCategories] = useState(false);

  const onCategoriesClick = () => {
    setCategories(!categories);
  };

  return (
    <div className="burger-menu">
      <div className="burger-menu__top">
        <div className="burger-menu__header">
          <div className="burger-menu__header-logo">
            <img src={logo} alt="logo" />
            <button
              onClick={closeMenu}
              type="button"
              className="burger-menu__close-btn"
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
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
          <div className="burger-menu__registration">
            <div className="registration">
              <div
                className="registration__icon"
                onClick={() =>
                  alert('While this functionality is not supported')
                }
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
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>

              <div className="registration__features">
                <button onClick={() => closeMenu()}>Exit</button>
                <button
                  onClick={() =>
                    alert('While this functionality is not supported')
                  }
                >
                  Registration
                </button>
                <p>Sign in for advanced features</p>
              </div>
            </div>
          </div>
        </div>
        <div className="burger-menu__catalog" onClick={onCategoriesClick}>
          <div className="catalog">
            <div>
              <svg
                className="catalog__icon icon-svg"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 7.125C2.25 6.504 2.754 6 3.375 6h6c.621 0 1.125.504 1.125 1.125v3.75c0 .621-.504 1.125-1.125 1.125h-6a1.125 1.125 0 01-1.125-1.125v-3.75zM14.25 8.625c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v8.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-8.25zM3.75 16.125c0-.621.504-1.125 1.125-1.125h5.25c.621 0 1.125.504 1.125 1.125v2.25c0 .621-.504 1.125-1.125 1.125h-5.25a1.125 1.125 0 01-1.125-1.125v-2.25z"
                />
              </svg>
              Catalog items
            </div>
          </div>
          {categories ? (
            <div className="catalog__categories" onClick={() => closeMenu()}>
              <CategoryBtnGroup />
            </div>
          ) : null}
        </div>
        <div
          className="burger-menu__cart"
          onClick={() => {
            closeMenu();
            openCart();
          }}
        >
          <div className="cart">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="cart__icon icon-svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              Cart
            </div>

            {cartlength > 0 ? (
              <div className="cart__amount">{cartlength}</div>
            ) : null}
          </div>
        </div>
        <div className="burger-menu__apps">
          <p>Download our apps</p>
          <ul className="apps">
            <li className="apps__item">
              <a href="/">
                <img src={google_play} alt="telegram" />
              </a>
            </li>
            <li className="apps__item">
              <a href="/">
                <img src={app_store} alt="telegram" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="burger-menu__socials">
        <p>You can find me in social networks</p>
        <ul className="socials">
          <li className="socials__item">
            <a href="https://t.me/serg_v6" target="_blank" rel="noreferrer">
              <img src={telegram} alt="telegram" />
            </a>
          </li>
          <li className="socials__item">
            <a
              href="viber://add?number=+380996230466"
              target="_blank"
              rel="noreferrer"
            >
              <img src={viber} alt="viber" />
            </a>
          </li>
          <li className="socials__item">
            <a
              href="https://wa.me/380996230466"
              target="_blank"
              rel="noreferrer"
            >
              <img src={whatsup} alt="whatsup" />
            </a>
          </li>
          <li className="socials__item">
            <a
              href="mailto:s.vashkevych@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <img src={gmail} alt="gmail" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}

const mapDispatchToProps = {
  closeMenu: actions.closeMenu,
  openCart: actionsCart.openCart,
};

export default connect(null, mapDispatchToProps)(BurgerMenu);

type BurgerMenuProps = {
  cartlength: number;
  closeMenu: () => void;
  openCart: () => void;
};
