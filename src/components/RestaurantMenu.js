import { useParams } from "react-router-dom";

const RestaurantMenu = () =>{
    //how to read a dynmaic URL parameter
    //useParams is a hook that returns an object of key-value pairs of the dynamic params
    const params = useParams();
    const {id} = params; // Destructuring to get the id from params
    console.log(params);
    return(
        <div>
            <h1>Restaurant id: {id}</h1>
            <h1>Restaurant Menu</h1>    
        </div>    
    )
}

export default RestaurantMenu;