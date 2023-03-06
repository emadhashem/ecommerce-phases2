import React, { useState, useRef } from "react";
import { Avatar, Button, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../../assets/svgs/Vectorregister.svg";
import "./registerPage.scss";

function RegisterPage() {
  const [imgFile, setimgFile] = useState<any>();
  const [name, setname] = useState('')
  const [email, setemail] = useState('')
  const [phone, setphone] = useState('')
  const [password1, setpassword1] = useState('')
  const [password2, setpassword2] = useState('')
  const [address, setaddress] = useState('')
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
  async function handleRegister() {
    try {
      // const data = postRegister
    } catch (error) {
      alert('some thing is wrong')
    }
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
            value={name}
            onChange = {e => setname(e.target.value)}
          />
        </div>
        <div className="input">
          <TextField
            sx={{ width: "351px", height: "40px" }}
            required
            type="number"
            placeholder="الهاتف"
            value={phone}
            onChange = {e => setphone(e.target.value)}
          />
        </div>
        <div className="input">
          <TextField
            sx={{ width: "351px", height: "40px" }}
            required
            type="email"
            id="email"
            placeholder="البريد"
            value={email}
            onChange = {e => setemail(e.target.value)}
          />
        </div>
        <div className="input">
          <TextField
            sx={{ width: "351px", height: "40px" }}
            required
            type="password"
            placeholder="كلمة المرور"
            value={password1}
            onChange = {e => setpassword1(e.target.value)}
          />
        </div>
        <div className="input">
          <TextField
            sx={{ width: "351px", height: "40px", color: "red" }}
            required
            type="password"
            placeholder="تاكيد كلمة المرور "
            value={password2}
            onChange = {e => setpassword2(e.target.value)}
          />
        </div>
        <div className="input">
          <TextField
            sx={{ width: "351px", height: "40px" }}
            required
            type="address"
            id="address"
            placeholder="العنوان"
            value={address}
            onChange = {e => setaddress(e.target.value)}
          />
        </div>
      </div>
      <div>
        <Button onClick={handleRegister}  className="btn" variant="contained">
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
