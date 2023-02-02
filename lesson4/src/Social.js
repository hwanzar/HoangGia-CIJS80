import React from "react";

const Social = (props) => {
    return (
        <div className={props.className}>
            <img src={props.image} />
            <p>{props.name}</p>
        </div>
    );
};

export default Social;
