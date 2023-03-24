import { useState } from 'react';
import { inputData } from '../../seeds/input_data';
import './index.scss';

export default function SearchForm() {
  const [inputValue, setInputValue] = useState<string>('');
  console.log('inputValue:  ', inputValue);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  return (
    <form className="form">
      <input
        type={inputData.type}
        placeholder={inputData.placeholder}
        onChange={handleInputChange}
      />
      <div className="form__btn">
        <button type="submit" className="btn btnPrimary">
          Search
        </button>
      </div>
    </form>
  );
}
