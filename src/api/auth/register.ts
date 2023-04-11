import axios from "axios";
import { API_URL } from "..";

const post_register_api_url = API_URL + `/post_register`
interface IPostRegisterBody {
    customer_name: string,
    customer_password: string,
    customer_confirm_password: string,
    customer_mobile: string,
    customer_email: string,
    customer_url: any,
    city_id: string,
    customer_address: string,
}
export async function postRegister(formData : any) {
    try {
        const { data } = await axios.post(post_register_api_url, formData)
        return data
    } catch (error: any) {
        
        throw new Error(error.response.data.message)

    }
}