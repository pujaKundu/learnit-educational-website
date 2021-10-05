import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";

import InstructorCard from "../InstructorCard/InstructorCard";

const InstructorDetails = () => {
  const [instructors, setInstructors] = useState([]);
  useEffect(() => {
    fetch("./instructors.json")
      .then((res) => res.json())
      .then((data) => setInstructors(data));
  }, []);
  return (
    <Row xs={1} md={4} lg={4} className="g-4 me-0">
      {instructors.map((instructor) => (
        <InstructorCard
          key={instructor.id}
          instructor={instructor}
        ></InstructorCard>
      ))}
    </Row>
  );
};

export default InstructorDetails;
