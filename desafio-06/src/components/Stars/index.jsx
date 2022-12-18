import React from 'react'
import { ReactComponent as YellowStar } from "../../assets/yellowStar.svg"
import { ReactComponent as Star } from "../../assets/star.svg"
import { StarsBox } from './style'

const Stars = () => {
  return (
    <StarsBox>
      <YellowStar />
      <YellowStar />
      <YellowStar />
      <YellowStar />
      <Star />
    </StarsBox>
  )
}

export default Stars