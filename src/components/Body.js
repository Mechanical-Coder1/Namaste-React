import RestaurentCard, { withOpenLabel } from "../components/RestaurentCard";
import { useState, useEffect, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const Body = () => {
  const [listOfRestaurents, setListOfRestaurents] = useState([]);
  const [filterdListOfRestaurents, setFilteredListOfRestaurents] = useState([]);
  const [seachText, setSearchText] = useState("");

  // console.log(listOfRestaurents);
  useEffect(() => {
    fetchingData();
  }, []);

  const fetchingData = async () => {
    const response = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.385044&lng=78.486671&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );

    const data = await response.json();
    // console.log(data);
    console.log(data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants)

    setListOfRestaurents(
      data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
    setFilteredListOfRestaurents(
      data.data.cards[2].card.card.gridElements.infoWithStyle.restaurants
    );
  };

  const onLineStatus = useOnlineStatus();
  // console.log(onLineStatus);

  if (onLineStatus === false) {
    return <h1>Please check your internet connection!!</h1>;
  }

  /* if(filterdListOfRestaurents.length === 0){
     return(<div className="h-screen flex items-center justify-center flex-col"><h1 className="font-bold text-center  text-3xl text-red-500 ">No More Restaurants</h1>
     <button className="bg-gray-200 p-4 m-4 rounded-lg">Back</button>
     </div>)
   } */

  const RestaurantOpenLabel = withOpenLabel(RestaurentCard);

  const {loggedInUser, setUserName} = useContext(UserContext)

  return listOfRestaurents.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body-container">
      <div>
        <div className="m-4 p-4 text-center ">
          <input 
            data-testid="searchInput"
            className="m-4 p-4 border border-black w-96 rounded-lg "
            type="text"
            placeholder="Seach your favorite restaurant"
            value={seachText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            data-testid="searchButton"
            className="p-4 px-6 rounded-lg bg-gray-200 hover:bg-gray-400"
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
        <div className="flex justify-center">
          <label className="font-bold">Username: </label>
          <input  className="border border-black px-2 rounded-lg" 
             type="text" 
             value={loggedInUser} 
             onChange={(e)=>setUserName(e.target.value)} />
        </div>

        <div className="flex flex-wrap">
          {filterdListOfRestaurents.map((restaurent) => (
            <Link
              key={restaurent.info.id}
              to={"/restaurants/" + restaurent.info.id}
            >
              {restaurent.info.isOpen ? (
                <RestaurantOpenLabel resList={restaurent.info} />
              ) : (
                <RestaurentCard resList={restaurent.info} />
              )}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Body;
