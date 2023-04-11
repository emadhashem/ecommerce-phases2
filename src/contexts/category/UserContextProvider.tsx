import React, { useEffect, useReducer, useState } from "react";
import { UserContext } from "./user.context";

interface Props {
  children?: React.ReactNode;
}
const initState = {
  userName: "",
  userToken: "",
};
function reducer(state: any, action: any) {
  const { type, paylaod } = action;
  switch (type) {
    case "userToken": {
      return { ...state, userToken: paylaod };
    }
    case "userName": {
      return { ...state, userName: paylaod };
    }
    case "init_stored": {
      return action.value
    }
    default:
      return state;
  }
}
function UserContextProvider({ children }: Props) {
  const [categoryId, setcategoryId] = useState("");
  const [state, dispatch] = useReducer(reducer, initState);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("state")!)) {
      dispatch({
        type: "init_stored",
        value: JSON.parse(localStorage.getItem("state")!),
      });
    }
  }, []);

  useEffect(() => {
    if (state !== initState) {
      localStorage.setItem("state", JSON.stringify(state));
    }
  }, [state]);
  return (
    <UserContext.Provider
      value={{
        categoryId,
        setcategoryId: setcategoryId,
        userName: state.userName,
        userToken: state.userToken,
        setUsername: (paylaod: string) =>
          dispatch({ type: "userName", paylaod }),
        setUserToken: (paylaod: string) =>
          dispatch({ type: "userToken", paylaod }),
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export default UserContextProvider;
