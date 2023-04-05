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
  const { categories, getCategoryItems, getAllItems, onSetCategory } = props;
  const [selected, setSelected] = useState('all');

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
            onSetCategory('all');
          }}
        >
          <label className="radio-button-group__label">
            <input type="radio" className="radio-button-group__input" />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="radio-button-group__icon"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
              />
            </svg>
            all
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
                onSetCategory(category);
              }}
            >
              <label className="radio-button-group__label">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="radio-button-group__icon"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15.042 21.672L13.684 16.6m0 0l-2.51 2.225.569-9.47 5.227 7.917-3.286-.672zM12 2.25V4.5m5.834.166l-1.591 1.591M20.25 10.5H18M7.757 14.743l-1.59 1.59M6 10.5H3.75m4.007-4.243l-1.59-1.59"
                  />
                </svg>

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
  onSetCategory: (category: string) => void;
};
