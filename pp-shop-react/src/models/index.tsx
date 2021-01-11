export interface IProduct {
    id: any;
    productName: string;
    productDescription: string;
    productImage: string;
    productPrice: any;
    categoryId: string;
    category: any;
  }

export interface ICategory {
    id: any;
    categoryName: string;
    categoryDescription: string;
    products: any;
}