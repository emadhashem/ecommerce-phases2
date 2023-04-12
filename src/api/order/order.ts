import axios from "axios";
import { API_URL, getHeaders, throwMessageError } from "..";

const post_send_order_api_url = API_URL + "/post_send_order";
const get_previous_order_api_url = API_URL + "/get_order";

export async function postSendCheckout(
  token: string,
  order_id: string | number
) {
  try {
    const { data } = await axios.post(
      post_send_order_api_url,
      {
        order_id,
      },
      getHeaders(token)
    );
    return data;
  } catch (error: any) {
    throwMessageError(error);
  }
}

export async function getPreviousOrders(token: string) {
  try {
    const { data } = await axios.get(
      get_previous_order_api_url,
      getHeaders(token)
    );
    return data;
  } catch (error: any) {
    throwMessageError(error);
  }
}
const get_order_data_api_api = API_URL + '/get_order_details'
export async function getOrderData(id : any, token : any) {
  try {
    const {data} = await axios.get(get_order_data_api_api + `/${id}`, getHeaders(token))
    return data
  } catch (error) {
    throwMessageError(error)
  }
}
