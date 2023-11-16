import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import RestarantCategory from "./RestaurantCategory";

const RestaurantMenu = () => {
  const { resId } = useParams();
  //  console.log(resId);

  const resInfo = useRestaurantMenu(resId);

  if (resInfo === null) {
    return <Shimmer />;
  }

  const { name, cuisines, costForTwoMessage, avgRating } = 
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  // console.log(resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards);

  const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>c.card?.card?.["@type"] ===
  "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

  // console.log(categories)

  return (
    <div className="text-center p-4">
      <h1 className="font-bold text-2xl p-2">{name}</h1>
      <p className="font-bold">
        {cuisines}-{costForTwoMessage}
      </p>
      <div>
        {
          categories.map((category,index)=>{
            return <RestarantCategory key={index} data={category.card.card}/>
          })
        }
      </div>
    </div>
  );
};

export default RestaurantMenu;
