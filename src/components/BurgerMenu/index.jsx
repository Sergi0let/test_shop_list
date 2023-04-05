// import CategoryBtnGroup from '../CategoryBtnGroup';
import telegram from '../../img/telegram.png';
import viber from '../../img/viber.png';
import instagram from '../../img/instagram.png';
import youtube from '../../img/youtube.jpg';
import google_play from '../../img/google_play.png';
import app_store from '../../img/app_store.png';

import logo from '../../img/logo-rozetka.svg';

import './index.scss';

function BurgerMenu() {
  return (
    <div className="burger-menu">
      <div className="burger-menu__header">
        <div className="burger-menu__header-logo">
          <img src={logo} alt="logo" />
          <button type="button" className="burger-menu__close-btn">
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
            <div className="registration__icon">
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
              <button>Exit</button>
              <button>Registration</button>
              <p>Sign in for advanced features</p>
            </div>
          </div>
        </div>
      </div>

      <div className="burger-menu__cart">
        <div className="cart">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="cart__icon"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
            />
          </svg>
          <div className="cart__amount">1</div>
          {/* {cartlength > 0 ? (
            <span className="header-content__amount">{cartlength}</span>
          ) : null} */}
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

      <div className="burger-menu__socials">
        <p>We are on social networks</p>
        <ul className="socials">
          <li className="socials__item">
            <a href="/">
              <img src={telegram} alt="telegram" />
            </a>
          </li>
          <li className="socials__item">
            <a href="/">
              <img src={viber} alt="telegram" />
            </a>
          </li>
          <li className="socials__item">
            <a href="/">
              <img src={instagram} alt="telegram" />
            </a>
          </li>
          <li className="socials__item">
            <a href="/">
              <img src={youtube} alt="telegram" />
            </a>
          </li>
        </ul>
      </div>
      {/* <CategoryBtnGroup /> */}
    </div>
  );
}

export default BurgerMenu;
