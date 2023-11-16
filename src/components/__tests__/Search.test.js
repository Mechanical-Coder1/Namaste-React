import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import "@testing-library/jest-dom"
import { BrowserRouter } from "react-router-dom"
import {act} from "react-dom/test-utils"
import MOCK_DATA from "../../components/mocks/searchMock.json"

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json:()=>{
            return Promise.resolve(MOCK_DATA)
        }
    })
})

test("Should load body component with seach box", async()=>{
   await act(async () => render (
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    )
    )
    
    const searchInput = screen.getByTestId("searchInput")
    expect(searchInput).toBeInTheDocument()
})

test("should render body component with search button", async ()=>{
    await act(async ()=> render(
    <BrowserRouter>
      <Body/>
    </BrowserRouter>
    ))

    const searchBtn = screen.getByTestId("searchButton")
    expect(searchBtn).toBeInTheDocument()
})

test("should body render with 3  restaurant cards with search input 'the'", async ()=>{
    await act(async ()=>render(<BrowserRouter><Body/></BrowserRouter>))

    const searchInput = screen.getByTestId("searchInput")
    fireEvent.change(searchInput, {target:{value:"the"}})
    const searchBtn = screen.getByTestId("searchButton")
    fireEvent.click(searchBtn)
    const cards = screen.getAllByTestId("card")
    expect(cards.length).toBe(3)

})

test("should render body with 20 restaurant cards", async ()=>{
    await act(async()=>render(<BrowserRouter><Body/></BrowserRouter>))

    const allCards = screen.getAllByTestId("card")
    expect(allCards.length).toBe(20)
})

