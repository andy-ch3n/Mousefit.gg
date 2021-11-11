import React, { useState } from "react"
import StarRatings from "react-star-ratings"

function Star(props) {

  return (
    <StarRatings
      starSpacing={"2px"}
      rating={5}
      numberOfStars={5}
      starDimension="15px"
      className="star-rating"
    />
  )
}

export default Star