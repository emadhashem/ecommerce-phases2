import axios from "axios";
import { API_URL, getHeaders, throwMessageError } from "..";

const get_user_data_api_url = API_URL + '/get_customer_info'

export async function getUserData(token: string) {
    try {
        const { data } = await axios.get(get_user_data_api_url, getHeaders(token))
    return data
    } catch (error : any) {
        throwMessageError(error)
    }
}
const post_update_register_api_url = API_URL + '/post_update_register' 
export async function postUpdateUserData(formdata : any , token : any) {
    try {
        const {data} = await axios.post(post_update_register_api_url , formdata , getHeaders(token))
    } catch (error  :any) {
        throwMessageError(error)
    }
}
