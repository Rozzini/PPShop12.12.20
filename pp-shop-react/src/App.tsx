import {ICategory, IProduct} from "./models"
import React, {useEffect} from 'react';
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

const fetchAllProdutsRequest = () => {
  fetchAllProducts(setProducts);
};

const fetchProdutsByCategoryRequest = (category: string)  => {
  fetchProductsByCategory(category)
  .then(products => setProducts(products.data));
};

const CategoriesButtons: React.FC<Props> = ({categoriesProps}) => {
  return (
    <>
    {categoriesProps.map((category) => (
    <button className='start' 
      onClick={() => fetchProdutsByCategoryRequest(category.id)}>
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