import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemPage from '../components/common/ItemPage';
import { ItemType } from '../entities/Items';
import itemsData from '../seeds/items_data';

function Item(): JSX.Element {
  const { id } = useParams();
  const [itemData, setItemData] = useState<ItemType | null>(null);
  console.log('itemData', itemData);

  useEffect(() => {
    const itemData = id && itemsData.find((item) => item.id === +id);
    if (itemData) {
      setItemData(itemData);
    }
  }, [id]);

  if (!itemData) return <div>Item not found</div>;

  return (
    <ItemPage
      category={itemData.category}
      ratting={itemData.ratting}
      stoke={itemData.stoke}
      image={itemData.image}
      title={itemData.title}
      price={itemData.price}
      description={itemData.description}
      isBestseller={itemData.isBestseller}
    />
  );
}

export default Item;
