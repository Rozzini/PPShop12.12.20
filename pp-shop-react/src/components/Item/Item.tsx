import {ICategory, IProduct} from "../../models";

import Button from '@material-ui/core/Button';
import { Wrapper } from './Item.styles';

type Props = {
    item: IProduct;
    handleAddToCart: (clickedItem: IProduct) => void;
  };
  
  const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
    <Wrapper>
      <img src={item.productImage} alt={item.productName} />
      <div>
        <h3>{item.productName}</h3>
        <p>{item.productDescription}</p>
        <h3>${item.productPrice}</h3>
      </div>
      <Button onClick={() => handleAddToCart(item)}>Add to cart</Button>
    </Wrapper>
  );
  
  export default Item;