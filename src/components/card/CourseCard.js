import React from "react";
import { Card, Col } from "react-bootstrap";
import Rating from "react-rating";

const CourseCard = (props) => {
  const { name, img, price, star } = props.singleCourse;
  return (
    <div>
      <Col className="h-100 ms-3">
        <Card className="my-3 h-100 shadow">
          <Card.Img variant="top" className="img-fluid" src={img} />
          <Card.Body className="pb-5 my-5">
            <Card.Title>{name}</Card.Title>
            <Card.Text>
              {" "}
              <span className="fw-bold">Price:</span> {price} Taka
            </Card.Text>
            <Rating
              className="text-warning"
              initialRating={star}
              emptySymbol="far fa-star"
              fullSymbol="fas fa-star"
              readonly
            />
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
};

export default CourseCard;
