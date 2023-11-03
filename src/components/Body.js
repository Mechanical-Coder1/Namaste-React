import RestaurentCard from "../components/RestaurentCard";
import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const [filterdListOfRestaurents, setFilteredListOfRestaurents] = useState([]);
  const [seachText, setSearchText] = useState("");

  

  useEffect(() => {
    fetchingData();
  }, []);

  const fetchingData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const data = await response.json();
    // console.log(data);
    // console.log(data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)
    setListOfRestaurents(
      data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredListOfRestaurents(
      data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const onLineStatus = useOnlineStatus()
  console.log(onLineStatus);
 
  if(onLineStatus === false){
    return (<h1>Please check your internet connection!!</h1>)
  } 

  return listOfRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div>
        <div className="form">
          <input
            type="text"
            className="input-box"
            placeholder="Enter Restaurent Name Please"
            size="50"
            value={seachText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="search-button"
            onClick={() => {
              const filteredRestaurentsList = listOfRestaurents.filter((res) =>
                res.info.name
                  .toLowerCase()
                  .includes(seachText.toLocaleLowerCase())
              );

              setFilteredListOfRestaurents(filteredRestaurentsList);
            }}
          >
            search
          </button>
        </div>
        <div className="filter">
          

          
        </div>

        <div className="res-container">
          {filterdListOfRestaurents.map((restaurent) => (
           <Link className="link-without-underline" key={restaurent.info.id} to={'/restaurants/'+ restaurent.info.id}> <RestaurentCard  resList={restaurent} /></Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
