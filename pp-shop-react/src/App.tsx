import React, { useEffect, useState } from 'react';

import {IProduct} from "./models"
import {ProductsList} from "./components/ProductsList";
import {fetchAllProducts} from './services/api';

const defaultProps:IProduct[] = [];

function App() {
const [products, setProducts] = useState<IProduct[]>(defaultProps) 

useEffect(() => { 
  fetchAllProducts(setProducts);}, [])

return (
<div>
  <ProductsList products={products}/>
</div>
);
}
export default App;