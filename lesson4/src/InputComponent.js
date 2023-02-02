import React from "react";

const InputComponent = (props) => {
    return (
        <div>
            <input
                type={props.text}
                id={props.id}
                placeholder={props.placeholder}
            />
        </div>
    );
};

export default InputComponent;
