import React from "react";

class User extends React.Component {
  constructor (props) {
    super(props);  // super method is used to call the parent class i.e constructor

      //a state is a set of data that an individual components can hold
      this.state = {
        user: "Student"
      };
      console.log("Hey I am from Constructor!");
  }

  componentDidMount(){
    this.setState({user: "Undergrad Student"})
    console.log("Hey I am from ComponentDidMount!");
  }

  render() { //logic happens2
    console.log("Hey I am from render!");
    return (
      <div>
        {/* to refer to the user class we need to write this keyword to access the things */}
        <h1>{this.props.name}</h1>
        <h2>{this.props.description}</h2>
        <h3>{this.state.user}</h3>
      </div>
    );
  };
};


export default User;






/* function User(props) {
    return (
      <div>
        <h1>{props.name}</h1>
        <h2>{props.description}</h2>
      </div>
    );
  } */
  
  //export default User;
  //Props --> properties or params a data that is passed from one component to other