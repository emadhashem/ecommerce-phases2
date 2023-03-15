export const API_URL = 'https://app.hamidkano.com/api'
export const IMG_API_URL = 'https://app.hamidkano.com/storage'

export function getImg(url : string) {
    return IMG_API_URL + `/${url}`
}

export function getHeaders(token : string) {
    return {
        headers : {
            remembertoken : token,
            'Content-Type': 'application/json'
        }
    }
}