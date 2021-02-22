import React from 'react'
import { CardBase, CardImage, CardTitle } from './styles'

const Card = ({ title, imageUrl }) => {
  return (
    <CardBase>
      <CardImage url={imageUrl} />
      <CardTitle>{title}</CardTitle>
    </CardBase>
  )
}

export default Card