import './index.scss';

export default function FilterButtons(props: PropsType): JSX.Element {
  const { descending, ascending, label } = props;
  return (
    <div className="filter-block">
      <div className="title-small">{label}</div>
      <div className="filter-block__controls">
        <button className="filter-block__desc" onClick={() => descending()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="none"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
        </button>
        <button className="filter-block__asc" onClick={() => ascending()}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="none"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

type PropsType = {
  label: string;
  descending: () => void;
  ascending: () => void;
};
