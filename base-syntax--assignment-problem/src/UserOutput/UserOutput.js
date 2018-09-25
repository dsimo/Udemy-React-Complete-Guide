import React from 'react';
import './UserOutput.css'

const userOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>My user name is {props.userName}</p>
            <p>I live in Minnesota</p>
        </div>
    )
};

export default userOutput;