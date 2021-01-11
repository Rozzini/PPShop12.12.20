import {ICategory, IProduct} from "./models"
import React, { useCallback, useEffect } from 'react';
import {fetchAllCategories, fetchAllProducts, fetchProductsByCategory} from './services/api';

import {ProductsList} from "./components/ProductsList"

const defaultProductsProps:IProduct[] = [];
const defaultCategoryProps:ICategory[] = [];

type Props = {
  categoriesProps: ICategory[];
  };

function App() {
const [products, setProducts] = React.useState<IProduct[]>(defaultProductsProps);
const [categories, setCategories] = React.useState<ICategory[]>(defaultCategoryProps);

useEffect(() => { 
  fetchAllCategories(setCategories);}, [])

const fetchAllProdutsRequest = useCallback(() => {
  fetchAllProducts(setProducts);
}, []);

const fetchProdutsByCategoryRequest = useCallback((category: string) => (event: any)  => {
  fetchProductsByCategory(category, setProducts);
}, []);

const CategoriesButtons: React.FC<Props> = ({categoriesProps}) => {
  return (
    <>
    {categoriesProps.map((category) => (
    <button className='start' onClick={fetchProdutsByCategoryRequest(category.categoryName)}>
        {category.categoryName}
    </button>
    ))}
    </>
  );
}


return (
  <>
      <button className='start' onClick={fetchAllProdutsRequest}>
        All products
      </button>
      <div>
        <CategoriesButtons categoriesProps={categories}/>
      </div>
      <div>
        <ProductsList products={products}/>
      </div>
  </>
);
}
export default App;