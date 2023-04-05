import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { cartLength } from '../../store/cartReducer/selectorsCart';
import Lang from '../common/Lang';

import SearchForm from '../SearchForm';

import './index.scss';

function Header({ cartlength }: PropsType): JSX.Element {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <div className="header-content__menu menu-header">
            <svg
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

            <Link to="/cart" className="header-content__icon">
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
            </Link>
          </div>
        </div>
        <div className="header-content__mobile-search">
          <SearchForm />
        </div>
      </div>
    </header>
  );
}

const mapStateToProps = (state: any) => {
  return {
    cartlength: cartLength(state),
  };
};

export default connect(mapStateToProps, null)(Header);

type PropsType = {
  cartlength: number;
};
