import { Button, TextField } from "@mui/material";
import React from "react";
import logo from "../../../assets/svgs/logo.svg";
function LoginPage() {
  return (
    <div>
      <div>
        <img src={logo} />
        <p>تسجيل الدخول</p>
      </div>
      <div>
        <TextField
          id="standard-basic"
          label="Standard"
          variant="standard"
          placeholder="رقم الموبايل او البريد الالكتروني"
        />
        <TextField
          id="standard-basic"
          label="Standard"
          variant="standard"
          placeholder="كلمة المرور"
        />
      </div>
      <div>
        <Button variant="contained">تسجيل الدخول</Button>
      </div>
      <div>
        <div>
          <p>ليس لديك حساب</p>
          <a>اشترك الان</a>
        </div>
        <p>امان.سرعة.تنوع</p>
      </div>
    </div>
  );
}

export default LoginPage;
