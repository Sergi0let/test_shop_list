import { useParams } from 'react-router-dom';
import ItemPage from '../components/common/ItemPage';

function Item(): JSX.Element {
  const { id } = useParams();
  console.log(id);
  return <ItemPage />;
}

export default Item;
