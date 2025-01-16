import React, { useState } from "react";

const Settings = ({ currentUser }) => {
  const [show, setShow] = useState(false);
  return (
    <div>
      <center>
        <h3>Welcome to your profile Settings</h3>
      </center>
      <div className="list-group">
        <a
          href="#"
          className="list-group-item list-group-item-action d-flex gap-3 py-3"
          aria-current="true"
        >
          <img
            src="https://icon-icons.com/icons2/1378/PNG/512/avatardefault_92824.png"
            alt="twbs"
            width="32"
            height="32"
            className="rounded-circle flex-shrink-0"
          />
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="mb-0">Your username:</h6>
              <p className="mb-0 opacity-75">{currentUser.username}</p>
            </div>
            <small className="opacity-50 text-nowrap">modify</small>
          </div>
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action d-flex gap-3 py-3"
          aria-current="true"
        >
          <img
            src="https://cdn.pixabay.com/photo/2016/06/13/17/30/mail-1454731_640.png"
            alt="twbs"
            width="32"
            height="32"
            className="rounded-circle flex-shrink-0"
          />
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="mb-0">Your email:</h6>
              <p className="mb-0 opacity-75">{currentUser.email}</p>
            </div>
            <small className="opacity-50 text-nowrap">modify</small>
          </div>
        </a>
        <a
          href="#"
          className="list-group-item list-group-item-action d-flex gap-3 py-3"
          aria-current="true"
        >
          <img
            src="https://cdn-icons-png.flaticon.com/512/5582/5582931.png"
            alt="twbs"
            width="32"
            height="32"
            className="rounded-circle flex-shrink-0"
          />
          <div className="d-flex gap-2 w-100 justify-content-between">
            <div>
              <h6 className="mb-0">Your password:</h6>
              <p className="mb-0 opacity-75">
                {show ? (
                  <p onClick={() => setShow(!show)}>{currentUser.password}</p>
                ) : (
                  <p onClick={() => setShow(!show)}>
                    Click here to show password
                  </p>
                )}
              </p>
            </div>
            <small className="opacity-50 text-nowrap">modify</small>
          </div>
        </a>
      </div>
    </div>
  );
};

export default Settings;
