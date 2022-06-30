import React from 'react'
import useReview from '../Hook/useReview'
import ReviewCard from './ReviewCard'

const Reviews = () => {
    const { review } = useReview()
    const { reviews } = review
    return (
        <div>
            {
                reviews?.map(data => <ReviewCard key={data.id} data={data} />)
            }
        </div>
    )
}

export default Reviews