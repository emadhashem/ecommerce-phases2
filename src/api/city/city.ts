import axios from "axios";
import { API_URL } from "..";

const get_cities_api_url = API_URL + `/city`

export async function getCities() {
    const {data} = await axios.get(get_cities_api_url)
    return data
}