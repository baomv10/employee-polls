import { useDispatch, useSelector } from "react-redux";
import { Link, Outlet } from "react-router-dom";
import { logout, userLoginSelector } from "../../stores/slices/users.slice";

const Layout = () => {
  const dispatch = useDispatch();
  const userLogin = useSelector(userLoginSelector);
  const handleLogout = () => {
    dispatch(logout());
  };
  return (
    <>
      {userLogin && (
        <>
          <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container">
              <div className="navbar-nav">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
                <Link className="nav-link" to="/leaderboard">
                  Leaderboard
                </Link>
                <Link className="nav-link" to="/add">
                  New
                </Link>
              </div>
              <div className="d-flex align-items-center">
                <a className="nav-link text-center" href="#">
                  <i className={userLogin.avatarURL}></i>
                  <br /> {userLogin.name}
                </a>
                <button className="btn btn-sm ms-5" onClick={handleLogout}>
                  Log out
                </button>
              </div>
            </div>
          </nav>
        </>
      )}
      <div className="container">
        <Outlet />
      </div>
    </>
  );
};

export default Layout;
