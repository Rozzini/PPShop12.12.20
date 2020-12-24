import React from 'react';

import {IProduct} from "../models"

type Props = { products: IProduct[]; };

export const ProductsList: React.FC<Props> = ({products}) => {

  return (
    <div className="App">
      <ul className="posts">
        {products.map((products) => (
          <li key={products.id}>
            <h3>{products.productName}</h3>
            <p>{products.productDescription}</p>
            <h2>{products.productPrice}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductsList;