import React, { useState, useRef } from "react";
import { Avatar, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../../assets/svgs/Vectorregister.svg";
import "./registerPage.scss";

function RegisterPage() {
  const [imgFile, setimgFile] = useState<any>();
  const chooseFileRef = useRef<HTMLInputElement>(null);
  async function onFileChoosen(eve: React.ChangeEvent<HTMLInputElement>) {
    eve.stopPropagation();
    eve.preventDefault();
    const objectURL = await readBlob(eve.target.files![0]);
    setimgFile(objectURL);
  }
  function onClickBtn() {
    if (chooseFileRef.current) chooseFileRef.current.click();
  }
  async function readBlob(blob: File) {
    const objectURL = URL.createObjectURL(blob);
    return objectURL;
  }
  return (
    <div className="registerPage">
      <div className="logo-container">
        <span>تسجيل الاشتراك</span>
        <button className="edit-btn" onClick={onClickBtn}>
          <span className="edit-btn-title">صورة شحصية</span>
            <img className="selected-img" src={imgFile} alt=""  />
          <div className="img-container">
            {/* <img src={logo} /> */}
            <input
              ref={chooseFileRef}
              type={"file"}
              style={{ display: "none" }}
              onChange={onFileChoosen}
            />
          </div>
        </button>
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
