import "./profilePage.scss";
import ProfileNavBar from "./ProfileNavBar";
import React, { useContext } from "react";
import ManageAccountsIcon from "@mui/icons-material/ManageAccounts";
import Switch, { SwitchProps } from "@mui/material/Switch";
import FormControlLabel from "@mui/material/FormControlLabel";
import ArrowLeftRoundedIcon from "@mui/icons-material/ArrowLeftRounded";
import ArrowDropDownRoundedIcon from "@mui/icons-material/ArrowDropDownRounded";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";
import { styled } from "@mui/material/styles";
import { IoLogoWhatsapp } from "react-icons/io";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { DarkModeContext } from "../../contexts/darkModeContext/darkModeContext";
import { useNavigate } from "react-router-dom";
import useLogOut from "../../hooks/useLogOut";
import { Button } from "@mui/material";

const IOSSwitch = styled((props: SwitchProps) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 38,
  height: 20,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: theme.palette.mode === "dark" ? "#2C7BE5" : "#2C7BE5",
        opacity: 1,
        border: 0,
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#33cf4d",
      border: "6px solid #fff",
    },
    // "&.Mui-disabled .MuiSwitch-thumb": {
    //   color: "red",
    // },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: theme.palette.mode === "light" ? 0.7 : 0.3,
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 17,
    height: 17,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: theme.palette.mode === "light" ? "#2C7BE5" : "#2C7BE5",
    opacity: 1,
    transition: theme.transitions.create(["background-color"], {
      duration: 500,
    }),
  },
}));

const ProfilePage = () => {
  // const [darkMode, setDarkMode] = useState(false);
  const navigate = useNavigate();
  const { toggle, darkMode } = useContext(DarkModeContext);
  const { fetchLogOut } = useLogOut();
  return (
    <React.Fragment>
      <ProfileNavBar />
      <div className="profilePage-container">
        <div className="profile-header">
          <div className="profile-edit">
            <Button onClick={fetchLogOut}>logout</Button>
            <p onClick={() => navigate("/profile/settings")}>
              تعديل بيانات الحساب <ManageAccountsIcon className="icon" />
            </p>
          </div>
          <div className="theme">
            <FormControlLabel
              control={<IOSSwitch sx={{ m: 1 }} defaultChecked />}
              label=""
              onClick={toggle}
            />
            <span className="label">تغير المظهر</span>
            {darkMode ? (
              <WbSunnyOutlinedIcon className="light-icon" />
            ) : (
              <DarkModeIcon className="dark-icon" />
            )}
            {/* <CiDark className="icon" /> */}
          </div>
          <div className="orders">
            <div className="title">
              <ArrowDropDownRoundedIcon className="icon" />
              <h3>:الطلبات السابقة</h3>
            </div>
            <div className="ordersDetails-container">
              {/* ---- single details ----- */}
              <div className="orderDetails-item">
                <ArrowLeftRoundedIcon className="icon" />
                <h4>
                  الطلبية رقم:<span>#333</span>- تاريخ:<span>01/01/2023</span>-
                  المبلغ:<span>9999</span> ل.س
                </h4>
              </div>
              {/* ---- single details ----- */}
              <div className="orderDetails-item">
                <ArrowLeftRoundedIcon className="icon" />
                <h4>
                  الطلبية رقم:<span>#333347833</span>- تاريخ:
                  <span>01/01/2023</span>- المبلغ:<span>9999</span> ل.س
                </h4>
              </div>
              {/* ---- single details ----- */}
              <div className="orderDetails-item">
                <ArrowLeftRoundedIcon className="icon" />
                <h4>
                  الطلبية رقم:<span>#333</span>- تاريخ:<span>01/01/2023</span>-
                  المبلغ:<span>99999</span> ل.س
                </h4>
              </div>
            </div>
          </div>
        </div>
        <div className="profile-footer">
          <div className="footer-title">
            <span>:لديك استفسار؟ تواصل معنا</span>
          </div>
          <div className="footer-icons">
            <a href="mailto:test@gmail.com" target="_blank" rel="noreferrer">
              <MdEmail />
            </a>
            <a href="" target="_blank" rel="noreferrer">
              <FiPhoneCall />
            </a>
            <a href="https://wa.me/+9999999" target="_blank" rel="noreferrer">
              <IoLogoWhatsapp />
            </a>
          </div>
          <div className="copyRights">
            &copy;جميع الحقوق محفوظة لتطبيق سوق الجزيرة 2023
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default ProfilePage;
