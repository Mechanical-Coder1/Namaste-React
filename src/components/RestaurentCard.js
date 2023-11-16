import { CDN_URL } from "../utils/constants";

const RestaurentCard = (props) => {
  const { resList } = props;
  // console.log(resList.info);
  const { name, cloudinaryImageId, avgRating, cuisines, costForTwo, sla } =
    resList

  return (
    <div data-testid="card" className="p-4 m-4 w-[250px]  bg-gray-100 hover:bg-gray-300 ml-8 rounded-lg  ">
      <img
        className="rounded-lg"
        alt="food-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <h3 className="font-semibold mt-3">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h3>{costForTwo}</h3>
      <h4>{avgRating} ☆ </h4>
      <h4>Delivery Time: {sla.slaString}</h4>
    </div>
  );
};

// Higher order component
export const withOpenLabel = (RestaurentCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 px-2 rounded-lg" >OPEN</label>
        <RestaurentCard {...props} />
      </div>
    );
  };
};

export default RestaurentCard;
