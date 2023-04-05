import { connect } from 'react-redux';
import * as actionsRemove from '../../../store/items/actionsItems';

import './index.scss';

function RemoveFavorite(props: PropsType): JSX.Element {
  const { removeItem, id } = props;

  if (!id) {
    return <div>x</div>;
  }

  const handleRemove = () => {
    removeItem(id);
  };

  return (
    <div onClick={handleRemove} className="favorite-wrapper">
      <div className="favorite-wrapper__info">Remove this item</div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
        />
      </svg>
    </div>
  );
}

const mapDispatchToProps = {
  removeItem: actionsRemove.removeItem,
};
export default connect(null, mapDispatchToProps)(RemoveFavorite);

type PropsType = {
  id: number | undefined;
  removeItem: (id: number) => void;
};