import React, { useState, useRef, useEffect } from "react";
import { Avatar, Button, MenuItem, NativeSelect, Select, TextField } from "@mui/material";
import { Link } from "react-router-dom";
import logo from "../../../assets/svgs/Vectorregister.svg";
import "./registerPage.scss";
import { postRegister } from "../../../api/auth/register";
import { getCities } from "../../../api/city/city";

function RegisterPage() {
  const [imgFile, setimgFile] = useState<any>();
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [phone, setphone] = useState("");
  const [password1, setpassword1] = useState("");
  const [password2, setpassword2] = useState("");
  const [address, setaddress] = useState("");
  const [cities, setcities] = useState<any>([]);
  const [city, setcity] = useState('-1')
  const chooseFileRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    async function fetchCities() {
      const data = await getCities();
      setcities(data.city);
    }
    fetchCities();
  }, []);

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
    if(city === '-1') {
      return alert('PLEASE CHOOSE CITY')
    }
    try {
      const data = await postRegister({
        customer_name: name,
        customer_password: password1,
        customer_confirm_password: password2,
        customer_email: email,
        city_id: city,
        customer_address: address,
        customer_url: imgFile,
        customer_mobile: phone,
      });
    } catch (error) {
      alert("some thing is wrong");
    }
  }
  function handleCitySelect(eve: React.ChangeEvent<HTMLSelectElement>) {
    eve.preventDefault();
    setcity(eve.target.value as string)
  }
  return (
    <div className="registerPage">
      <div className="logo-container">
        <span>تسجيل الاشتراك</span>
        <button className="edit-btn" onClick={onClickBtn}>
          <span className="edit-btn-title">صورة شحصية</span>
          <img className="selected-img" src={imgFile} alt="" />
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
            onChange={(e) => setname(e.target.value)}
          />
        </div>
        <div className="input">
          <TextField
            sx={{ width: "351px", height: "40px" }}
            required
            type="number"
            placeholder="الهاتف"
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
            placeholder="البريد"
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
        <div className="input">
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
        <div className="input">
          <NativeSelect
          required
          sx={{ width: "351px", height: "40px" }}
          onChange={handleCitySelect} value = {city} >
            <option value={-1} hidden >
              المدينة
            </option>
            {cities.map((city: any) => (
              <option 
              style={{width : '50%'}}
              key={city.city_id} value={city.city_id}>{city.city_name}</option>
            ))}
          </NativeSelect>
        </div>
      </div>
      <div>
        <Button onClick={handleRegister} className="btn" variant="contained">
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
