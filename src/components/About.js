import React, { useEffect, useState } from "react";
import { NavLink, useHistory } from "react-router-dom";

const About = () => {
  const history = useHistory();
  const [userData, setuserData] = useState({});
  const callAboutpage = async () => {
    try {
      const res = await fetch("/about", {
        method: "GET",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        credentials: "include",
      });
      const data = await res.json();
      console.log(data);
      setuserData(data);
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
      history.push("/login");
    }
  };
  useEffect(() => {
    callAboutpage();
  }, []);

  return (
    <>
      <div className="container w-75 mt-5 mb-5">
        <div className="alert alert-dark" role="alert">
          <h4 className="alert-heading mt-1 text-center">About Us</h4>
          <hr className="bg-dark" />
          <form method="GET">
            <div className="row">
              <div className="col-md-3 border-right border-secondary">
                <h5 className="text-uppercase">{userData.name}</h5>
                <p>{userData.work}</p>
                <p className="font-weight-bold">PAGE LINKS</p>
                <p>
                  <NavLink
                    className="text-muted text-decoration-none font-weight-bold"
                    to="/login"
                  >
                    Login
                  </NavLink>
                </p>
                <p>
                  <NavLink
                    className="text-muted text-decoration-none font-weight-bold"
                    to="/"
                  >
                    Home
                  </NavLink>
                </p>
                <p>
                  <NavLink
                    className="text-muted text-decoration-none font-weight-bold"
                    to="/signup"
                  >
                    Registration
                  </NavLink>
                </p>
                <p>
                  <NavLink
                    className="text-muted text-decoration-none font-weight-bold"
                    to="/contact"
                  >
                    Contact
                  </NavLink>
                </p>
              </div>
              <div className="col-md-7 mb-3">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                  <li className="nav-item">
                    <a
                      className="nav-link active text-dark"
                      id="home-tab"
                      data-toggle="tab"
                      href="#home"
                      role="tab"
                      aria-controls="home"
                      aria-selected="true"
                    >
                      About
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link text-dark"
                      id="profile-tab"
                      data-toggle="tab"
                      href="#timeline"
                      role="tab"
                      aria-controls="profile"
                      aria-selected="false"
                    >
                      Timeline
                    </a>
                  </li>
                </ul>
                <div className="tab-content" id="myTabContent">
                  <div
                    className="tab-pane fade show active"
                    id="home"
                    role="tabpanel"
                    aria-labelledby="home-tab"
                  >
                    <div className="row px-2 py-2">
                      <div className="col-md-5 text-uppercase font-weight-bold">
                        User Id
                      </div>
                      <div className="col-md-7">02356245825484</div>
                    </div>
                    <div className="row px-2 py-2">
                      <div className="col-md-5 text-uppercase font-weight-bold">
                        Name
                      </div>
                      <div className="col-md-7">{userData.name}</div>
                    </div>
                    <div className="row px-2 py-2">
                      <div className="col-md-5 text-uppercase font-weight-bold">
                        Email
                      </div>
                      <div className="col-md-7">{userData.email}</div>
                    </div>
                    <div className="row px-2 py-2">
                      <div className="col-md-5 text-uppercase font-weight-bold">
                        Phone
                      </div>
                      <div className="col-md-7">{userData.phone}</div>
                    </div>
                    <div className="row px-2 py-2">
                      <div className="col-md-5 text-uppercase font-weight-bold">
                        Profession
                      </div>
                      <div className="col-md-7">{userData.work}</div>
                    </div>
                  </div>
                  <div
                    className="tab-pane fade"
                    id="timeline"
                    role="tabpanel"
                    aria-labelledby="profile-tab"
                  >
                    <div className="row text-justify">
                      <div className="col-md-6">
                        <p className="text-muted">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Eos distinctio dignissimos reprehenderit ex
                          velit,
                        </p>
                      </div>
                      <div className="col-md-6">
                        <p className="text-muted font-weight-bold">
                          Lorem ipsum, dolor sit amet consectetur adipisicing
                          elit. Eos distinctio dignissimos reprehenderit ex
                          velit,
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-2">
                <input
                  type="submit"
                  className="px-2 px-1 border-0"
                  name="aboutedit"
                  value="EDIT PROFILE"
                />
              </div>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default About;
