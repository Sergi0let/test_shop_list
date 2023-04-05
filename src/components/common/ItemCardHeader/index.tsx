import { connect } from 'react-redux';
import * as action from '../../../store/items/actionsItems';

import './index.scss';

function ItemCardHeader(props: PropsType): JSX.Element {
  const {
    filterByPriceDesc,
    filterByPriceAsc,
    filterByRatingDesc,
    filterByRatingAsc,
    filterByStockDesc,
    filterByStockAsc,
  } = props;

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    switch (e.target.value) {
      case 'desc':
        filterByPriceDesc();
        break;

      case 'asc':
        filterByPriceAsc();
        break;

      case 'rating_desc':
        filterByRatingDesc();
        break;

      case 'rating_asc':
        filterByRatingAsc();
        break;

      case 'stock_desc':
        filterByStockDesc();
        break;

      case 'stock_asc':
        filterByStockAsc();
        break;

      default:
        return null;
    }
  };
  return (
    <nav className="item-card-header">
      <div className="item-card-header__title-group group-title">
        <h1 className="group-title__title">All products</h1>
        <p className="group-title__count">4 items</p>
      </div>

      <div className="item-card-header__select-group">
        <select className="group-select" onChange={handleSelect} name="filter">
          <option className="group-select__item" value="default">
            for raiting
          </option>
          <option className="group-select__item" value="desc">
            expensive to cheap
          </option>
          <option className="group-select__item" value="asc">
            cheap to expensive
          </option>
          <option className="group-select__item" value="rating_desc">
            less popular
          </option>
          <option className="group-select__item" value="rating_asc">
            more popular
          </option>
          <option className="group-select__item" value="stock_desc">
            less stock
          </option>
          <option className="group-select__item" value="stock_asc">
            more stock
          </option>
        </select>
      </div>
    </nav>
  );
}

const mapDispathToProps = {
  filterByIDDesc: action.filterByIDDesc,
  filterByIDAsc: action.filterByIDAsc,
  filterByTitleDesc: action.filterByTitleDesc,
  filterByTitleAsc: action.filterByTitleAsc,
  filterByPriceDesc: action.filterByPriceDesc,
  filterByPriceAsc: action.filterByPriceAsc,
  filterByRatingDesc: action.filterByRatingDesc,
  filterByRatingAsc: action.filterByRatingAsc,
  filterByStockDesc: action.filterByStockDesc,
  filterByStockAsc: action.filterByStockAsc,
};
export default connect(null, mapDispathToProps)(ItemCardHeader);

type PropsType = {
  filterByPriceDesc: () => void;
  filterByPriceAsc: () => void;
  filterByRatingDesc: () => void;
  filterByRatingAsc: () => void;
  filterByStockDesc: () => void;
  filterByStockAsc: () => void;
};
