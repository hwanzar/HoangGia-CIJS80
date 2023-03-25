import { useContext, useState } from "react";
import "../styles/Header.css";
import { UserContext } from "./UserContext";
import BillBoard from "./BillBoard";

const Header = () => {
    const { cartCounter, billShown, setBillShown } = useContext(UserContext);
    // const [billShown, setBillShown] = useState(false);

    const handleCartOptionClick = () => {
        if (cartCounter > 0) {
            setBillShown(true);
        }
    };

    return (
        <div className="header">
            <div className="header-title">
                <a href="/">ReactMeals</a>
            </div>
            <div className="cart-option" onClick={handleCartOptionClick}>
                <img
                    src="https://cdn-icons-png.flaticon.com/512/3737/3737151.png"
                    alt="gia"
                ></img>
                <p>Your Cart</p>
                <div className="cart-counter">
                    <div>{String(cartCounter)}</div>
                </div>
            </div>
        </div>
    );
};

export default Header;
