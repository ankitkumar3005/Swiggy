import React from 'react'

function RestaurantCard(props) {
    const {name, cuisines, costForTwo, avgRating,cloudinaryImageId,deliveryTime} = props.data;
    //it means {props.data.name} {props.data.cuisines} {props.data.costForTwo} {props.data.avgRating} {props.data.cloudinaryImageId}
  return (
    <div className='res-cards'>
        <img src={cloudinaryImageId} alt='restaurant' className='res-logo' />
       <p>{name}</p>
       <p>{cuisines.join(', ')}</p>
       <p>{costForTwo}</p>
       <p>{avgRating}</p>
       <p>{deliveryTime}</p>
    </div>
  )
}

export default RestaurantCard
