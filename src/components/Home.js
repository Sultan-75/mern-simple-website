import React, { useEffect, useState } from "react";

const Home = () => {
  const [userName, setuserName] = useState("");
  const [show, setshow] = useState(false);
  const userHome = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      setuserName(data.name);
      setshow(true);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    userHome();
  }, []);
  return (
    <>
      <div className="container-fluid homebody">
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="font-weight-bold mb-0 text-dark font-weight-bold">
              Welcome
            </p>
            <h2 className="font-italic text-uppercase text-success">
              {userName}
            </h2>
            <h2 className="font-italic text-muted">
              {show
                ? "Your login succesfull ,happy to see you"
                : "We are the mern Developer"}
            </h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
