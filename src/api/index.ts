import { toast } from "react-toastify"

export const API_URL = 'https://dashboard.souqaljazeera.shop/api'
export const IMG_API_URL = 'https://dashboard.souqaljazeera.shop/storage'
export const IMG_API_URL_NOTIFICATION = 'https://dashboard.souqaljazeera.shop/assets/images/notification'

export function getImg(url: string) {
    return IMG_API_URL + `/${url}`
}

export function getImg_Notification(url: string) {
    return IMG_API_URL_NOTIFICATION + `/${url}`
}

export function getHeaders(token: string) {
    let ret = null
    if (token || token != '') ret = token
    return {
        headers: {
            remembertoken: ret,
        }
    }
}

export function throwMessageError(err: any) {
    throw new Error(err.response.data.message)

}

