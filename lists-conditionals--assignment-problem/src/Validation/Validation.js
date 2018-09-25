import React from 'react';

const Validation = (props) => {

    let validationMessage = 'Text too short';

    if (props.inputLength > 4) {
        validationMessage = 'Text long enough'
    }
    
    return (
        <div>
            <p>{validationMessage}</p>
        </div>
    )
};

export default Validation;