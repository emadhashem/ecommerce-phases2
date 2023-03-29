import axios from "axios";
import { API_URL, getHeaders, throwMessageError } from "..";

const seach_api_url = API_URL + '/search'
export async function getSearchData(text: any, token: any) {
    // const newText = Array.from(text)
    //     .map((char: any) => `%${char.charCodeAt(0).toString(16)}`)
    //     .join('');
    try {
        const data = await axios.get(seach_api_url + `/${text}`,
            getHeaders(token)
        )
        return data
    } catch (error: any) {
        throwMessageError(error)
    }
}
