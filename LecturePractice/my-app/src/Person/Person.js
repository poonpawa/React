import React from "react";
const person = props => {
    return (
        <p>
            I'm {props.name} & my age is {props.age}
            <br />
            <b>{props.children}</b>
        </p>
    );
};

export default person;
