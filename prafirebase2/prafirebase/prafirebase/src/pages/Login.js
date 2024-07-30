import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { googleSignInInitiate, loginInitiate } from "../redux/action";
import "./Login.css";
const Login = () => {
  const [state, setState] = useState({
    email: "",
    password: "",
  });
  const { email, password } = state;
  
  const { currentUser } = useSelector((state) => state.user);

  const navigate = useNavigate();

  const dispatch = useDispatch();

  useEffect(() => {
    if (currentUser) {
      navigate("/");
    }
  }, [currentUser, navigate]);

  const handleGoogleSignIn = () => {
    dispatch(googleSignInInitiate());
  };
  const handleFBSignIn = () => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      return;
    }
    dispatch(loginInitiate(email, password));
    // setState({ email: "", password: "" });
  };
  const handleChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  // password same
  // custom validation (regex)
  // login thaat not redirect
  
  return (
    <div>
      <div id="logreg-forms">
        <form className="form-signin" onSubmit={handleSubmit}>
          <h1
            className="h3 mb-3 font-weight-normal"
            style={{ textAlign: "center" }}
          >
            Sign in
          </h1>
          <div className="social-login">
            <button
              className="btn google-btn social-btn"
              type="button"
              onClick={handleGoogleSignIn}
            >
              <span>
                <i className="fab fa-google-plus-g"></i> Sign in with Google+
              </span>
            </button>
            <button
              className="btn facebook-btn social-btn"
              type="button"
              onClick={handleFBSignIn}
            >
              <span>
                <i className="fab fa-facebook-f"></i> Sign in with Facebook
              </span>
            </button>
          </div>
          <p style={{ textAlign: "center" }}>OR</p>
          <input
        //  autoComplete="new-password"
            type="email"
            id="inputEmail"
            className="form-control"
            placeholder="Email Address"
            name="email"
            onChange={handleChange}
            value={email}
            required      
          />
          <br />
          <input
        //  autoComplete="new-password"
            type="password"
            id="inputpassword"
            className="form-control"
            placeholder="Enter password"
            name="password"
            onChange={handleChange}
            value={password}
            required 
          />
          <button className="btn btn-secondry btn-block" type="submit">
            <i className="fas fa-sign-in-alt"></i>Sign In
          </button>
          <hr />
          <p>Don't have any account</p>
          <Link to="/register">
            <button
              className="btn btn-primary btn-block"
              type="button"
              id="btn-signup"
            >
              <i className="fas fa-user-plus"></i>Sign up New account
            </button>
          </Link>
        </form>
      </div>
    </div>
  );
};

export default Login;
