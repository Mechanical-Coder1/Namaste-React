import { CDN_URL } from "../utils/constants"

const RestaurentCard = (props) => {
    // console.log(props);
    const {resList} = props
    const {name, cloudinaryImageId, avgRating, cuisines, costForTwo } =resList?.info
    // console.log(resList.info.id);

    return(
    <div className='res-card'>
        <img className='res-img' alt='food-logo' src={CDN_URL+ cloudinaryImageId}  />
        <h3 className="name">{name}</h3>
        <h4>{cuisines.join(', ')}</h4>
        <h4>{avgRating} ☆</h4>
        <h4>{costForTwo}</h4>
    </div>
    )}

    export default RestaurentCard