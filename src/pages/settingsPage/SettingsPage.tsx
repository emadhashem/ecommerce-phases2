import { Button, CircularProgress, TextField } from "@mui/material";
import React, { useState, useRef, useEffect, useContext } from "react";
import Badge from "@mui/material/Badge";
import EditIcon from "@mui/icons-material/Edit";
import "./settingsPage.scss";
import { getUserData, postUpdateUserData } from "../../api/user/userdata";
import { UserContext } from "../../contexts/category/user.context";
import { getImg } from "../../api";
import { useNavigate } from "react-router-dom";
import { getCities } from "../../api/city/city";
import { toast } from "react-toastify";

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
  const [cities, setcities] = useState<any>([]);
  const [imgForUpload, setimgForUpload] = useState<any>();
  const [saveSettingsLoading, setsaveSettingsLoading] = useState(false);
  const navigate = useNavigate();
  const saveUserDataSuccess = "تم حفظ التعديلات";
  const saveUserDataFail = "حدث خطا";
  const autoClose = 1500;
  const notify = (message: string, type: number) => {
    switch (type) {
      case 0:
        return toast.success(message, {
          autoClose: autoClose,
          position: toast.POSITION.TOP_RIGHT,
        });
      case 1:
        return toast.error(message, {
          autoClose: autoClose,
          position: toast.POSITION.TOP_RIGHT,
        });
      default:
        return toast("اختر نوع الرسالة", {
          autoClose: autoClose,
          position: toast.POSITION.TOP_RIGHT,
        });
    }
  };
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
  useEffect(() => {
    async function fetchCities() {
      const data = await getCities();
      setcities(data.city);
    }
    fetchCities();
  }, []);
  async function saveSettings() {
    try {
      setsaveSettingsLoading(true);
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
      setsaveSettingsLoading(false);
      notify(saveUserDataSuccess, 0);
      navigate("/profile");
    } catch (error: any) {
      setsaveSettingsLoading(false);
      notify(error.message, 1);
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
  function handleCitySelect(eve: React.ChangeEvent<HTMLSelectElement>) {
    eve.preventDefault();
    setcity(eve.target.value as string);
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
        <div className="select-input">
          <select
            required
            // sx={{ width: "351px", height: "40px" }}
            onChange={handleCitySelect}
            value={city}
          >
            <option value="" selected hidden>
              اختر المدينة
            </option>
            {cities.map((city: any) => (
              <option key={city.city_id} value={city.city_id}>
                {city.city_name}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="btn-wrapper">
        {saveSettingsLoading ? (
          <CircularProgress />
        ) : (
          <Button onClick={saveSettings} className="btn" variant="contained">
            <span>حفظ التعديلات</span>
          </Button>
        )}
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
