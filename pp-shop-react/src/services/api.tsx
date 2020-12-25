import {IProduct} from "../models"
import axios from "axios";

export const fetchAllProducts = async (onSuccess: (products: IProduct[]) => void) => {
    return axios.get<IProduct[]> ("https://localhost:5001/api/ShowAllProducts")
    .then(response => {return onSuccess(response.data)});}