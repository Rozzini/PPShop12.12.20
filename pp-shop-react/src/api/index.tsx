import axios from 'axios';
const url = 'https://localhost:5001/api/ShowAllProducts';

export const fetchAllProducts = async () => {
    try {
      const { data } = await axios.get(url);
      return data.map((product: any) => {
        return {
          name: product.ProductName,
          description: product.ProductDescription,
          image: product.ProductImage,
          price: product.ProductPrice,
          category: product.CategoryId,
        };
      });
    } catch (err) {
      return [];
    }
  };