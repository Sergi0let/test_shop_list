import { connect } from 'react-redux';
import FilterButtons from '../FilterButtons';
import * as action from '../../../store/items/actionsItems';

import './index.scss';

function ItemCardHeader(props: PropsType): JSX.Element {
  const {
    filterByIDDesc,
    filterByIDAsc,
    filterByTitleAsc,
    filterByTitleDesc,
    filterByPriceDesc,
    filterByPriceAsc,
    filterByRatingDesc,
    filterByRatingAsc,
    filterByStockDesc,
    filterByStockAsc,
  } = props;
  return (
    <div className="table-header">
      <div className="table-header__controls-filter">
        <FilterButtons
          descending={filterByIDDesc}
          ascending={filterByIDAsc}
          label="ID"
        />
        <FilterButtons
          descending={filterByTitleAsc}
          ascending={filterByTitleDesc}
          label="Title"
        />
        <h5 className="title-small">Description</h5>
        <FilterButtons
          descending={filterByPriceDesc}
          ascending={filterByPriceAsc}
          label="Price"
        />
        <h5 className="title-small">Picture</h5>
        <FilterButtons
          descending={filterByRatingDesc}
          ascending={filterByRatingAsc}
          label="Rating"
        />
        <div>
          <FilterButtons
            descending={filterByStockDesc}
            ascending={filterByStockAsc}
            label="Stock"
          />
        </div>
      </div>
    </div>
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
  filterByIDDesc: () => void;
  filterByIDAsc: () => void;
  filterByTitleDesc: () => void;
  filterByTitleAsc: () => void;
  filterByPriceDesc: () => void;
  filterByPriceAsc: () => void;
  filterByRatingDesc: () => void;
  filterByRatingAsc: () => void;
  filterByStockDesc: () => void;
  filterByStockAsc: () => void;
};
