import React from "react";

const About = () => {
  return (
    <div className="d-flex align-items-center-center justify-content">
      <div className="my-5">
        <h1>About Us</h1>
        <h4 className="text-primary mt-3">About LearnIT</h4>
        <p className="mx-5 py-4 border">
          LearnIT was founded on 2016 with the goal of making learning resources
          avialable for people around the world.Since the beginning we have been
          trying to encourage young people to learn different skills.
        </p>
        <h4 className="text-primary">Our Mission</h4>
        <p className="mx-5 py-4 border">
          Our goal is to make young people capable of learning new skill. They
          can use these skills to make a living.
        </p>
        <h4 className="text-primary">Our Vision</h4>
        <p className="mx-5 py-4 border">
          Our goal is to make young people capable of learning new skill. They
          can use these skills to make a living.
        </p>
      </div>
      <div className="my-5">
        <img
          className="img-fluid mt-5 pt-5 pe-5"
          src="https://image.freepik.com/free-vector/contact-us-concept-landing-page_52683-12860.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default About;
