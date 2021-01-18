export interface IProduct {
    id: string;
    productName: string;
    productDescription: string;
    productImage: string;
    productPrice: number;
    categoryId: string;
    ICategory: null;
  }

export interface ICategory {
    id: string;
    categoryName: string;
    categoryDescription: string;
    IProduct: null[];
}