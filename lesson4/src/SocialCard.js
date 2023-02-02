import React from "react";
import Social from "./Social";
const SocialCard = (props) => {
    return (
        <div className={props.className}>
            <Social
                className="social"
                name="Facebook"
                image="https://www.freepnglogos.com/uploads/facebook-logo-13.png"
            />
            <Social
                className="social"
                name="Google"
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSK5q0FP74VV9wbfwP378_7kj7iDomHuKrxkXsxDdUT28V9dlVMNUe-EMzaLwaFhneeuZI&usqp=CAU"
            />
            <Social
                className="social"
                name="Apple"
                image="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fa/Apple_logo_black.svg/1667px-Apple_logo_black.svg.png"
            />
        </div>
    );
};

export default SocialCard;
