import React from 'react'
import useReview from '../Hook/useReview'

const Description = () => {
    const {review} = useReview()
  return (
    <div>
        <p>{review.description}</p>
    </div>
  )
}

export default Description