import { useContext, useEffect, useState } from "react";
import {
  Button,
  InputLabel,
  OutlinedInput,
  InputAdornment,
  FormControl,
  TextField,
  CircularProgress,
} from "@mui/material";
import "./loginPage.scss";
import logo from "../../../assets/svgs/logo.svg";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import IconButton from "@mui/material/IconButton";
import { Link, useNavigate } from "react-router-dom";
import { postLogin } from "../../../api/auth/login";
import { UserContext } from "../../../contexts/category/user.context";

function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const { setUserToken, setUsername, userToken } = useContext(UserContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (userToken) navigate("/");
  }, [userToken]);
  const handleMouseDownPassword = (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
  };
  async function handleLogin() {
    try {
      setloading(true);
      const data = await postLogin(email, password);
      setUserToken(data.customer.remember_token);
      setUsername(data.customer.customer_name);
      setloading(false);
    } catch (error: any) {
      setloading(false);

      alert(error.message);
    }
  }
  return (
    <div className="loginPage">
      <div className="logo-container">
        <img src={logo} />
        <p>تسجيل الدخول</p>
      </div>
      <div className="input-container">
        <TextField
          className="input"
          type="text"
          placeholder="رقم الموبايل او البريد الالكتروني"
          value={email}
          onChange={(e) => setemail(e.target.value)}
        />
        <div className="input">
          <FormControl sx={{ mt: 2, width: "333px" }}>
            <TextField
              sx={{ fontFamily: "Cairo" }}
              variant="outlined"
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setpassword(e.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      className="Visibility-icon"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                    >
                      {showPassword ? <Visibility /> : <VisibilityOff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }}
              placeholder="كلمة المرور"
            />
          </FormControl>
        </div>
      </div>
      <div>
        {loading ? (
          <CircularProgress />
        ) : (
          <Button onClick={handleLogin} className="btn" variant="contained">
            <span>تسجيل الدخول</span>
          </Button>
        )}
      </div>
      <div className="footer-container">
        <span>ليس لديك حساب؟</span>
        <Link to="/register" className="link">
          <span>اشترك الان</span>
        </Link>
        <div className="footer-title">
          <span>أمان , سرعة , تنوع </span>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
