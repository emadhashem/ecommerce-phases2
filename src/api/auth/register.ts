import axios from "axios";
import { API_URL } from "..";

const post_register_api_url = API_URL + `/post_register`
interface IPostRegisterBody {
    customer_name: string,
    customer_password: string,
    customer_confirm_password: string,
    customer_mobile: string,
    customer_email: string,
    customer_url: string,
    city_id: string,
    customer_address: string,
}
export async function postRegister({
    customer_name,
    customer_password,
    customer_confirm_password,
    customer_mobile,
    customer_email,
    customer_url,
    city_id,
    customer_address
}: IPostRegisterBody) {
    const { data } = await axios.post(post_register_api_url, {
        customer_name,
        customer_password,
        customer_confirm_password,
        customer_mobile,
        customer_email,
        customer_url,
        city_id,
        customer_address
    })
    return data
}