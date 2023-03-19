import axios from "axios";
import { API_URL, getHeaders, throwMessageError } from "..";

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
export async function postProductToOrder(product_id: string | number,
    product_count: string | number,
    product_price: string,
    product_coin: string,
    token: string) {
    try {
        const { data } = await axios.post(post_product_to_order_api_url, {
            product_coin,
            product_count,
            product_id,
            product_price
        }, getHeaders(token))
        return data
    } catch (error: any) {
        throwMessageError(error)
    }
}

const post_remove_product_from_order_api_url = API_URL + '/post_remove_product_from_order'
export async function postDeleteProductToOrder(
    order_details_id: string,
    token: string) {
    const { data } = await axios.post(post_remove_product_from_order_api_url, {
        order_details_id
    }, getHeaders(token),)
    return data
}
const post_change_product_count_in_order_api_url = API_URL + '/post_change_product_count_in_order'
export async function postchangeProductCountInOrder(
    order_details_id: string,
    product_count: string | number,
    token: string,
) {
    const { data } = await axios.post(post_change_product_count_in_order_api_url, {
        order_details_id,
        product_count
    }, getHeaders(token))
    return data
}
const get_order_in_basket_api_url = API_URL + '/get_order_in_basket'
export async function getPorductsInCart(token: string) {
    try {
        const { data } = await axios.get(get_order_in_basket_api_url, getHeaders(token))
        return data
    } catch (error: any) {
        throwMessageError(error)
    }
}

const post_remove_all_product_from_order_api_url = API_URL + '/post_remove_all_product_from_order'
export async function postRemoveAllFromCart(order_id : string | number , token : string) {
    try {
        const {data} = await axios.post(post_remove_all_product_from_order_api_url , {
            order_id
        } , getHeaders(token))
    } catch (error : any) {
        throwMessageError(error)
    }
}