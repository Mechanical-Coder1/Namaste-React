import resList from "../utils/mockData"
import RestaurentCard from "../components/RestaurentCard"
import { useState } from "react"

const Body = () =>{
    const [listOfRestaurents, setListOfRestaurents] = useState(resList)
    return(
    <div className='body-container'>
        <div>
            <form className='form'>
                <input className='input-box' type='text'placeholder='Enter Your Delivery Location Please' size='50'  />
                <button className='search-button' >search</button>
            </form>
            <div className="filter">
                <button className="top-btn" onClick={setListOfRestaurents(listOfRestaurents.filter(res => res.info.avgRating > 4))}>
                    Top Rated Restaurants
                </button>
               
                <button className="pop-btn" onClick={setListOfRestaurents(listOfRestaurents.filter(eachRes=>eachRes.info.avgRating > 4.5))}>
                    Popular Restaurants
                </button>
                </div>
            <div className='res-container'>
            
            {
                listOfRestaurents.map(restaurent=><RestaurentCard key={restaurent.info.id} resList={restaurent} />)
            }
            </div>
        </div>
    </div>) 
}

export default Body