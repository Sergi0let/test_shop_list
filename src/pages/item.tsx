import { useEffect } from 'react';
import { connect } from 'react-redux';
import { ItemsStateType } from '../entities/Items';
import { useParams } from 'react-router-dom';
import { getItem } from '../store/reducer';

import ItemPage from '../components/common/ItemPage';

function Item(props: any): JSX.Element {
  const { item, isLoading, getItemData } = props;
  const { id } = useParams();

  useEffect(() => {
    getItemData(Number(id));
  }, [getItemData, id]);

  if (isLoading) return <div>Loading</div>;

  return (
    <ItemPage
      category={item.category}
      rating={item.rating}
      stock={item.stoke}
      thumbnail={item.thumbnail}
      title={item.title}
      price={item.price}
      description={item.description}
    />
  );
}

const mapStateToProps = (state: Omit<ItemsStateType, 'itemList'>) => {
  return {
    item: state.item,
    isLoading: state.isLoading,
  };
};

const mapDispatchToProps = {
  getItemData: getItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);
