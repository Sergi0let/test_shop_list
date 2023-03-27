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
  const { categories, getCategoryItems, getAllItems } = props;
  const [selected, setSelected] = useState('all');
  console.log('selected', selected);

  const handleSelectCategory = (category: string) => {
    setSelected(category);
  };

  const classActive = 'radio-button-group__label--selected';
  return (
    <div className="radio-button-group">
      <ul className="radio-button-group">
        <li
          className={selected === 'all' ? classActive : ''}
          onClick={() => {
            getAllItems();
          }}
        >
          <label className="radio-button-group__label">
            <input type="radio" className="radio-button-group__input" />
            All
          </label>
        </li>
        {categories &&
          categories.map((category, index) => (
            <li
              className={selected === category ? classActive : ''}
              key={index + 1}
              onClick={() => {
                getCategoryItems(category);
                handleSelectCategory(category);
              }}
            >
              <label className="radio-button-group__label">
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
  getCategoryItems: getCategories,
  getAllItems: getAllItems,
};

export default connect(mapStateToProps, mapDispatchToProps)(CategoryBtnGroup);

type PropsType = {
  categories: string[];
  getAllCategories: () => void;
  getCategoryItems: (category: string) => void;
  getAllItems: () => void;
};

// const [selected, setSelected] = useState(-1);

// const handleClick = (e: React.MouseEvent<HTMLLabelElement>) => {
//   const target = e.target as HTMLLabelElement;
//   const index = target.dataset.index;

//   if (index) {
//     setSelected(Number(index));
//   }
//   if (index === '-1') {
//     getAllItems();
//   }

//   getCategory(categories[selected - 1]);
// };
