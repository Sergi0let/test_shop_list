import { connect } from 'react-redux';
import FilterButtons from '../FilterButtons';
import * as action from '../../../store/items/actionsItems';

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
    <tr className="item-header">
      <td>
        <FilterButtons
          descending={filterByIDDesc}
          ascending={filterByIDAsc}
          label="ID"
        />
      </td>
      <td>
        <FilterButtons
          descending={filterByTitleAsc}
          ascending={filterByTitleDesc}
          label="Title"
        />
      </td>

      <td>Description</td>

      <td>
        <FilterButtons
          descending={filterByPriceDesc}
          ascending={filterByPriceAsc}
          label="Price"
        />
      </td>
      <td>Picture</td>

      <td>
        <FilterButtons
          descending={filterByRatingDesc}
          ascending={filterByRatingAsc}
          label="Rating"
        />
      </td>
      <td>Category</td>
      <td>
        <FilterButtons
          descending={filterByStockDesc}
          ascending={filterByStockAsc}
          label="Stock"
        />
      </td>
      <td></td>
    </tr>
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
