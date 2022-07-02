import React from 'react'

const CategoriesCard = ({image }) => {
    return (
        <div>
            <div className="card w-full h-auto lg:h-44 bg-base-100 border">
                <div className="card-body items-center w-full">
                    <img className='w-14' src={image.image} alt="" />
                    <h2 className="card-title text-center">{image.name}</h2>
                </div>
            </div>

        </div>
    )
}

export default CategoriesCard