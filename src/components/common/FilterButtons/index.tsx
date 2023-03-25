import './index.scss';

export default function FilterButtons(props: PropsType): JSX.Element {
  const { descending, ascending, label } = props;
  return (
    <div className="filter-block">
      <div className="filter-block__label">{label}</div>
      <div className="filter-block__controls">
        <button className="filter-block__desc" onClick={() => descending()}>
          desc
        </button>
        <button className="filter-block__asc" onClick={() => ascending()}>
          asc
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
