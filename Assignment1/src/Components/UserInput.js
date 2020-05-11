import React from "react";

const userInput = props => {
    return (
        <div className="inputDiv">
            <label>Enter the text to change username: </label>
            <br />
            <input
                type="text"
                onChange={props.handler}
                value={props.name}
            ></input>
        </div>
    );
};

export default userInput;
