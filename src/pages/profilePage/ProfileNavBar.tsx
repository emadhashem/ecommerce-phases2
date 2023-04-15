import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import { useNavigate } from "react-router-dom";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import "./profileNavBar.scss";
import { getUserData } from "../../api/user/userdata";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../../contexts/category/user.context";
import { Avatar } from "@mui/material";
import { getImg } from "../../api";

const ProfileNavBar = () => {
  const navigate = useNavigate();
  const [userImg, setuserImg] = useState<any>();
  const { userToken } = useContext(UserContext);
  useEffect(() => {
    if (!userToken) return;
    fetchUserData();
  }, [userToken]);
  async function fetchUserData() {
    try {
      const data = await getUserData(userToken);
      setuserImg(data.customer.customer_url);
    } catch (error: any) {
      // alert(error.message);
    }
  }
  return (
    <div className="profileNavBar-container">
      <div className="rapper">
        <div className="back-icon">
          <ArrowBackRoundedIcon
            onClick={() => navigate("/")}
            fontSize="large"
          />
        </div>
        <div className="title">
          <p>
            حسابي <Avatar src={getImg(userImg)} />
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileNavBar;
