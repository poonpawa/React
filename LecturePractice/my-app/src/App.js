import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
    state = {
        person: [
            { name: "Poonam", age: "26" },
            { name: "Prasad", age: "21" },
            { name: "Stranger", age: "30" }
        ]
    };

    switchHandler = e => {
        this.setState({
            person: [
                { name: "Poornima", age: "26" },
                { name: "Prasad", age: "21" },
                { name: "Stranger", age: "50" }
            ]
        });
    };

    render() {
        return (
            <div className="App">
                <h1>Hi! I'm using React</h1>
                <button onClick={this.switchHandler}>Switch name</button>
                <Person
                    name={this.state.person[0].name}
                    age={this.state.person[0].age}
                />
                <Person
                    name={this.state.person[1].name}
                    age={this.state.person[1].age}
                />
                <Person
                    name={this.state.person[2].name}
                    age={this.state.person[2].age}
                >
                    and I don't know my name
                </Person>
            </div>
        );
    }
}

export default App;
