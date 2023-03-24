import { useEffect, useState } from 'react';
import './index.scss';

type RattingRangeProps = {
  ratting: number;
};

export default function RattingRange(props: RattingRangeProps): JSX.Element {
  const { ratting } = props;
  const [count, setCount] = useState(0);

  useEffect(() => {
    setCount(ratting);
  }, [ratting]);

  const stars = Array.from({ length: 5 }, (_, i) => {
    const ratingValue = i + 1;
    const filled = ratingValue <= count;

    return (
      <span
        key={ratingValue}
        style={{ cursor: 'pointer', color: filled ? 'gold' : 'gray' }}
      >
        &#x2605;
      </span>
    );
  });

  return <div>{stars}</div>;
}
