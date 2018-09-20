import React from 'react';

const userOutput = (props) => {
    return (
        <div>
            <p>My user name is {props.userName}</p>
            <p>I live in Minnesota</p>
        </div>
    )
};

export default userOutput;