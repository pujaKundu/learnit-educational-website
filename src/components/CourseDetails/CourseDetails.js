import React, { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import CourseDetailsCard from "../CourseDetailsCard/CourseDetailsCard";

const CourseDetails = () => {
  const [courseDetails, setCourseDetails] = useState([]);
  useEffect(() => {
    fetch("./allCourses.json")
      .then((res) => res.json())
      .then((data) => setCourseDetails(data));
  }, []);
  return (
    <Row xs={1} md={3} lg={3} className="g-4 me-0 my-5">
      {courseDetails.map((singleCourse) => (
        <CourseDetailsCard
          key={singleCourse.id}
          singleCourse={singleCourse}
        ></CourseDetailsCard>
      ))}
    </Row>
  );
};

export default CourseDetails;
