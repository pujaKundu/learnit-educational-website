import React from "react";
import Banner from "../Banner/Banner";
import Review from "../Review/Review";

import TopCourseData from "../TopCourse/TopCourseData";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <TopCourseData></TopCourseData>
      <Review></Review>
    </div>
  );
};

export default Home;
