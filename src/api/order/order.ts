import axios from "axios";
import { API_URL, getHeaders, throwMessageError } from "..";

const post_send_order_api_url = API_URL + "/post_send_order";
const post_previous_order_api_url = API_URL + "/get_order";

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
      post_previous_order_api_url,
      getHeaders(token)
    );
    return data;
  } catch (error: any) {
    throwMessageError(error);
  }
}
