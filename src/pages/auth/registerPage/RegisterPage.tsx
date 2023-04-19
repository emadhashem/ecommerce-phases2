import React, { useState, useRef, useEffect, useContext } from "react";
import {
  Avatar,
  Button,
  CircularProgress,
  MenuItem,
  NativeSelect,
  Select,
  TextField,
} from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../../assets/svgs/Vectorregister.svg";
import "./registerPage.scss";
import { postRegister } from "../../../api/auth/register";
import { getCities } from "../../../api/city/city";
import { UserContext } from "../../../contexts/category/user.context";
import defaultImg from "../../../assets/svgs/defaultImg.svg";
import { toast } from "react-toastify";

function RegisterPage() {
  const [imgFile, setimgFile] = useState<any>();
  const [imgForUpload, setimgForUpload] = useState<any>();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [password1, setpassword1] = useState("");
  const [password2, setpassword2] = useState("");
  const [address, setaddress] = useState("");
  const [cities, setcities] = useState<any>([]);
  const [city, setcity] = useState("-1");
  const [loading, setloading] = useState(false);
  const chooseFileRef = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  const { setUserToken, setUsername, userToken } = useContext(UserContext);
  useEffect(() => {
    if (userToken) navigate("/");
  }, [userToken]);
  useEffect(() => {
    async function fetchCities() {
      const data = await getCities();
      setcities(data.city);
    }
    fetchCities();
  }, []);
  const autoClose = 1500;
  const registerSuccess = "تم بنجاح";
  const notify = (message: string, type: number) => {
    switch (type) {
      case 0:
        return toast.success(message, {
          autoClose: autoClose,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      case 1:
        return toast.error(message, {
          autoClose: autoClose,
          position: toast.POSITION.BOTTOM_CENTER,
        });
      default:
        return toast("اختر نوع الرسالة", {
          autoClose: autoClose,
          position: toast.POSITION.BOTTOM_CENTER,
        });
    }
  };
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
  async function handleRegister() {
    if (city === "-1") {
      // return alert("PLEASE CHOOSE CITY");
    }
    try {
      setloading(true);
      const formData = new FormData();
      const registerInput = {
        customer_name: name,
        customer_password: password1,
        customer_confirm_password: password2,
        customer_email: email,
        city_id: city,
        customer_address: address,
        customer_url: imgFile,
        customer_mobile: phone,
      };

      for (let key in registerInput) {
        formData.append(key, registerInput[key as keyof typeof registerInput]);
      }
      if (imgForUpload) formData.append("customer_url", imgForUpload);
      const data = await postRegister(formData);
      setUserToken(data.customer.remember_token);
      setUsername(data.customer.customer_name);
      notify(registerSuccess, 0);
      setloading(false);
    } catch (error: any) {
      notify(error.message, 1);
      setloading(false);
    }
  }
  function handleCitySelect(eve: React.ChangeEvent<HTMLSelectElement>) {
    eve.preventDefault();
    setcity(eve.target.value as string);
  }
  return (
    <div className="registerPage">
      <div className="logo-container">
        <span>تسجيل الاشتراك</span>
        <button className="edit-btn" onClick={onClickBtn}>
          <span className="edit-btn-title">صورة شحصية</span>
          {imgFile ? (
            <img className="selected-img" src={imgFile} alt="" />
          ) : (
            <img className="def-img" src={defaultImg} />
          )}
          <div className="img-container">
            {/* <img src={logo} /> */}
            <input
              ref={chooseFileRef}
              type={"file"}
              style={{ display: "none" }}
              onChange={onFileChoosen}
              accept="image/png, image/jpg, image/svg ,image/jpeg"
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
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <div className="input">
          <TextField
            sx={{ width: "351px", height: "40px" }}
            required
            placeholder="الموبايل"
            value={phone}
            onChange={(e) => setphone(e.target.value)}
          />
        </div>
        <div className="input">
          <TextField
            sx={{ width: "351px", height: "40px" }}
            required
            type="email"
            id="email"
            placeholder="البريد الالكتروني (حقل اختياري)"
            value={email}
            onChange={(e) => setemail(e.target.value)}
          />
        </div>
        <div className="input">
          <TextField
            sx={{ width: "351px", height: "40px" }}
            required
            type="password"
            placeholder="كلمة المرور"
            value={password1}
            onChange={(e) => setpassword1(e.target.value)}
          />
        </div>
        <div className="input">
          <TextField
            sx={{ width: "351px", height: "40px", color: "red" }}
            required
            type="password"
            placeholder="تاكيد كلمة المرور "
            value={password2}
            onChange={(e) => setpassword2(e.target.value)}
          />
        </div>
        {/* <div className="input">
          <TextField
            sx={{ width: "351px", height: "40px" }}
            required
            type="address"
            id="address"
            placeholder="العنوان"
            value={address}
            onChange={(e) => setaddress(e.target.value)}
          />
        </div>
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
        </div> */}
      </div>
      <div>
        {loading ? (
          <CircularProgress />
        ) : (
          <Button onClick={handleRegister} className="btn" variant="contained">
            <span>تسجيل</span>
          </Button>
        )}
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
