import { useState } from 'react';
import flag from '../../../img/flag_ukr.svg';

import './index.scss';

function Lang() {
  const [lang, setLang] = useState('UA' as 'UA' | 'RU');

  const changeLangNative = () => {
    setLang('UA');
  };

  const changeLang = () => {
    setLang('RU');
  };
  return (
    <ul className="lang">
      <li className={`lang__item ${lang === 'RU' && 'active-lang'}`}>
        <button onClick={changeLang}>RU</button>
      </li>
      <li
        className={`lang__item ${
          lang === 'UA' && 'active-lang'
        } lang__item_native`}
      >
        <div className="lang__flag">
          <img src={flag} alt="Flag Ukraine" />
        </div>
        <button onClick={changeLangNative}>UA</button>
      </li>
    </ul>
  );
}

export default Lang;
