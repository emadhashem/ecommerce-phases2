import { Avatar, Button, TextField } from "@mui/material";
import React from "react";
import logo from "../../../assets/svgs/logo.svg";
function RegisterPage() {
  return (
    <div>
      <div>
        <h3>تسجيل الاشتراك</h3>
        <Avatar src={logo} sx={{ width: 56, height: 56}}/>
      </div>
      <div>
        <TextField placeholder="الاسم" />
        <TextField placeholder="الهاتف" />
        <TextField placeholder="البريد" />
        <TextField placeholder="كلمة المرور" />
        <TextField placeholder="تاكيد كلمة المرور " />
        <TextField placeholder="العنوان " />
      </div>
      <div>
        <Button>تسجيل</Button>
      </div>
      <div>هل لديك اشتراك ؟</div>
      <p>
        يمكنك <a>تسجيل الدخول </a>
      </p>
    </div>
  );
}

export default RegisterPage;
