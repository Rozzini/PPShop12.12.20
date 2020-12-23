import axios, { CancelTokenSource } from "axios";

import {IProduct} from "../models"

export const fetchAllProducts = async (func: any): Promise<IProduct[]> => {
  return axios.get<IProduct[]>("https://localhost:5001/api/ShowAllProducts")
  .then(response => {return func(response.data)});
}