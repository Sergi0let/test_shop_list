import { connect } from 'react-redux';
import { inputData } from '../../seeds/input_data';
import {
  actionsSearch,
  searchItems,
  setFilter,
} from '../../store/items/actionsItems';
import * as selector from '../../store/items/selectorsItems';
import './index.scss';

function SearchForm(props: PropsType): JSX.Element {
  const { setFilter, inputFilterValue, searchItem, removeFilter } = props;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);

    searchItem(inputFilterValue);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    removeFilter();
  };

  return (
    <div className="form">
      <form className="form__block" onSubmit={handleSubmit}>
        <input
          type={inputData.type}
          placeholder={inputData.placeholder}
          onChange={handleInputChange}
          value={inputFilterValue}
        />
      </form>
      <div className="form__btn">
        <button className="btn btnPrimary">Add item</button>
      </div>
    </div>
  );
}

const mapStateToProps = (state: any) => {
  return {
    inputFilterValue: selector.inputValue(state),
  };
};

const mapDispatchToProps = {
  setFilter: setFilter,
  searchItem: searchItems,
  removeFilter: actionsSearch.removeFilter,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);

type PropsType = {
  inputFilterValue: string;
  searchItem: (inputValue: string) => void;
  setFilter: (inputValue: string) => void;
  removeFilter: () => void;
};
