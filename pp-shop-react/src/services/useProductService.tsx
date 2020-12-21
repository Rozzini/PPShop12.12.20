import { useEffect, useState } from 'react';

import { Product } from '../types/Product';
import { Service } from '../types/Service';

export interface Products {
    results: Product[];
  }
  
  const useProductService = () => {
    const [result, setResult] = useState<Service<Products>>({
      status: 'loading'
    });
  
    useEffect(() => {
      fetch('https://localhost:5001/api/ShowAllProducts')
      
        .then(response => response.json())
        .then(response => setResult({ status: 'loaded', payload: response }))
        .catch(error => setResult({ status: 'error', error }));
    }, []);
  
    return result;
  };
  
  export default useProductService;