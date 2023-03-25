import axios from "axios";
import { API_URL, getHeaders, throwMessageError } from "..";

const get_notiofications_api_url = API_URL + '/get_notification'
export async function getNotification(token: any) {
    try {
        const { data } = await axios.get(get_notiofications_api_url, getHeaders(token))
        return data
    } catch (error: any) {
        throwMessageError(error)
    }
}

const post_read_notification_api_url = API_URL + '/post_read_notification'
export async function postReadNotification(notification_id: any, token: any) {
    try {
        const { data } = await axios.post(post_read_notification_api_url, {
            notification_id
        }, getHeaders(token))
        return data
    } catch (error: any) {
        throwMessageError(error)
    }
}
const post_read_all_notification_api_url = API_URL + '/post_read_all_notification'
export async function postReadAllNotification(token: any) {
    try {
        const { data } = await axios.post(post_read_all_notification_api_url, {} ,getHeaders(token))
        return data
    } catch (error: any) {
        throwMessageError(error)
    }
}