import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteLeft, faQuoteRight } from "@fortawesome/free-solid-svg-icons";
import Rating from "react-rating";

const elementLeft = <FontAwesomeIcon icon={faQuoteLeft} />;
const elementRight = <FontAwesomeIcon icon={faQuoteRight} />;
const Review = () => {
  return (
    <div className="d-flex my-5">
      <div className="px-5 pt-5">
        <h3>Abida Rahman</h3>
        <p>
          {" "}
          <span className="fw-bold">Student of: </span> Front-end Development
          Course
        </p>
        <p>
          {elementLeft}
          Taking this course was one of the best decisions of my life.The
          instructors are very helpful.The course overall is very well
          resourced.{elementRight}
        </p>
        <Rating
          className="text-warning"
          initialRating={4}
          emptySymbol="far fa-star"
          fullSymbol="fas fa-star"
          readonly
        />
      </div>
      <div>
        <img
          src="https://image.freepik.com/free-photo/good-looking-curly-haired-mixed-race-girl-hipster-stylish-outfit-hold-hands-waist-confident-enthusiastic-smiling-satisfied-self-assured-woman-giving-lecture-feminism-women-power-white-background_176420-34884.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default Review;
