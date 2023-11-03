import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    // console.log(this.props.name + 'child constructor called');

    this.state = {
      user_info: {
        name: "default name",
        location: "default location",
      },
    };
  }

  async componentDidMount() {
    // console.log(this.props.name + ' child componentDidMount');
    const data = await fetch("https://api.github.com/users/Mechanical-Coder1");

    const json = await data.json();

    this.setState({
      user_info: json,
    });
  }
  render() {
    // console.log(this.props.name + 'child render called');

    return (
      <div className="user-card">
        <img src="https://avatars.githubusercontent.com/u/148060153?v=4" alt="user avatar"></img>
        <p>Name:{this.state.user_info.name}</p>
        <p>Name:{this.state.user_info.location}</p>
      </div>
    );
  }
}

export default UserClass;
