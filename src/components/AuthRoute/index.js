import { useLocation, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { userLoginSelector } from "../../stores/slices/users.slice";

const AuthRoute = ({ children }) => {
  const userLogin = useSelector(userLoginSelector);
  const location = useLocation();
  if (!userLogin) {
    return <Navigate to="/login" state={{ path: location.pathname }} replace />;
  } else {
    return children;
  }
};

export default AuthRoute;
