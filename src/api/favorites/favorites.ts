import axios from "axios";
import { API_URL } from "..";

const post_favorite_api_url = API_URL + '/post_favorite'
export async function addFavorite(customer_id: string | number, product_id: string | number) {
    const { data } = await axios.post(post_favorite_api_url, {
        customer_id,
        product_id
    })
}

const post_delete_favorite_api_url = API_URL + '/post_delete_favorite'
export async function deleteFavorite(customer_id: string | number, product_id: string | number) {
    const { data } = await axios.post(post_delete_favorite_api_url, {
        customer_id,
        product_id
    })
}