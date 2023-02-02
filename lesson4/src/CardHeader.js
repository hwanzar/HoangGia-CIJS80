import React from "react";

const CardHeader = (props) => {
    return (
        <div className={props.className}>
            <h1 id={props.id}>Đăng nhập</h1>
        </div>
    );
};
export default CardHeader;
