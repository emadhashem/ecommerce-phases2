import axios from "axios";
import { API_URL } from "..";

const get_product_by_id_api_url = API_URL + `/get_product_by_product_id`
export async function getProductById(id: string | number) {
    const { data } = await axios.get(get_product_by_id_api_url + `/${id}`)
    return data
}

const get_product_photos_by_id = API_URL + '/get_product_photo_by_product_id'
export async function getProductPhotosById(id: string | number) {
    const { data } = await axios.get(get_product_photos_by_id + `/${id}`)
    return data
}