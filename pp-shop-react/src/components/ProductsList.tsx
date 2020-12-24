import {IProduct} from "../models"
import React from 'react';

type Props = { products: IProduct[]; };

export const ProductsList: React.FC<Props> = ({products}) => {

  return (
    <div className="App">
      <ul className="posts">
        {products.map((product) => (
          <li key={product.id}>
            <h3>{product.productName}</h3>
            <p>{product.productDescription}</p>
            <h2>{product.productPrice}</h2>
          </li>
        ))}
      </ul>
    </div>
  );
}
