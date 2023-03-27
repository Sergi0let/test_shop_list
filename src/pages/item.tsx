import { useEffect } from 'react';
import { connect } from 'react-redux';
import { ItemsResponseType, StateType } from '../entities/Items';
import { useParams } from 'react-router-dom';
import { getItem } from '../store/items/actionsItems';
import ItemPage from '../components/common/ItemPage';

import * as selectors from '../store/items/selectorsItems';

function Item({ item, isLoading, getItemData }: PropsType): JSX.Element {
  const { id } = useParams();

  useEffect(() => {
    getItemData(Number(id));
  }, [getItemData, id]);

  if (isLoading) return <div>Loading</div>;

  return (
    <ItemPage
      category={item.category}
      rating={item.rating}
      stock={item.stock}
      thumbnail={item.thumbnail}
      title={item.title}
      price={item.price}
      description={item.description}
    />
  );
}

const mapStateToProps = (state: StateType) => {
  return {
    item: selectors.item(state),
    isLoading: selectors.isLoadingItem(state),
  };
};

const mapDispatchToProps = {
  getItemData: getItem,
};

export default connect(mapStateToProps, mapDispatchToProps)(Item);

type PropsType = {
  item: ItemsResponseType;
  isLoading: boolean;
  getItemData: (id: number) => void;
};
