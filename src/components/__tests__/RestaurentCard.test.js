import RestaurentCard from "../RestaurentCard"
import MOCK_DATA from "../mocks/resMockData.json"
import {render, screen } from "@testing-library/react"
import "@testing-library/jest-dom"


test("should render restaurant component with props data", ()=>{
    render(<RestaurentCard resList={MOCK_DATA} />)

    const name1 = screen.getByText("Subway")
    expect(name1).toBeInTheDocument()
})