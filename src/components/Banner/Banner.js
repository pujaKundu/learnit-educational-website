import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
import "./Banner.css";
const Banner = () => {
  const history = useHistory();

  const routeChange = () => {
    let path = "/courses";
    history.push(path);
  };
  return (
    <div className="d-flex my-5 py-5">
      <div className="p-5 text me-5">
        <h4 className="text-primary">Popular online courses</h4>
        <p className="fs-1 my-4">
          The new way to{" "}
          <span className="text-uppercase text-color fw-bold">learn</span>{" "}
          <br />
          skills and boost your
          <span className="text-uppercase text-color fw-bold">
            {" "}
            career
          </span>{" "}
          with
          <span className="text-uppercase text-color fw-bold"> us.</span>
        </p>
        <Button onClick={routeChange}>View Courses</Button>
      </div>
      <div className="ms-5 ">
        <img
          src="https://image.freepik.com/free-vector/students-watching-webinar-computer-studying-online_74855-15522.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
