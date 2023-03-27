import { featuresData, technologiesData } from '../../seeds/features_data';

import './index.scss';

export default function ProjectDescription() {
  return (
    <div className="features">
      <h1 className="features__title">Project Description</h1>
      <div className="features__block">
        <ul className="features__list-item">
          {featuresData.map((elem, index) => (
            <li className="features__item" key={index}>
              {elem}
            </li>
          ))}
        </ul>
        <ul className="features__list-item">
          {technologiesData.map((elem, index) => (
            <li className="features__item" key={index}>
              {elem}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
