import React from 'react'
import useReview from '../Hook/useReview'
import ReviewCard from './ReviewCard'

const Reviews = () => {
    const {review} = useReview()
    console.log(review)
    return (
        <div>
            <ReviewCard desc={review.desc}/>
            <ReviewCard desc={review.desc}/>
            <ReviewCard desc={review.desc}/>
            <ReviewCard desc={review.desc}/>
        </div>
    )
}

export default Reviews