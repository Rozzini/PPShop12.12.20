import { BrowserRouter, Route, Switch } from 'react-router-dom'

import { FirstPage } from './Pages/FirstPage/FirstPage'
import { Navbar } from './components/Navbar'
import React from 'react'
import { SecondPage } from './Pages/SecondPage/SecondPage'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Navbar />
      <div className="container">
        <Switch>
          <Route path="/" component={FirstPage} exact />
          <Route path="/All" component={SecondPage} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default App


// import {ICategory, IProduct} from "./models"
// import React, {useEffect} from 'react';
// import { StyledButton, Wrapper } from './App.styles';
// import {fetchAllCategories, fetchAllProducts, fetchProductsByCategory} from './services/api';
// import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
// import Badge from '@material-ui/core/Badge';
// import Cart from './components/Cart/Cart';
// import Drawer from '@material-ui/core/Drawer';
// import Grid from '@material-ui/core/Grid';
// import Item from './components/Item/Item';
// import LinearProgress from '@material-ui/core/LinearProgress';
// import {ProductsList} from "./components/ProductsList"
// import { useState } from 'react';

// const defaultProductsProps:IProduct[] = [];
// const defaultCategoryProps:ICategory[] = [];

// type Props = {
//   categoriesProps: ICategory[];
//   };


// // const getProducts = async (): Promise<IProduct[]> =>
// //   await (await fetch('https://localhost:5001/api/GetAllProducts')).json();


// const App = () => {
//   const [cartOpen, setCartOpen] = useState(false);
//   const [cartItems, setCartItems] = useState([] as IProduct[]);
//   const [loading, setLoading] = useState(true);
//   const [data, setData] = React.useState<IProduct[]>(defaultProductsProps);

// useEffect(() => { 
//   fetchAllProducts(setData);
//   //to do ERROR
//   setLoading(false)}, [])

//   const getTotalItems = (items: IProduct[]) =>
//     items.reduce((totalItems: number, item) => totalItems + item.amount, 0);

//   const handleAddToCart = (clickedItem: IProduct) => {
//     setCartItems(prev => {
//       // 1. Is the item already added in the cart?
//       const isItemInCart = prev.find(item => item.id === clickedItem.id);

//       if (isItemInCart) {
//         return prev.map(item =>
//           item.id === clickedItem.id
//             ? { ...item, amount: item.amount + 1 }
//             : item
//         );
//       }
//       // First time the item is added
//       return [...prev, { ...clickedItem, amount: 1 }];
//     });
//   };

//   const handleRemoveFromCart = (id: string) => {
//     setCartItems(prev =>
//       prev.reduce((totalItems, item) => {
//         if (item.id === id) {
//           if (item.amount === 1) return totalItems;
//           return [...totalItems, { ...item, amount: item.amount - 1 }];
//         } else {
//           return [...totalItems, item];
//         }
//       }, [] as IProduct[])
//     );
//   };
  
//   if (loading) return <LinearProgress />;

//   return (
//     <div>
//     <Wrapper>
//       <Drawer anchor='left' open={cartOpen} onClose={() => setCartOpen(false)}>
//         <Cart
//           cartItems={cartItems}
//           addToCart={handleAddToCart}
//           removeFromCart={handleRemoveFromCart}
//         />
//       </Drawer>
//       <StyledButton onClick={() => setCartOpen(true)}>
//         <Badge badgeContent={getTotalItems(cartItems)} color='error'>
//           <AddShoppingCartIcon />
//         </Badge>
//       </StyledButton>
//       <Grid container spacing={3}>
//         {data?.map(item => (
//           <Grid item key={item.id} xs={12} sm={4}>
//             <Item item={item} handleAddToCart={handleAddToCart} />
//           </Grid>
//         ))}
//       </Grid>
//     </Wrapper>
//     </div>
//   );
// };

// export default App;
















// // const defaultProductsProps:IProduct[] = [];
// // const defaultCategoryProps:ICategory[] = [];

// // type Props = {
// //   categoriesProps: ICategory[];
// //   };

// // function App() {
// // const [products, setProducts] = React.useState<IProduct[]>(defaultProductsProps);
// // const [categories, setCategories] = React.useState<ICategory[]>(defaultCategoryProps);

// // useEffect(() => { 
// //   fetchAllCategories(setCategories);}, [])

// // const fetchAllProdutsRequest = () => {
// //   fetchAllProducts(setProducts);
// // };

// // const fetchProdutsByCategoryRequest = (category: string)  => {
// //   fetchProductsByCategory(category)
// //   .then(products => setProducts(products.data));
// // };

// // const CategoriesButtons: React.FC<Props> = ({categoriesProps}) => {
// //   return (
// //     <>
// //     {categoriesProps.map((category) => (
// //     <button className='start' 
// //       onClick={() => fetchProdutsByCategoryRequest(category.id)}>
// //         {category.categoryName}
// //     </button>
// //     ))}
// //     </>
// //   );
// // }


// // return (
// //   <>
// //       <button className='start' onClick={fetchAllProdutsRequest}>
// //         All products
// //       </button>
// //       <div>
// //         <CategoriesButtons categoriesProps={categories}/>
// //       </div>
// //       <div>
// //         <ProductsList products={products}/>
// //       </div>
// //   </>
// // );
// // }
// // export default App;