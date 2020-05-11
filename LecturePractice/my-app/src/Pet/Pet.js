import React from 'react';
//delaring a pet functional component with name property
const Pet = props => {
    return (
        <p><i>I have a pet whose name is {props.name}</i></p>
    );
}

export default Pet;