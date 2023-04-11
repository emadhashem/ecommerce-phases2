import React from "react";
import { IoLogoWhatsapp } from "react-icons/io";
import OrderDetailsNavBar from "./OrderDetailsNavBar";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { BsFillPrinterFill } from "react-icons/bs";
import "./orderDetailsPage.scss";
import OrderDetailsTable from "./OrderDetailsTable";

const OrderDetailsPage = () => {
  return (
    <React.Fragment>
      <OrderDetailsNavBar />
      <div className="OrderDetailsPage-container">
        <div className="OrderDetails-header">
          <div className="first-row">
            <p>
              رقم الطلبية: <span>10011</span>
            </p>
            <div className="order">
              <div className="icon-wrapper">
                <BsFillPrinterFill className="icon printer-icon" />
              </div>
              <div className="order-state">تم التسليم</div>
            </div>
          </div>
          <p>
            تاريخ الطلبية: <span>2023\01\01 18:30:05</span>
          </p>
          <div className="order-price">
            <p>
              الاجمالي سوري: <span>1000,000,000</span>
            </p>
            <p>
              الاجمالي دولار: <span>1000</span>
            </p>
          </div>
          <p>
            أجر التوصيل: <span>20000</span>
          </p>
          <div className="notes">
            <span>الملاحظات :</span>
            <p>
              نظام تشغيل آي فون أو آي فون أو إس) هو نظام تشغيل ظهر في بداية 2007
              كنظام تشغيل صنعته أبل لهاتفها آي فون
            </p>
          </div>
          <div className="orders-table">
            <OrderDetailsTable />
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
  );
};

export default OrderDetailsPage;
