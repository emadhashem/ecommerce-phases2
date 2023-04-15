import { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import { UserContext } from "../../contexts/category/user.context";
import LoginPage from "../auth/loginPage/LoginPage";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userToken } = useContext(UserContext);
  return userToken ? <>{children}</> : <LoginPage />
}
