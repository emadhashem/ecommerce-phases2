import axios from "axios";
import { API_URL, getHeaders } from "..";

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

const post_product_to_order_api_url = API_URL + '/post_product_to_order'
export async function postProductToOrder(product_id: string,
    product_count: string,
    product_price: string,
    product_coin: string,
    token: string) {
    const { data } = await axios.post(post_product_to_order_api_url, {
        
        data: {
            product_id,
            product_price,
            product_count,
            product_coin
        }
    },getHeaders(token))
    return data
}

const post_remove_product_from_order_api_url = API_URL + '/post_remove_product_from_order '
export async function postDeleteProductToOrder(
    order_details_id: string,
    token: string) {
    const { data } = await axios.post(post_remove_product_from_order_api_url, {
        ...getHeaders(token),
        data: {
            order_details_id
        }
    })
    return data
}
const post_change_product_count_in_order_api_url = API_URL + '/post_change_product_count_in_order '
export async function postchangeProductCountInOrder(
    order_details_id: string,
    token: string,
    product_count : string
    ) {
    const { data } = await axios.post(post_change_product_count_in_order_api_url, {
        ...getHeaders(token),
        data: {
            order_details_id,
            product_count
        }
    })
    return data
}
