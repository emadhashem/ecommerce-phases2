import axios from "axios";
import { API_URL } from "..";

const get_sub_categories_api_url = `${API_URL}/sub_category`
export async function getSubCategories() {
    const {data} = await axios.get(get_sub_categories_api_url)
    return data
}

const get_products_by_sub_category_api_url = API_URL + `/get_product_by_sub_category_id`
export async function getPorductsBySubCategory(id : number | string) {
    const {data} = await axios.get(get_products_by_sub_category_api_url + `/${id}`)
    return data
}