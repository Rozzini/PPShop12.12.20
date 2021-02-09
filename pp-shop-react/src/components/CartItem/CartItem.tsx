import {ICategory, IProduct} from "../../models";

import Button from '@material-ui/core/Button';
import { Wrapper } from './CartItem.styles';

type Props = {
  item: IProduct;
  addToCart: (clickedItem: IProduct) => void;
  removeFromCart: (id: string) => void;
};

const CartItem: React.FC<Props> = ({ item, addToCart, removeFromCart }) => (
  <Wrapper>
    <div>
      <h3>{item.productName}</h3>
      <div className='information'>
        <p>Price: ${item.productPrice}</p>
        <p>Total: ${(item.amount * item.productPrice).toFixed(2)}</p>
      </div>
      <div className='buttons'>
        <Button
          size='small'
          disableElevation
          variant='contained'
          onClick={() => removeFromCart(item.id)}
        >
          -
        </Button>
        <p>{item.amount}</p>
        <Button
          size='small'
          disableElevation
          variant='contained'
          onClick={() => addToCart(item)}
        >
          +
        </Button>
      </div>
    </div>
    <img src={item.productImage} alt={item.productName} />
  </Wrapper>
);

export default CartItem;