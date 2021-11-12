import React, { useState } from "react"
import StarRatings from "react-star-ratings"
import { setScrapedData, getScrapedData } from './redux/state/scrapedDataSlice.js';
import { useSelector } from "react-redux";


function Star(props) {

const scrapedData = useSelector(getScrapedData);

  return (
    <StarRatings
      starSpacing={"2px"}
      rating={scrapedData.data.rating}
      numberOfStars={5}
      starDimension="15px"
      className="star-rating"
    />
  )
}

export default Star