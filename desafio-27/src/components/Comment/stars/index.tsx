import React from 'react'
import { ReactComponent as StarSvg } from '../../../assets/star.svg'
import * as S from './styles'

const Stars = () => {
  return (
    <S.StarsBox>
      <StarSvg />
      <StarSvg />
      <StarSvg />
      <StarSvg />
      <StarSvg />
    </S.StarsBox>
  )
}

export default Stars