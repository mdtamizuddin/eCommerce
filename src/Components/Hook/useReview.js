import { useEffect } from "react";
import { useState } from "react";

function useReview() {
    const [review, setReview] = useState({})
    useEffect(() => {
        fetch('/review.json')
            .then(res => res.json())
            .then(data => setReview(data))
    }, [])


    return { review, setReview }
}

export default useReview