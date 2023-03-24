import { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
import ItemPage from '../components/common/ItemPage';
import { ItemType } from '../entities/Items';

function Item(props: any): JSX.Element {
  // const { id } = useParams();
  // const [itemData, setItemData] = useState<ItemType | null>(null);
  // console.log('itemData', itemData);

  // useEffect(() => {
  //   const itemData =
  //     id && props.itemData.find((item: { id: number }) => item.id === +id);
  //   if (itemData) {
  //     setItemData(itemData);
  //   }
  // }, [id]);

  // if (!itemData) return <div>Item not found</div>;

  return (
    <p>Lorem</p>
    // <ItemPage
    //   category={itemData.category}
    //   ratting={itemData.ratting}
    //   stoke={itemData.stoke}
    //   image={itemData.image}
    //   title={itemData.title}
    //   price={itemData.price}
    //   description={itemData.description}
    //   isBestseller={itemData.isBestseller}
    // />
  );
}

const mapStateToProps = (state: any) => {
  return {
    itemData: state.itemData,
  };
};

export default connect(null, mapStateToProps)(Item);
