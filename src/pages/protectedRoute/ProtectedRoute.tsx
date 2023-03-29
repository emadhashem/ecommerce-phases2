import { useContext } from "react";
import { Route } from "react-router-dom";
import { UserContext } from "../../contexts/category/user.context";

export default function ProtectedRoute(props: {
  path: string;
  element: React.ReactNode;
}) {
  const { path, element } = props;
  const { userToken } = useContext(UserContext);
  return userToken ? <Route path={path} element={element} /> : null;
}
