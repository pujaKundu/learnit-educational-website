import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import CourseCard from "../card/CourseCard";

const SingleCourse = () => {
  const [course, setCourse] = useState([]);
  useEffect(() => {
    fetch("./topCourses.json")
      .then((res) => res.json())
      .then((data) => setCourse(data));
  }, []);

  return (
    <Row xs={1} md={4} lg={4} className="g-4 me-0">
      {course.map((singleCourse) => (
        <CourseCard
          key={singleCourse.id}
          singleCourse={singleCourse}
        ></CourseCard>
      ))}
    </Row>
  );
};

export default SingleCourse;
