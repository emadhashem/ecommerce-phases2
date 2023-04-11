import axios from "axios";
import { API_URL, getHeaders, throwMessageError } from "..";

const post_favorite_api_url = API_URL + '/post_favorite'
export async function addFavorite(
    product_id: string | number, token: string) {
    try {

        const { data } = await axios.post(post_favorite_api_url, {
            product_id
        },
            getHeaders(token)
        )
        return data
    } catch (error: any) {
        throwMessageError(error)

    }


}

const post_delete_favorite_api_url = API_URL + '/post_delete_favorite'
export async function deleteFavorite(
    product_id: string | number, token: string) {
    try {
        const { data } = await axios.post(post_delete_favorite_api_url, {
            product_id
        },
            getHeaders(token)
        )
        return data
    } catch (error: any) {
        throwMessageError(error)

    }
}
const get_favorite_api_url = API_URL + '/get_favorite'
export async function getFavorites(token: string) {
    try {
        const { data } = await axios.get(get_favorite_api_url, getHeaders(token))
        return data
    } catch (error: any) {
        throwMessageError(error)

    }
}
