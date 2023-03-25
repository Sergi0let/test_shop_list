import { useState } from 'react';
import './index.scss';

export default function CategoryBtnGroup() {
  const [selected, setSelected] = useState(0);
  console.log('selected', selected);

  const handleClick = (e: React.MouseEvent<HTMLLabelElement>) => {
    const target = e.target as HTMLLabelElement;
    const index = target.dataset.index;

    if (index) {
      setSelected(Number(index));
    }
  };

  const classActive = 'radio-button-group__label--selected';

  return (
    <div className="radio-button-group">
      <label
        data-index="0"
        onClick={handleClick}
        className={`radio-button-group__label ${selected === 0 && classActive}`}
      >
        <input type="radio" className="radio-button-group__input" />
        All
      </label>
      <label
        data-index="2"
        onClick={handleClick}
        className={`radio-button-group__label ${selected === 2 && classActive}`}
      >
        <input type="radio" className="radio-button-group__input" />
        Category2
      </label>
      <label
        data-index="3"
        onClick={handleClick}
        className={`radio-button-group__label ${selected === 3 && classActive}`}
      >
        <input type="radio" className="radio-button-group__input" />
        Category3
      </label>
      <label
        data-index="4"
        onClick={handleClick}
        className={`radio-button-group__label ${selected === 4 && classActive}`}
      >
        <input type="radio" className="radio-button-group__input" />
        Category4
      </label>
      <label
        data-index="5"
        onClick={handleClick}
        className={`radio-button-group__label ${selected === 5 && classActive}`}
      >
        <input type="radio" className="radio-button-group__input" />
        Category5
      </label>
    </div>
  );
}
