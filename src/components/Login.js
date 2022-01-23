import React, { useContext, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";
import { userContext } from "../App";

const Login = () => {
  const { state, dispatch } = useContext(userContext);
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setpassword] = useState("");
  const loginuser = async (e) => {
    e.preventDefault();

    const res = await fetch("/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    const data = res.json();
    if (res.status === 400 || !data) {
      window.alert("Invalid Credentials");
    } else {
      dispatch({ type: "USER", payload: true });
      window.alert("Login Succesful");
      history.push("/");
    }
  };
  return (
    <>
      <section className="form">
        <div className="container mt-4 w-50">
          <div
            className="alert alert-dark text-center font-weight-bold text-uppercase"
            role="alert"
          >
            --Login form--
          </div>
          <form
            method="POST"
            id="login-form"
            className="border border-dark-5 px-3 py-2"
          >
            <div className="form-group row">
              <label
                htmlfor="static2"
                className="col-sm-2 col-form-label font-weight-bold"
              >
                Email
              </label>
              <div className="col-sm-10">
                <input
                  type="email"
                  className="form-control-plaintext px-3"
                  id="static2"
                  placeholder="Enter your email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlfor="inputPassword"
                className="col-sm-2 col-form-label font-weight-bold"
              >
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control-plaintext px-3"
                  id="inputPassword"
                  placeholder="Enter your Password"
                  value={password}
                  onChange={(e) => setpassword(e.target.value)}
                />
              </div>
            </div>
            <button
              type="submit"
              className="btn btn-dark mb-2 ml-5 font-weight-bold text-uppercase"
              id="login"
              name="login"
              onClick={loginuser}
            >
              Login
            </button>
          </form>
          <div
            className="alert alert-dark text-center font-weight-bold mt-3"
            role="alert"
          >
            If you have not account then you may Signup
            <span className="ml-2">
              <NavLink className="text-decoration-none" to="signup">
                SIGNUP
              </NavLink>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
