import axios from "axios";
import { API_URL, getHeaders } from "..";

const get_logout_api_url = API_URL + '/get_logout'

export async function logOut(token: string) {
    const { data } = await axios.get(get_logout_api_url, getHeaders(token))
    return data
}