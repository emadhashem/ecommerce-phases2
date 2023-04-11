import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { logOut } from "../api/auth/logout";
import { UserContext } from "../contexts/category/user.context";

function useLogOut() {
  const { setUserToken, setUsername, userToken } = useContext(UserContext);
  const navigate = useNavigate();
  const fetchLogOut = async () => {
    try {
      await logOut(userToken);
      setUserToken("");
      setUsername("");
      navigate("/");
    } catch (error) {
      setUserToken("");
      setUsername("");
      navigate("/");
    }
  };
  return { fetchLogOut };
}

export default useLogOut;
