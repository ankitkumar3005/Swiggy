import React from 'react'
import RestaurantCard from './RestaurantCard'
import resList from '../utils/mockData';
import Shimmer from './Shimmer';
// import useOnline from '../utils/useOnline';

const Body = () => {

    const[listOfRestaurants, setListOfRestaurants] = React.useState(resList);
    const[searchText, setSearchText] = React.useState('');

    // const[filteredRestaurants, setFilteredRestaurants] = React.useState([]);

    const handleRestaurant = () => {
        const topRatedRestaurants = resList.filter(
            (restaurant) => restaurant.avgRating > 4.5
        );
        setListOfRestaurants(topRatedRestaurants);
    }

    // const isOnline = useOnline();

    // if(!isOnline) {
    //     return (
    //         <div className='offline'>
    //             <h1>Offline</h1>
    //             <p>Please check your internet connection.</p>
    //         </div>
    //     );
    // }
   return listOfRestaurants.length === 0 ? (
        <Shimmer />
      ) : (
    // useEffect(() => {
    //     fetchData();
    // }, []);
    
    // const fetchData = async () => {
    //   const data = await fetch('/dapi/restaurants/list/v5?lat=12.96340&lng=77.58550&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING');
    //   const json = await data.json();
    //   console.log(json);
    //   // setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants?.info?.name);
    //   setListOfRestaurants(json?.data?.data?.cards[1]?.data?.data?.cards);
    // }

    <div>
      {/* <div className='search'>Search</div> */}
      <div className='filter'>
        <input type='text' className='search' placeholder='Search for restaurants...' value={searchText} onChange={(e) => setSearchText(e.target.value)}/>
        <button className='search-btn' onClick={() => {
          const filteredRestaurants = listOfRestaurants.filter((restaurant) =>
            restaurant.name.toLowerCase().includes(searchText.toLowerCase())
          );
          setListOfRestaurants(filteredRestaurants);
          // setSearchText(''); // Clear the search input after searching
        }}>Search</button>
        <button className='filter-btn' onClick={handleRestaurant}>Top Rated Restaurants</button>
      </div>
      <div className='res-container'>
            {/* <RestaurantCard data ={resList[0]}/>
            <RestaurantCard data ={resList[1]}/>
            <RestaurantCard data ={resList[2]}/>
            <RestaurantCard data ={resList[3]}/>
            <RestaurantCard data ={resList[4]}/>
            <RestaurantCard data ={resList[5]}/> */}
            {listOfRestaurants.map((restaurant) => {
                return <RestaurantCard key={restaurant.id} data={restaurant} />
            })}
             {/* {Array.isArray(listOfRestaurants) && listOfRestaurants.length > 0 ? (
        listOfRestaurants.map((restaurant) => (
            <RestaurantCard key={restaurant.id} data={restaurant} />
        ))
    ) : (
        <p>No restaurants found.</p>
    )} */}
      </div>
    </div>
  )
}

export default Body;
