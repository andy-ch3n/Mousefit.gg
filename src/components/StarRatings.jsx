import React from "react";
import StarRatings from "react-star-ratings";
import { getScrapedData } from "./redux/state/scrapedDataSlice.js";
import { useSelector } from "react-redux";

function Star(props) {
  const scrapedData = useSelector(getScrapedData);

  return (
    <StarRatings
      starSpacing={"2px"}
      rating={scrapedData.data.rating}
      numberOfStars={5}
      starRatedColor="rgb(0,128,128)"
      starDimension="20px"
      className="star-rating"
    />
  );
}

export default Star;
