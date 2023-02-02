import React from "react";
import InputComponent from "./InputComponent";
import Button from "./Button";
import SocialCard from "./SocialCard";
import Link from "./Link";
const CardBody = (props) => {
    return (
        <div className="card-body">
            <InputComponent text="text" id="username" placeholder="username" />
            <InputComponent
                text="password"
                id="password"
                placeholder="password"
            />
            <Button id="login-button" name={"Đăng nhập"} />
            <div className="link-wrapper">
                <Link />
            </div>

            <SocialCard className="socials" />
        </div>
    );
};

export default CardBody;
