import React, { useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

const Signup = () => {
  const history = useHistory();
  const [user, setuser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });
  let name, value;
  const handleInputs = (e) => {
    name = e.target.name;
    value = e.target.value;
    setuser({ ...user, [name]: value });
  };
  const postdata = async (e) => {
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });
    const data = await res.json();
    if (res.status === 422 || !data) {
      window.alert("Invalid registration");
      console.log("invalid registration");
    } else {
      window.alert("Registration Succesful");
      console.log("Registration Succesful");
      history.push("/login");
    }
  };
  return (
    <>
      <section className="form">
        <div className="container mt-4 w-50">
          <div
            class="alert alert-dark text-center font-weight-bold text-uppercase"
            role="alert"
          >
            Resgistration form
          </div>
          <form
            method="POST"
            id="reg-form"
            className="border border-dark-5 px-3 py-2"
          >
            <div className="form-group row">
              <label
                for="static1"
                className="col-sm-2 col-form-label font-weight-bold"
              >
                Name
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control-plaintext px-3"
                  id="static1"
                  placeholder="Enter your Name"
                  name="name"
                  value={user.name}
                  onChange={handleInputs}
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                for="static2"
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
                  value={user.email}
                  onChange={handleInputs}
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                for="static3"
                className="col-sm-2 col-form-label font-weight-bold"
              >
                Phone
              </label>
              <div className="col-sm-10">
                <input
                  type="number"
                  className="form-control-plaintext px-3"
                  id="static3"
                  placeholder="Enter your number"
                  name="phone"
                  value={user.phone}
                  onChange={handleInputs}
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                for="static4"
                className="col-sm-2 col-form-label font-weight-bold"
              >
                work
              </label>
              <div className="col-sm-10">
                <input
                  type="text"
                  className="form-control-plaintext px-3"
                  id="static4"
                  placeholder="Enter your work"
                  name="work"
                  value={user.work}
                  onChange={handleInputs}
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                for="inputPassword"
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
                  name="password"
                  value={user.password}
                  onChange={handleInputs}
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                for="inputPassword2"
                className="col-sm-2 col-form-label font-weight-bold"
              >
                Password
              </label>
              <div className="col-sm-10">
                <input
                  type="password"
                  className="form-control-plaintext px-3"
                  id="inputPassword2"
                  placeholder="Enter Password Again"
                  name="cpassword"
                  value={user.cpassword}
                  onChange={handleInputs}
                />
              </div>
            </div>
            <button
              type="submit"
              class="btn btn-dark mb-2 ml-5 font-weight-bold text-uppercase"
              id="signup"
              name="signup"
              onClick={postdata}
            >
              Register
            </button>
          </form>
          <div
            class="alert alert-dark text-center font-weight-bold mt-3"
            role="alert"
          >
            If you are already signup then you may Login
            <span className="ml-2">
              <NavLink className="text-decoration-none" to="login">
                LOGIN
              </NavLink>
            </span>
          </div>
        </div>
      </section>
    </>
  );
};

export default Signup;
