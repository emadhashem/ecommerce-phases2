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
export async function postOrder(token: string) {
    const res = await fetch("https://app.hamidkano.com/api/post_product_to_order", {
        method: 'POST',
        body: JSON.stringify({
            product_coin: "sy",
            product_count: "5",
            product_id: 1,
            product_price: "5"
        }),
        headers: {
            "Content-Type": "application/j son",
            "renembertoken": token
        }
    })
    const ress = res.json()

}
export async function postProductToOrder(product_id: string,
    product_count: string,
    product_price: string,
    product_coin: string,
    token: string) {
    try {
        const { data } = await axios.post(post_product_to_order_api_url, {
            data: {
                product_coin: "sy",
                product_count: "5",
                product_id: "1",
                product_price: "5"
            }
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
        ...getHeaders(token),
        data: {
            order_details_id
        }
    })
    return data
}
const post_change_product_count_in_order_api_url = API_URL + '/post_change_product_count_in_order'
export async function postchangeProductCountInOrder(
    order_details_id: string,
    token: string,
    product_count: string
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
