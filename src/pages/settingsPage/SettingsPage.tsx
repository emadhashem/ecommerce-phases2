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
  useEffect(() => {
    async function fetchUserData() {
      const data = await getUserData(userToken)
    }
    fetchUserData()
  }, [])
  
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
        <TextField className="input" type="text" placeholder="الاسم" />
        <TextField className="input" type="number" placeholder="الهاتف" />
        <TextField className="input" type="email" placeholder="البريد" />
        <TextField
          className="input"
          type="password"
          placeholder="كلمة المرور"
        />
        <TextField
          className="input"
          type="password"
          placeholder="تاكيد كلمة المرور "
        />
        <TextField className="input" type="address" placeholder="العنوان" />
      </div>
      <div>
        <Button className="btn" variant="contained">
          <span>حفظ التعديلات</span>
        </Button>
      </div>
    </div>
  );
}
export default SettingsPage;
