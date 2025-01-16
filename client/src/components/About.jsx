import React from "react";

const About = () => {
  return (
    <div>
      <div class="px-4 py-5 my-5 text-center">
        <img
          class="d-block mx-auto mb-4"
          src="https://static-00.iconduck.com/assets.00/todo-icon-1024x1024-7nszgsj6.png"
          alt=""
          width="72"
          height="72"
        />
        <h1 class="display-5 fw-bold text-body-emphasis">FoundIt App</h1>
        <div class="col-lg-6 mx-auto">
          <p class="lead mb-4">
            Full Stack App built with React and Nodejs as a Junior Final
            Project.
            <br />
            <br />
            Dedications to everyone who took part to develop this modest work,
            especially{" "}
            <span style={{ color: "MediumSlateBlue" }}>
              <b>Mr Fawez</b>
            </span>{" "}
            &{" "}
            <span style={{ color: "MediumSlateBlue" }}>
              <b>Mr Jdidi</b>
            </span>{" "}
            &{" "}
            <span style={{ color: "MediumSlateBlue" }}>
              <b>Miss Imen</b>
            </span>{" "}
            for their kind support.
            <br />
            <br />
            The goal of this platform is to be a place where everyone publish
            his error and wait for other users to contribute in order to solve
            the problem
          </p>
          <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
            <button type="button" class="btn btn-outline-secondary btn-lg px-4">
              Send Us Email
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
