import Contact from "../Contact"
import "@testing-library/jest-dom"
import {render , screen}  from "@testing-library/react"

describe("contact component testing", ()=>{
    test("Should Contact component render", ()=>{
        render(<Contact />)
        const heading = screen.getByRole("heading")
        expect(heading).toBeInTheDocument()
    })
    
    test("Should render button in the document",()=>{
        
        render(<Contact/>)
        const submitButton = screen.getByRole("button")
        expect(submitButton).toBeInTheDocument()
    })
    
    test('Should textbox render in the document',()=>{
        render(<Contact/>)
        const nameInput = screen.getByPlaceholderText("name")
        expect(nameInput).toBeInTheDocument()
    })
    
    test('sould render all the textboxes in the document',()=>{
        render(<Contact/>)
        const inputBoxes = screen.getAllByRole("textbox")
        expect(inputBoxes.length).toBe(2)
    })
})

