import { useDispatch } from "react-redux";
import { CDN_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({items})=>{
    // console.log(items);
    
    
    const dispatch = useDispatch()

    const handleAddItems = (item) =>{
        dispatch(addItem(item))
    }

    return(
       <div>
       
        {
            items.map((item)=>{return(
             <div data-testid="foodItems" key={item.card.info.id} className="border border-b-2 p-4 text-left flex justify-between">
                <div className="">
                   <p className="font-bold pb-2">{item.card.info.name}</p>
                   <p className="font-semibold pb-2">₨{item.card.info.price/100}</p>
                   <p className="text-xs">{item.card.info.description}</p>
                </div>
                <div className="w-56 h-auto">
                 <div>
                   <button data-testid="addBtn" className="absolute rounded-sm text-white bg-gray-950" onClick={()=>handleAddItems(item)}>Add+</button>
                 </div>
                  <img  src={CDN_URL+ item.card.info.imageId} />
                </div>
            </div>
            )})
        }
     
       </div> 
       
        
    )
}

export default ItemList