import React from "react";
import { Button } from "react-bootstrap";
import { useHistory } from "react-router";
const Banner = () => {
  const history = useHistory();

  const routeChange = () => {
    let path = "/courses";
    history.push(path);
  };
  return (
    <div className="d-flex my-5 py-5">
      <div
        className="p-5"
        style={{
          textAlign: "left",
        }}
      >
        <h4 className="text-primary">Popular online courses</h4>
        <p className="fs-1">
          The new way to learn properly with us.
          <br />
          Learn popular skills at the best price.
        </p>
        <Button onClick={routeChange}>View Courses</Button>
      </div>
      <div>
        <img
          src="https://image.freepik.com/free-vector/students-watching-webinar-computer-studying-online_74855-15522.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Banner;
