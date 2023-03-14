import axios from "axios";
import { API_URL } from "..";

const post_login_api_url = API_URL + `/post_login `
export async function postLogin(email : string, password : string) {
    const {data} = await axios.post(post_login_api_url, {
        customer_mobile_email : email,
        customer_password : password
    })
    return data
}
