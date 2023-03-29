import { useContext } from "react";
import { Navigate, Route } from "react-router-dom";
import { UserContext } from "../../contexts/category/user.context";

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { userToken } = useContext(UserContext);
  return userToken ? <>{children}</> : <Navigate to="/" />;
}
