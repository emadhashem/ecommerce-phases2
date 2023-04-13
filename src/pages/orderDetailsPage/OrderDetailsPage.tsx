import React, { useContext, useEffect, useRef, useState } from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import OrderDetailsNavBar from "./OrderDetailsNavBar";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { BsFillPrinterFill } from "react-icons/bs";
import "./orderDetailsPage.scss";
import OrderDetailsTable from "./OrderDetailsTable";
import { useParams } from "react-router-dom";
import { UserContext } from "../../contexts/category/user.context";
import { getOrderData } from "../../api/order/order";
import moment from "moment";
import { orderState } from "../../shared/orderState";
import SentimentVeryDissatisfiedIcon from "@mui/icons-material/SentimentVeryDissatisfied";
import { Modal } from "@mui/material";
import { Button, Stack } from "react-bootstrap";
import html2canvas from "html2canvas";
import { getImg } from "../../api";
import { useReactToPrint } from "react-to-print";
const OrderDetailsPage = () => {
  const { order_id } = useParams();
  const { userToken } = useContext(UserContext);
  const [order, setorder] = useState<any>(null);
  const printRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    let cur = true;
    if (cur) {
      if (userToken) fetchOrderData();
    }
    return () => {
      cur = false;
    };
  }, [order_id, userToken]);
  async function fetchOrderData() {
    try {
      const data = await getOrderData(order_id, userToken);
      setorder(data.order);
    } catch (error: any) {
      alert(error.message);
    }
  }

  const handleThePrint = useReactToPrint({
    content: () => printRef.current,
  });

  function productCoinInTable(product: any) {
    let sy = "sy";
    let ret = {
      coin: "سوري",
      price: 0,
    };
    if (product.product_coin === sy) ret.price = product.product_price_sy;
    else {
      ret.coin = "دولار";
      ret.price = product.product_price_dollar;
    }
    return ret;
  }
  return (
    order && (
      <React.Fragment>
        {/* <Modal open={openPrintModal} onClose={handleClosePrintModal}>
          <div>
            <div style={{ direction: "rtl" }}>
              <table>
                <thead>
                  <th>اسم المنتج</th>
                  <th>الصنف </th>
                  <th>العدد </th>
                  <th>السعر </th>
                  <th>العملة </th>
                  <th>الصورة </th>
                </thead>
                <tbody>
                  {order.product.map((product: any) => (
                    <tr>
                      <td>{product.product_name}</td>
                      <td>{product.sub_category_name}</td>
                      <td>{product.product_count}</td>
                      <td>{productCoinInTable(product).price}</td>
                      <td>{productCoinInTable(product).coin}</td>
                      <td>
                        <img
                          style={{
                            width: 15,
                            height: 15,
                          }}
                          src={getImg(product.product_photo_url)}
                          alt=""
                        />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <Stack>
              <Button
                onClick={() => {
                  handleThePrint();
                  handleClosePrintModal();
                }}
              >
                Print
              </Button>
              <Button
                onClick={() => {
                  handleClosePrintModal();
                }}
              >
                Cancel
              </Button>
            </Stack>
          </div>
        </Modal> */}
        <OrderDetailsNavBar />
        <div className="OrderDetailsPage-container" ref = {printRef} >
          <div className="OrderDetails-header">
            <div className="first-row">
              <p>
                رقم الطلبية: <span>{order_id}</span>
              </p>
              <div className="order">
                <div className="icon-wrapper">
                  <BsFillPrinterFill
                    onClick={handleThePrint}
                    className="icon printer-icon"
                  />
                </div>
                {orderState(order.order_state)}
              </div>
            </div>
            <p>
              تاريخ الطلبية:
              <span>{`${moment(order.created_at).format(
                "YYYY-MM-DD h:mm:ss"
              )}`}</span>
            </p>
            <div className="order-price">
              <p>
                الاجمالي سوري: <span>{order.sum_price_sy}</span>
              </p>
              <p>
                الاجمالي دولار: <span>{order.sum_price_dollar}</span>
              </p>
            </div>
            <p>
              أجر التوصيل: <span>{order.delivery_fee}</span>
            </p>
            <div className="notes">
              <span>الملاحظات :</span>
              <p>{order.note ? order.note : ""} </p>
            </div>
            {order.product && order.product.length > 0 ? (
              <div className="orders-table">
                <OrderDetailsTable
                  productCoinInTable={productCoinInTable}
                  products={order.product}
                />
              </div>
            ) : (
              <div className="error-message">
                <SentimentVeryDissatisfiedIcon fontSize="large" />
                <p> لا توجد اي طلبات سابقة </p>
              </div>
            )}
          </div>

          {/* ---- footer ---- */}
          <div className="OrderDetails-footer">
            <div className="footer-title">
              <span>:لديك استفسار؟ تواصل معنا</span>
            </div>
            <div className="footer-icons">
              <a href="mailto:test@gmail.com" target="_blank" rel="noreferrer">
                <MdEmail />
              </a>
              <a href="tel:555-555-5555" target="_blank" rel="noreferrer">
                <FiPhoneCall />
              </a>
              <a
                href="https://wa.me/+963932523445"
                target="_blank"
                rel="noreferrer"
              >
                <IoLogoWhatsapp />
              </a>
            </div>
            <div className="copyRights">
              &copy;جميع الحقوق محفوظة لتطبيق سوق الجزيرة 2023
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  );
};

export default OrderDetailsPage;
