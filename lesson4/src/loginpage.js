import React from "react";
import CardHeader from "./CardHeader";
import CardBody from "./CardBody";
const LoginPage = (props) => {
    return (
        <>
            <div className={props.className}>
                <CardHeader className="login" id="login" />
                <CardBody />
            </div>
        </>
    );
};

export default LoginPage;
