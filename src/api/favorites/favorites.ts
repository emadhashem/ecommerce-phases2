import axios from "axios";
import { API_URL, getHeaders } from "..";

const post_favorite_api_url = API_URL + '/post_favorite'
export async function addFavorite(customer_id: string | number,
    product_id: string | number, token: string) {
    const { data } = await axios.post(post_favorite_api_url, {
        customer_id,
        product_id
    },
        getHeaders(token)
    )
    return data
}

const post_delete_favorite_api_url = API_URL + '/post_delete_favorite'
export async function deleteFavorite(customer_id: string | number,
    product_id: string | number, token: string) {
    const { data } = await axios.post(post_delete_favorite_api_url, {
        customer_id,
        product_id
    },
        getHeaders(token)
    )
    return data
}
const get_favorite_api_url = API_URL + '/get_favorite'
export async function getFavorites(token: string) {
    const { data } = await axios.get(get_favorite_api_url, getHeaders(token))
    return data
}
