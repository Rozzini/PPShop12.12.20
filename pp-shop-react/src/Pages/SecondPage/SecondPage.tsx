import {ICategory, IOption, IProduct} from "../../models"
import React, {useEffect} from 'react';
import { StyledButton, Wrapper } from '../../App.styles';
import {fetchAllCategories, fetchAllProducts, fetchProductsByCategory} from '../../services/api';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import Badge from '@material-ui/core/Badge';
import Cart from '../../components/Cart/Cart';
import Drawer from '@material-ui/core/Drawer';
import Grid from '@material-ui/core/Grid';
import Item from '../../components/Item/Item';
import LinearProgress from '@material-ui/core/LinearProgress';
import { Select } from "react-select-tile";
import { useState } from 'react';

const defaultProductsProps:IProduct[] = [];
const defaultCategoryProps:ICategory[] = [];
const defaultOptionsProps:IOption[] = [];


export const SecondPage: React.FC = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as IProduct[]);
  const [loading, setLoading] = useState(true);
  const [data, setData] = React.useState<IProduct[]>(defaultProductsProps);
  const [categories, setCategories] = React.useState<ICategory[]>(defaultCategoryProps);
  const [choosenOption, setChoosenOption] = React.useState("");
  const [dropListOptions, setDropListOptions] = React.useState<IOption[]>(defaultOptionsProps);
  
useEffect(() => { 
  fetchAllCategories(setCategories);    
  }, [])

useEffect(() => { 
  fetchAllProducts(setData);
  setLoading(false)}, [])


useEffect(() => { 
  const options: Array<IOption> = [];
  for(var i = 0; i < categories.length; i++ )
  {
    options.push({value: categories[i].id, label: categories[i].categoryName });
  }    
  setDropListOptions(options);
  }, [categories])

  
const handleItemClick = choosenOption => {
  setChoosenOption(choosenOption);
  fetchProductsByCategory(choosenOption, setData);
};


const getTotalItems = (items: IProduct[]) =>
  items.reduce((totalItems: number, item) => totalItems + item.amount, 0);

const handleAddToCart = (clickedItem: IProduct) => {
  setCartItems(prev => {
    // 1. Is the item already added in the cart?
    const isItemInCart = prev.find(item => item.id === clickedItem.id);

    if (isItemInCart) {
      return prev.map(item =>
        item.id === clickedItem.id
          ? { ...item, amount: item.amount + 1 }
          : item
      );
     }
    //First time the item is added
     return [...prev, { ...clickedItem, amount: 1 }];
   });
 };

  const handleRemoveFromCart = (id: string) => {
    setCartItems(prev =>
      prev.reduce((totalItems, item) => {
        if (item.id === id) {
          if (item.amount === 1) return totalItems;
          return [...totalItems, { ...item, amount: item.amount - 1 }];
        } else {
          return [...totalItems, item];
        }
      }, [] as IProduct[])
    );
  };
  
  if (loading) return <LinearProgress />;

  return (
    <Wrapper>
      <div>
        <Select
          placeholder="Please select ..."
          value={choosenOption}
          options={dropListOptions}
          onItemClick={handleItemClick}
        />
      </div>
      <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
        <Cart
          cartItems={cartItems}
          addToCart={handleAddToCart}
          removeFromCart={handleRemoveFromCart}
        />
      </Drawer>
      <StyledButton onClick={() => setCartOpen(true)}>
        <Badge badgeContent={getTotalItems(cartItems)} color='error'>
          <AddShoppingCartIcon />
        </Badge>
      </StyledButton>
      <Grid container spacing={3}>
        {data?.map(item => (
          <Grid item key={item.id} xs={12} sm={4}>
            <Item item={item} handleAddToCart={handleAddToCart} />
          </Grid>
        ))}
      </Grid>
    </Wrapper>
  );
};
