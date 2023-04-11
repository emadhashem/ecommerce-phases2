import axios from "axios";
import { API_URL, getHeaders, throwMessageError } from "..";

const get_sub_categories_api_url = `${API_URL}/sub_category`
export async function getSubCategories() {
    const { data } = await axios.get(get_sub_categories_api_url)
    return data
}

const get_products_by_sub_category_api_url = API_URL + `/get_product_by_sub_category_id`
export async function getPorductsBySubCategory(id: number | string, token: string) {
    const { data } = await axios.get(get_products_by_sub_category_api_url + `/${id}`, getHeaders(token))
    return data
}
const get_category_data_api_url = API_URL + '/get_sub_category_by_id'
export async function getCategoryDataById(cat_id: any) {
    try {
        const {data} = await axios.get(`${get_category_data_api_url}/${cat_id}`)
        return data
    } catch (error : any) {
       throwMessageError(error) 
    }
}