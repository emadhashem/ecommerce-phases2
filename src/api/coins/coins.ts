import axios from "axios";
import { API_URL, throwMessageError } from "..";

const get_exchange_url_api = API_URL + '/get_exchange_price'
export async function getExchangePrice() {
    try {
        const {data} = await axios.get(get_exchange_url_api)
        return data
    } catch (error) {
        throwMessageError(error)
    }
}