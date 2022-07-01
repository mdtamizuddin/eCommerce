import React from 'react'
import { useQuery } from 'react-query'

const useProduct = () => {
    const url = 'https://dandabazz.onrender.com/products'
    const { isLoading, data: products } = useQuery(['Products'], () =>
        fetch(url)
            .then(res => res.json()
            )
    )
    if (isLoading) {
        return <h1>Loading....</h1>
    }

    return products
}

export default useProduct