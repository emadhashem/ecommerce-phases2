import axios from "axios";
import { API_URL } from "..";

const get_ads_api_url = API_URL + `/ads`
export async function getAds() {
    const {data} = await axios.get(get_ads_api_url)
    return data
}

