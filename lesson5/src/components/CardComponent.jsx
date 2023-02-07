import React from "react";

const CardComponent = (props) => {
    return (
        <div>
            <h1>Card Component</h1>
            {props.children}
        </div>
    );
}