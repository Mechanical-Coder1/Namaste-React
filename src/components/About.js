import React from "react"
import UserClass from "./UserClass"

class About extends React.Component{

    constructor(props){
        super(props)
        // console.log("parent constructor called")
    }

    componentDidMount(){
        // console.log("Parent componentDidMount");
    }

    render(){

        // console.log("parent render called");
        return(
            <div>
            <h1>THIS IS ABOUT PAGE</h1>
            <UserClass />
        </div>
    )
}
}

export default About