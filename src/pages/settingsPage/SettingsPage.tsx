import { Button, TextField } from "@mui/material";
import React, { useState, useRef, useEffect, useContext } from "react";
import Badge from "@mui/material/Badge";
import EditIcon from "@mui/icons-material/Edit";
import "./settingsPage.scss";
import { getUserData, postUpdateUserData } from "../../api/user/userdata";
import { UserContext } from "../../contexts/category/user.context";
import { getImg } from "../../api";
import { useNavigate } from "react-router-dom";

function SettingsPage() {
  const [imgFile, setimgFile] = useState<any>(null);
  const [img, setimg] = useState<any>();
  const chooseFileRef = useRef<HTMLInputElement>(null);
  const { userToken } = useContext(UserContext);
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [password1, setpassword1] = useState("");
  const [password2, setpassword2] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("-1");
  const [imgForUpload, setimgForUpload] = useState<any>();

  const navigate = useNavigate();
  useEffect(() => {
    async function fetchUserData() {
      try {
        const data = await getUserData(userToken);
        setname(data.customer.customer_name);
        setemail(data.customer.customer_email);
        setphone(data.customer.customer_mobile);
        setaddress(data.customer.customer_address);
        setimg(data.customer.customer_url);
        setcity(data.customer.city_id);
      } catch (error: any) {
        alert(error.message);
      }
    }
    fetchUserData();
  }, []);
  async function saveSettings() {
    try {
      const formData = new FormData();
      const registerInput = {
        customer_name: name,
        customer_password: password1,
        customer_confirm_password: password2,
        customer_email: email,
        city_id: city,
        customer_address: address,
        customer_url: imgForUpload,
        customer_mobile: phone,
      };

      for (let key in registerInput) {
        formData.append(key, registerInput[key as keyof typeof registerInput]);
      }
      if (imgForUpload) formData.append("customer_url", imgForUpload);
      await postUpdateUserData(formData, userToken);
      navigate("/profile");
    } catch (error: any) {
      alert(error.message);
    }
  }

  async function onFileChoosen(eve: React.ChangeEvent<HTMLInputElement>) {
    eve.stopPropagation();
    eve.preventDefault();
    const objectURL = await readBlob(eve.target.files![0]);
    setimgForUpload(eve.target.files![0]);
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
    <div className="settingsPage">
      <Badge
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "right",
        }}
      ></Badge>

      <div className="logo-container">
        <span>تعديل البيانات</span>
        {/* <Badge
          badgeContent={
            <Button className="edit-btn" onClick={onClickBtn}>
              <EditIcon />
            </Button>
          }
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
        > */}
        <div className="img-container">
          <button className="edit-btn" onClick={onClickBtn}>
            <EditIcon className="icon" />
          </button>
          <img src={imgFile ? imgFile : getImg(img)} />
          <input
            ref={chooseFileRef}
            type={"file"}
            style={{ display: "none" }}
            onChange={onFileChoosen}
          />
        </div>
        {/* </Badge> */}
      </div>

      <div className="input-container">
        <TextField
          className="input"
          type="text"
          placeholder="الاسم"
          value={name}
          onChange={(e) => setname(e.target.value)}
        />
        <TextField
          className="input"
          type="number"
          placeholder="الهاتف"
          value={phone}
          onChange={(e) => setphone(e.target.value)}
        />
        <TextField
          className="input"
          type="email"
          placeholder="البريد"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <TextField
          className="input"
          type="password"
          placeholder="كلمة المرور"
          value={password1}
          onChange={(e) => setpassword1(e.target.value)}
        />
        <TextField
          className="input"
          type="password"
          placeholder="تاكيد كلمة المرور "
          value={password2}
          onChange={(e) => setpassword2(e.target.value)}
        />
        <TextField
          className="input"
          type="address"
          placeholder="العنوان"
          value={address}
          onChange={(e) => setaddress(e.target.value)}
        />
      </div>
      <div className="btn-wrapper">
        <Button onClick={saveSettings} className="btn" variant="contained">
          <span>حفظ التعديلات</span>
        </Button>
        <Button
          onClick={() => navigate("/profile")}
          className="btn"
          variant="contained"
        >
          <span>الغاء </span>
        </Button>
      </div>
    </div>
  );
}
export default SettingsPage;
