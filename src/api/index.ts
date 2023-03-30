export const API_URL = 'https://app.hamidkano.com/api'
export const IMG_API_URL = 'https://app.hamidkano.com/storage'

export function getImg(url: string) {
    return IMG_API_URL + `/${url}`
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