import React from 'react'
import useReview from '../Hook/useReview'

const Description = () => {
    const {review} = useReview()
  return (
    <div>
        <p>{review.desc}</p>
    </div>
  )
}

export default Description