import React, { useEffect, useState } from "react";

const Contact = () => {
  const [userData, setuserData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const userContact = async () => {
    try {
      const res = await fetch("/getdata", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const data = await res.json();
      console.log(data);
      setuserData({
        ...userData,
        name: data.name,
        email: data.email,
        phone: data.phone,
      });
      if (!res.status === 200) {
        const error = new Error(res.error);
        throw error;
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    userContact();
  }, []);
  // storeing data in state
  const inputevents = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setuserData({ ...userData, [name]: value });
  };
  // send the data backend
  const contactform = async (e) => {
    e.preventDefault();
    const { name, email, phone, message } = userData;
    const res = await fetch("/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        message,
      }),
    });
    const data = await res.json();
    if (!data) {
      console.log("message not send");
    } else {
      alert("message sent");
      setuserData({ ...userData, message: "" });
    }
  };
  // return
  return (
    <>
      <div className="container">
        <div className="row mt-5 mb-3">
          <div className="col-md-4">
            <div
              class="alert alert-dark text-center font-weight-bold"
              role="alert"
            >
              <h5 className="text-muted font-weight-bold">PHONE</h5>
              01799213804
            </div>
          </div>
          <div className="col-md-4">
            <div
              class="alert alert-dark text-center font-weight-bold"
              role="alert"
            >
              <h5 className="text-muted font-weight-bold">EMAIL</h5>
              hfjhst@gmail.com
            </div>
          </div>
          <div className="col-md-4">
            <div
              class="alert alert-dark text-center font-weight-bold"
              role="alert"
            >
              <h5 className="text-muted font-weight-bold">ADDRESS</h5>
              Sylhet City
            </div>
          </div>
        </div>
        {/* contact form */}
        <div className="container w-75">
          <div className="alert alert-dark" role="alert">
            <h4 className="alert-heading mt-1">Get in Touch</h4>
            <form method="POST" className="mt-4" id="contact-form">
              <div className="row mb-4">
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Your name"
                    name="name"
                    value={userData.name}
                    onChange={inputevents}
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="email"
                    className="form-control"
                    placeholder="Your Email"
                    name="email"
                    value={userData.email}
                    onChange={inputevents}
                  />
                </div>
                <div className="col-md-4">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Phone Number"
                    name="phone"
                    value={userData.phone}
                    onChange={inputevents}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows="3"
                    placeholder="Describe yourself here..."
                    name="message"
                    value={userData.message}
                    onChange={inputevents}
                  ></textarea>
                </div>
              </div>
              <button
                type="submit"
                className="btn btn-dark mt-3 font-weight-bold"
                id="send"
                name="send"
                onClick={contactform}
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
