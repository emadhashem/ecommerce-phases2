import React, { useContext, useEffect, useState } from "react";
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

const OrderDetailsPage = () => {
  const { order_id } = useParams();
  const { userToken } = useContext(UserContext);
  const [order, setorder] = useState<any>(null);
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
  return (
    order && (
      <React.Fragment>
        <OrderDetailsNavBar />
        <div className="OrderDetailsPage-container">
          <div className="OrderDetails-header">
            <div className="first-row">
              <p>
                رقم الطلبية: <span>{order_id}</span>
              </p>
              <div className="order">
                <div className="icon-wrapper">
                  <BsFillPrinterFill className="icon printer-icon" />
                </div>
                <div className="order-state">تم التسليم</div>
              </div>
            </div>
            <p>
              تاريخ الطلبية:{" "}
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
              <p>{order.note ? order.note : ''} </p>
            </div>
            <div className="orders-table">
              <OrderDetailsTable products = {order.product} />
            </div>
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
