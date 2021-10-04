import React from "react";
import { Card, Col } from "react-bootstrap";

const InstructorCard = (props) => {
  const { name, img, designation } = props.instructor;
  return (
    <Col>
      <Card className="my-3">
        <Card.Img variant="top" className="img-fluid h-100" src={img} />
        <Card.Body className="pb-5 my-5">
          <Card.Title>{name}</Card.Title>
          <Card.Text>{designation}</Card.Text>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default InstructorCard;
