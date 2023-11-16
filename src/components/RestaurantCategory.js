import { useState } from "react";
import ItemList from "./ItemList";

const RestarantCategory = ({data})=>{
    // console.log(data);
    const[showItems, setShowItems]=useState(false)

    const handleClick = () =>{
        console.log("clicked");
        setShowItems(!showItems)
    }

  return(
    <div className="">
        <div className="w-6/12 p-4 shadow-lg bg-gray-100 my-4 m-auto   ">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
              <span className="font-bold">{data.title} ({data.itemCards.length})</span>
              <span>🔽</span>
            </div>
          {showItems &&  <ItemList items={data.itemCards} /> }
       </div>
    </div>
  )
}

export default RestarantCategory