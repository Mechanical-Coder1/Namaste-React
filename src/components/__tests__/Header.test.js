import { Provider } from "react-redux"
import Header from "../Header"
import{fireEvent, render, screen } from "@testing-library/react"
import appStore from "../../utils/appStore"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

test("Should render header component in the document",()=>{
    render(<BrowserRouter>
    <Provider store={appStore}>
      <Header/>
    </Provider>
    </BrowserRouter>)

    const loginButton = screen.getByRole("button",{name:"Login"})

    fireEvent.click(loginButton)
    const logoutButton = screen.getByText("Logout")
    expect(logoutButton).toBeInTheDocument()

})

test("Should cart should render in the document",()=>{
   
    render(
        <BrowserRouter>
         <Provider store={appStore}>
          <Header/>
         </Provider>
        </BrowserRouter>
    )

    const cartItems = screen.getByText("Cart-(0)")
    expect(cartItems).toBeInTheDocument()
})
