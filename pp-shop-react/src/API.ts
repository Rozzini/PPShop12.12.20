

export type Product = {
    name: string;
    description: string;
    product_image: string;
    product_price: any;
};

export async function fetchProducts(
    request: RequestInfo
  ): Promise<any> {
    const response = await fetch(request);
    const body = await response.json();
    return body;
  }

  const products_data =  fetchProducts(
    "https://jsonplaceholder.typicode.com/todos"
  );