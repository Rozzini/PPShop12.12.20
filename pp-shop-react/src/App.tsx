import React, { useEffect, useState } from 'react';
import axios, { CancelTokenSource } from "axios";

import {IProduct} from "./models"
import {ProductsList} from "./components/ProductsList";
import {fetchAllProducts} from './services/api';

const defaultProps:IProduct[] = [];

function App() {
const [products, setProducts] = React.useState<IProduct[]>(defaultProps) 

React.useEffect(() => { fetchAllProducts(setProducts);}, [])

return (
<div>
  <ProductsList products={products}/>
</div>
);
}
export default App;