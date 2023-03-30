import axios from "axios";
import { API_URL, getHeaders, throwMessageError } from "..";

const seach_api_url = API_URL + '/post_search'
export async function getSearchData(text: any, token: any) {

    try {
        const {data} = await axios.post(seach_api_url,
            {
                query_search: text
            },
            getHeaders(token)
        )
        return data
    } catch (error: any) {
        throwMessageError(error)
    }
}
