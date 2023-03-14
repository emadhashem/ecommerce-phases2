import axios from "axios";
import { API_URL, getHeaders } from "..";

const get_user_data_api_url = API_URL + '/get_customer_info'

export async function getUserData(token: string) {
    const { data } = await axios.get(get_user_data_api_url, getHeaders(token))
    return data
}