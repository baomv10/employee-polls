import { useSelector, useDispatch } from "react-redux";
import {
  userLoginSelector,
  requestLogin,
  errorLoginSelector,
} from "../../stores/slices/users.slice";
import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const { state } = useLocation();
  const userLogin = useSelector(userLoginSelector);
  const errorLogin = useSelector(errorLoginSelector);
  const dispatch = useDispatch();

  const [id, setId] = useState();
  const [password, setPassword] = useState();
  const [isSubmitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (userLogin) {
      return navigate(state?.path || "/");
    }
  }, [userLogin]);

  const login = () => {
    setSubmitted(true);
    if (!id || !password) return;
    dispatch(
      requestLogin({
        id,
        password,
      })
    );
  };

  return (
    <div className="container">
      <div className="row justify-content-center mt-5">
        <div className="col-4">
          <div className="card">
            <div className="card-body">
              <div className="text-center mb-5">
                <h2>Employee Polls</h2>
                <i className="fs-1 bi bi-person-circle"></i>
              </div>
              <div>
                {isSubmitted && !id && (
                  <p data-testid="error-user" className="text-danger">
                    User is required.
                  </p>
                )}
                {isSubmitted && !password && (
                  <p data-testid="error-password" className="text-danger">
                    Password is required.
                  </p>
                )}
                {errorLogin && (
                  <p data-testid="error-incorrect" className="text-danger">
                    {errorLogin}
                  </p>
                )}
              </div>
              <div className="mb-3">
                <input
                  data-testid="user"
                  placeholder="User"
                  className="form-control"
                  onChange={(e) => setId(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <input
                  data-testid="password"
                  type="password"
                  placeholder="Password"
                  className="form-control"
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <div className="d-grid">
                <button
                  data-testid="btnSubmit"
                  className="btn btn-primary"
                  type="button"
                  onClick={login}
                >
                  Login
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
