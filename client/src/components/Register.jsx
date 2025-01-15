import React, { useState } from "react";

const Register = ({ changeView, handleRegister, errorMessage }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  return (
    <div>
      <header className="p-3 mb-3 border-bottom">
        <div className="container">
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
            <a className="navbar-brand" href="#">
              <img
                src="https://static-00.iconduck.com/assets.00/todo-icon-1024x1024-7nszgsj6.png"
                alt="Logo"
                width="30"
                height="30"
                className="d-inline-block align-text-top"
              />
            </a>

            <a
              href="/"
              className="d-flex align-items-center mb-2 mb-lg-0 link-body-emphasis text-decoration-none"
            ></a>

            <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
              <li>
                <a href="#" className="nav-link px-2 link-secondary">
                  FoundIt App
                </a>
              </li>
            </ul>
          </div>
        </div>
      </header>

      <center>
        <form
          className="form"
          onSubmit={(e) => {
            e.preventDefault();
            handleRegister({
              username: username,
              email: email,
              password: password,
            });
          }}
        >
          <p className="title">Register </p>
          <p className="message">Signup now and get full access to our app. </p>

          <label>
            <input
              required=""
              placeholder=""
              type="text"
              className="input"
              onChange={(e) => setUsername(e.target.value)}
            />
            <span>Username</span>
          </label>

          <label>
            <input
              required=""
              placeholder=""
              type="email"
              className="input"
              onChange={(e) => setEmail(e.target.value)}
            />
            <span>Email</span>
          </label>

          <label>
            <input
              required=""
              placeholder=""
              type="password"
              className="input"
              onChange={(e) => setPassword(e.target.value)}
            />
            <span>Password</span>
          </label>

          <p style={{ color: "red" }}>{errorMessage}</p>

          <button className="submit">Submit</button>

          <p className="signin">
            Already have an acount ?{" "}
            <a href="#" onClick={() => changeView("Login")}>
              Signin
            </a>{" "}
          </p>
        </form>
      </center>
    </div>
  );
};

export default Register;
