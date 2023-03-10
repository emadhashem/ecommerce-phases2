import { useState } from "react";
import {
  Button,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  FormControl
} from "@mui/material";
import "./loginPage.scss";
import logo from "../../../assets/svgs/logo.svg";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { Link } from "react-router-dom";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };

  return (
    <div className="loginPage">
      <div className="logo-container">
        <img src={logo} />
        <p>تسجيل الدخول</p>
      </div>
      <div className="input-container">
        <div className="input">
          <FormControl sx={{ mt: 2, width: "333px" }} variant="outlined">
            <InputLabel
              className="label"
              htmlFor="outlined-adornment-password"
              sx={{ fontSize: "16px", color: "#2C7BE580", fontFamily: "Cairo" }}
            >
              رقم الموبايل او البريد الالكتروني
            </InputLabel>
            <OutlinedInput
              sx={{ fontFamily: "Cairo" }}
              id="outlined-basic"
              label="رقم الموبايل او البريد الالكتروني"
            />
          </FormControl>
        </div>
        <div className="input">
          <FormControl sx={{ mt: 2, width: "333px" }} variant="outlined">
            <InputLabel
              htmlFor="outlined-adornment-password"
              sx={{ fontSize: "16px", color: "#2C7BE580", fontFamily: "Cairo" }}
            >
              كلمة المرور
            </InputLabel>
            <OutlinedInput
              sx={{ fontFamily: "Cairo" }}
              id="outlined-adornment-password"
              type={showPassword ? "text" : "password"}
              endAdornment={
                <InputAdornment position="end">
                  <IconButton
                  className="Visibility-icon"
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              }
              label="كلمة المرور"
            />
          </FormControl>
        </div>
      </div>
      <div>
        <Button className="btn" variant="contained">
          <span>تسجيل الدخول</span>
        </Button>
      </div>
      <div className="footer-container">
        <span>ليس لديك حساب؟</span>
        <Link to="/register" className="link">
          <span>اشترك الان</span>
        </Link>
        <div className="footer-title">
          <span>أمان , سرعة , تنوع </span>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
