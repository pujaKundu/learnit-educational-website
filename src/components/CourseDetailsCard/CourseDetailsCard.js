import React from "react";
import { Card, Col } from "react-bootstrap";
import Rating from "react-rating";

const CourseDetailsCard = (props) => {
  const { name, price, star, img, duration, projects, videos, level, access } =
    props.singleCourse;
  return (
    <Col>
      <Card className="my-3 w-75 ms-5 bg-primary">
        <Card.Img variant="top" className="img-fluid h-100" src={img} />
        <Card.Body className="pb-5 my-5  text-light ">
          <Card.Title className="fs-4 ">{name}</Card.Title>
          <Rating
            className="text-warning"
            initialRating={star}
            emptySymbol="far fa-star"
            fullSymbol="fas fa-star"
            readonly
          />
          <Card.Text>
            <span className="fw-bold">Price: </span>
            {price} Taka
            <br />
            <span className="fw-bold">Level: </span>
            {level}
            <br />
            <span className="fw-bold">Duration: </span>
            {duration}
            <br />
            <span className="fw-bold">Projects: </span> {projects}
            <br />
            <span className="fw-bold">Videoes: </span> {videos}
            <br />
            <span className="fw-bold">Access: </span> {access}
          </Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CourseDetailsCard;
