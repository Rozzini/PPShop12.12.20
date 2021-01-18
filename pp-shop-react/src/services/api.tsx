import {ICategory, IProduct} from "../models"

import axios from "axios";

export const fetchAllProducts = async (onSuccess: (products: IProduct[]) => void) => {
    return axios.get<IProduct[]> ("https://localhost:5001/api/GetAllProducts")
    .then(response => {return onSuccess(response.data)});}

export const fetchAllCategories = async (onSuccess: (categories: ICategory[]) => void) => {
    return axios.get<ICategory[]> ("https://localhost:5001/api/GetAllCategories")
    .then(response => {return onSuccess(response.data)});}

export const fetchProductsByCategory = (categoryId: string) => {
    return axios.get<IProduct[]> (`https://localhost:5001/api/ShowProductsByCategory?categoryId=${categoryId}`)
}
