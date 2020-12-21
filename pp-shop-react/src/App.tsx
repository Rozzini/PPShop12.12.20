import axios, { CancelTokenSource } from "axios";

import React from 'react';

interface IProduct {
  id: any;
  productName: string;
  productDescription: string;
  productImage: string;
  productPrice: any;
  categoryId: string;
  category: any;
}

const defaultProps:IProduct[] = [];


function App() {
  const [products, setProducts]: [IProduct[], (posts: IProduct[]) => void] = React.useState(defaultProps);
  const [loading, setLoading]: [boolean, (loading: boolean) => void] = React.useState<boolean>(true);
  const [error, setError]: [string, (error: string) => void] = React.useState("");


  React.useEffect(() => {
    axios
        .get<IProduct[]>("https://localhost:5001/api/ShowAllProducts", {
          headers: {
            "Content-Type": "application/json"
          },
        })
          .then(response => {
            setProducts(response.data);
            setLoading(false);
          })
          .catch(ex => {
            const error =
                
                ex.response.status === 404
                  ? "Resource not found"
                  : "An unexpected error has occurred";
               setError(error);
               setLoading(false);
          });
    }, []);

  
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
      {error && <p className="error">{error}</p>}
      </div>
  );
}

export default App;