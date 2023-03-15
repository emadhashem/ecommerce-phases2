import { Button, TextField } from "@mui/material";
import React, { useState, useRef, useEffect, useContext } from "react";
import Badge from "@mui/material/Badge";
import EditIcon from "@mui/icons-material/Edit";
import "./settingsPage.scss";
import { getUserData } from "../../api/user/userdata";
import { UserContext } from "../../contexts/category/user.context";

function SettingsPage() {
  const [imgFile, setimgFile] = useState<any>();
  const chooseFileRef = useRef<HTMLInputElement>(null);
  const {userToken} = useContext(UserContext)
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [password1, setpassword1] = useState("");
  const [password2, setpassword2] = useState("");
  const [address, setaddress] = useState("");
  const [city, setcity] = useState("-1");
  useEffect(() => {
    async function fetchUserData() {
      try {
        const data = await getUserData(userToken)
        setname(data.customer.customer_name)
        setemail(data.customer.customer_email)
        setphone(data.customer.customer_mobile)
        setaddress(data.customer.customer_address)
        setimgFile(data.customer.customer_url)
      } catch (error : any) {
        alert(error.message)
      }

    }
    fetchUserData()
  }, [])
  async function saveSettings() {
    
  }
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
          <img src={imgFile} />
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
        <TextField className="input" type="text" placeholder="الاسم" 
        value={name}
        />
        <TextField className="input" type="number" placeholder="الهاتف"
        value={phone}
        />
        <TextField className="input" type="email" placeholder="البريد" 
        value={email}
        />
        <TextField
          className="input"
          type="password"
          placeholder="كلمة المرور"
          value={password1}
        />
        <TextField
          className="input"
          type="password"
          placeholder="تاكيد كلمة المرور "
          value={password2}
        />
        <TextField className="input" type="address" placeholder="العنوان"
        value={address}
        />
      </div>
      <div>
        <Button onClick={saveSettings} className="btn" variant="contained">
          <span>حفظ التعديلات</span>
        </Button>
      </div>
    </div>
  );
}
export default SettingsPage;
