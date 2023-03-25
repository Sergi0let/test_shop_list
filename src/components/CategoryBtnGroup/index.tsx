import { useState } from 'react';
import {
  getAllCategories,
  getAllItems,
  getCategories,
} from '../../store/items/actionsItems';
import { connect } from 'react-redux';
import { StateType } from '../../entities/Items';
import * as selector from '../../store/items/selectorsItems';

import './index.scss';

function CategoryBtnGroup(props: PropsType): JSX.Element {
  const { categories, getCategory, getAllItems } = props;
  const [selected, setSelected] = useState(-1);

  const handleClick = (e: React.MouseEvent<HTMLLabelElement>) => {
    const target = e.target as HTMLLabelElement;
    const index = target.dataset.index;

    if (index) {
      setSelected(Number(index));
    }
    if (index === '-1') {
      getAllItems();
    }

    getCategory(categories[selected - 1]);
  };

  const classActive = 'radio-button-group__label--selected';
  return (
    <div className="radio-button-group">
      <ul className="radio-button-group">
        <label
          onClick={handleClick}
          data-index="-1"
          className={`radio-button-group__label ${
            selected === -1 && classActive
          }`}
        >
          <input type="radio" className="radio-button-group__input" />
          All
        </label>
        {categories &&
          categories.map((category, index) => (
            <li key={index + 1}>
              <label
                data-index={index + 1}
                onClick={handleClick}
                className={`radio-button-group__label ${
                  selected === index + 1 && classActive
                }`}
              >
                <input type="radio" className="radio-button-group__input" />
                {category}
              </label>
            </li>
          ))}
      </ul>
    </div>
  );
}
const mapStateToProps = (state: StateType) => {
  return {
    categories: selector.categories(state),
  };
};

const mapDispatchToProps = {
  getAllCategories: getAllCategories,
  getCategory: getCategories,
  getAllItems: getAllItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryBtnGroup);

type PropsType = {
  categories: string[];
  getAllCategories: () => void;
  getCategory: (category: string) => void;
  getAllItems: () => void;
};
