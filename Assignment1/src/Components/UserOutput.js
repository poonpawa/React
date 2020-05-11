import React from "react";

const UserOutput = props => {
    return (
        <div className="output">
            <p>
                I'm <b>{props.name}</b>
            </p>
            <p>It's the Extra Information</p>
        </div>
    );
};

export default UserOutput;
