import { useDispatch, useSelector } from "react-redux"
import ItemList from "./ItemList"
import { clearCart } from "../utils/cartSlice"

const Cart = () =>{
    const cartItems = useSelector((store)=>store.cart.items)

    const dispatch = useDispatch()

    const handleClearCart = () =>{
        dispatch(clearCart())
    }

    return(
        <div className=" w-6/12 bg-gray-100 m-auto">
            <div className="font-extrabold text-center p-4 m-4">
            <h1 >Cart</h1>
            <button className="bg-blue-400 px-2 my-1 rounded-lg text-white" onClick={handleClearCart}>Clear Cart</button>
            </div>
            <div>
                {cartItems.length === 0 && <h1 className="text-center p-4 text-red-500">Cart Is Empty, Please Add Items To The Cart!</h1>}
                <ItemList items={cartItems} />
            </div>
        </div>
    )
}

export default Cart