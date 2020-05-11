import React, { Component } from "react";
import "./App.css";
import UserOutput from "./Components/UserOutput";
import UserInput from "./Components/UserInput";

class App extends Component {
    state = {
        user: ["Mark"]
    };

    changeInputHandler = e => {
        this.setState({ user: [e.target.value] });
    };

    render() {
        //inline style
        const style = {
            color: "purple"
        };
        return (
            <div className="App">
                <h1 style={style}>My First React Assignment</h1>
                <UserInput
                    handler={this.changeInputHandler}
                    name={this.state.user[0]}
                />
                <UserOutput name={this.state.user[0]} />
            </div>
        );
    }
}

export default App;
