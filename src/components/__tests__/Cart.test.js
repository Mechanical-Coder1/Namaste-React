import { fireEvent, render,screen } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"
import "@testing-library/jest-dom"
import MOCK_DATA from "../../components/mocks/cartMock.json"
import { act } from "react-dom/test-utils"
import { Provider } from "react-redux"
import appStore from "../../utils/appStore"
import Header from "../Header"
import { BrowserRouter } from "react-router-dom"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})

test("should render RestarantMenu with categories", async ()=>{
 await act(async ()=>render(<Provider store={appStore}> <RestaurantMenu /></Provider>))    

    const categories = screen.getByText("Burger (5)")
    expect(categories).toBeInTheDocument()
    fireEvent.click(categories)

    const foodItems = screen.getAllByTestId("foodItems")
    expect(foodItems.length).toBe(5)
})

test("sshould render add+ button", async ()=>{
  await act( async()=> render(
 <BrowserRouter>
  <Provider store={appStore}> 
    <RestaurantMenu/>
    <Header />
  </Provider>
  </BrowserRouter>
  ))
  
  const snacks = screen.getByText("Snack (9)")
  fireEvent.click(snacks)

  const foodItems = screen.getAllByTestId("foodItems")
  expect(foodItems.length).toBe(9)

  const addBtn = screen.getAllByTestId("addBtn")
//   console.log(addBtn.length);
    fireEvent.click(addBtn[0])

    const cartItems = screen.getByText("Cart-(1)")
    expect(cartItems).toBeInTheDocument()

} )