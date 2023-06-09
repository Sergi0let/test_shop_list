import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartLength } from '../../store/cartReducer/selectorsCart';
import { isMenuOpenSelector } from '../../store/itemsReducer/selectorsItems';
import BurgerMenu from '../BurgerMenu';
import Lang from '../common/Lang';
import CartModal from '../CartModal';
import { actions } from '../../store/itemsReducer/actionsItems';
import actionsCart from '../../store/cartReducer/actionsCart';
import { isOpenCart } from '../../store/cartReducer/selectorsCart';
import SearchForm from '../SearchForm';

import './index.scss';

function Header({
  cartlength,
  isMenuOpen,
  openMenu,
  closeMenu,
  isOpenCart,
  openCart,
  closeCart,
}: PropsType): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div
          className="header-content"
          style={isMenuOpen || isOpenCart ? { zIndex: '-1' } : {}}
        >
          <div className="header-content__menu menu-header">
            <svg
              onClick={openMenu}
              className="menu-header__icon-open"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
              />
            </svg>
            <Link className="menu-header__logo" to={'/'}></Link>
          </div>
          <div className="header-content__search-header">
            <SearchForm />
          </div>
          <div className="header-content__links">
            <div className="header-content__lang-block">
              <Lang />
            </div>
            <div className="header-content__icon header-content__icon_person">
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
                  d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                />
              </svg>
            </div>

            <div onClick={() => openCart()} className="header-content__icon">
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
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              {cartlength > 0 ? (
                <span className="header-content__amount">{cartlength}</span>
              ) : null}
            </div>
          </div>
        </div>
        <div className="header-content__mobile-search">
          <SearchForm />
        </div>
      </div>
      <div
        className={`header-content__burger-menu ${
          isMenuOpen && 'header-content__burger-menu_open'
        }`}
      >
        <BurgerMenu cartlength={cartlength} />
      </div>
      <CartModal />

      {isOpenCart || isMenuOpen ? (
        <div
          onClick={() => {
            closeCart();
            closeMenu();
          }}
          className="header-content__bg-open"
        ></div>
      ) : null}
    </header>
  );
}

const mapStateToProps = (state: any) => {
  return {
    cartlength: cartLength(state),
    isMenuOpen: isMenuOpenSelector(state),
    isOpenCart: isOpenCart(state),
  };
};

const mapDispatchToProps = {
  openMenu: actions.openMenu,
  closeMenu: actions.closeMenu,
  openCart: actionsCart.openCart,
  closeCart: actionsCart.closeCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);

type PropsType = {
  isOpenCart: boolean;
  cartlength: number;
  isMenuOpen: boolean;
  openMenu: () => void;
  closeMenu: () => void;
  openCart: () => void;
  closeCart: () => void;
};
