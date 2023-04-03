import { connect } from 'react-redux';
import { inputData } from '../../seeds/input_data';
import {
  actionsModal,
  actionsSearch,
  searchItems,
  setFilter,
} from '../../store/items/actionsItems';
import * as selector from '../../store/items/selectorsItems';
import './index.scss';

function SearchForm(props: PropsType): JSX.Element {
  const {
    setFilter,
    inputFilterValue,
    searchItem,
    removeFilter,
    // openModal,
    // isModalOpen,
    // closeModal,
  } = props;

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value);
    searchItem(inputFilterValue);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    removeFilter();
  };

  return (
    <form className="search" onSubmit={handleSubmit}>
      <input
        className="search__input"
        type={inputData.type}
        placeholder={inputData.placeholder}
        onChange={handleInputChange}
        value={inputFilterValue}
      />
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        className="search__icon search__icon_search"
      >
        <path
          fillRule="evenodd"
          d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
          clipRule="evenodd"
        />
      </svg>

      {inputFilterValue.length > 0 && (
        <button
          onClick={() => removeFilter()}
          className="search__icon search__icon_remove"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
          </svg>
        </button>
      )}

      <div className="search__icon search__icon_microphone">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M7 4a3 3 0 016 0v6a3 3 0 11-6 0V4z" />
          <path d="M5.5 9.643a.75.75 0 00-1.5 0V10c0 3.06 2.29 5.585 5.25 5.954V17.5h-1.5a.75.75 0 000 1.5h4.5a.75.75 0 000-1.5h-1.5v-1.546A6.001 6.001 0 0016 10v-.357a.75.75 0 00-1.5 0V10a4.5 4.5 0 01-9 0v-.357z" />
        </svg>
      </div>

      <button className="search__btn" type="submit">
        Search
      </button>
    </form>
  );
}

const mapStateToProps = (state: any) => {
  return {
    inputFilterValue: selector.inputValue(state),
    isModalOpen: selector.isModalOpen(state),
  };
};

const mapDispatchToProps = {
  setFilter: setFilter,
  searchItem: searchItems,
  removeFilter: actionsSearch.removeFilter,
  openModal: actionsModal.openModal,
  closeModal: actionsModal.closeModal,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);

type PropsType = {
  inputFilterValue: string;
  isModalOpen: boolean;
  searchItem: (inputValue: string) => void;
  setFilter: (inputValue: string) => void;
  removeFilter: () => void;
  openModal: () => void;
  closeModal: () => void;
};

// eslint-disable-next-line no-lone-blocks
{
  /* <div className="form__btn">
        {isModalOpen ? (
          <button className="btn btnPrimary" onClick={closeModal}>
            Close Add Item
          </button>
        ) : (
          <button className="btn btnPrimary" onClick={openModal}>
            Open Add Item
          </button>
        )}
      </div> */
}
