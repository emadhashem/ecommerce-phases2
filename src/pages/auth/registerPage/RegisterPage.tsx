import { Avatar, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../../assets/svgs/Vectorregister.svg";
import "./registerPage.scss";

function RegisterPage() {
  return (
    <div className="registerPage">
      <div className="logo-container">
        <span>تسجيل الاشتراك</span>
        <div className="img-container">
          <img src={logo} />
          <span>صورة شحصية</span>
        </div>
      </div>
      <div className="input-container">
        <div className="input">
          <TextField
            sx={{ width: "351px", height: "40px" }}
            required
            placeholder="الاسم"
          />
        </div>
        <div className="input">
          <TextField
            sx={{ width: "351px", height: "40px" }}
            required
            type="number"
            placeholder="الهاتف"
          />
        </div>
        <div className="input">
          <TextField
            sx={{ width: "351px", height: "40px" }}
            required
            type="email"
            id="email"
            placeholder="البريد"
          />
        </div>
        <div className="input">
          <TextField
            sx={{ width: "351px", height: "40px" }}
            required
            type="password"
            placeholder="كلمة المرور"
          />
        </div>
        <div className="input">
          <TextField
            sx={{ width: "351px", height: "40px", color: "red" }}
            required
            type="password"
            placeholder="تاكيد كلمة المرور "
          />
        </div>
        <div className="input">
          <TextField
            sx={{ width: "351px", height: "40px" }}
            required
            type="address"
            id="address"
            placeholder="العنوان"
          />
        </div>
      </div>
      <div>
        <Button className="btn" variant="contained">
          <span>تسجيل</span>
        </Button>
      </div>
      <div className="footer-container">
        <span>هل لديك اشتراك بالفعل؟</span>
        <div className="footer-title">
          <span>يمكنك</span>
          <Link to="/login" className="link">
            <span> تسجيل الدخول</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
