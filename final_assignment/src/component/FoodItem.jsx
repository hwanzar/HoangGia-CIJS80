import { useContext, useState } from "react";
import "../styles/FoodItem.css";
import { UserContext } from "./UserContext";

const FoodItem = (props) => {
    const {
        cart,
        setCart,
        cartCounter,
        setCartCounter,
        totalMoney,
        setTotalMoney,
    } = useContext(UserContext);

    const [value, setValue] = useState(1);
    const [warn, setWarn] = useState(null);
    // const [cart, setCart] = useState();
    const handleChange = (event) => {
        const inputValue = event.target.value;
        setValue(inputValue);
        setWarn(null);
    };

    const handleAddToCart = (e) => {
        // e.preventDefault();
        const item = { name: props.name, price: props.price, amount: value };
        setTotalMoney(
            Number(
                Number(totalMoney) + Number(item.price) * Number(item.amount)
            ).toFixed(2)
        );
        const itemIndex = cart.findIndex(
            (cartItem) => cartItem.name === item.name
        );
        if (item.amount > 0) {
            if (itemIndex >= 0) {
                const newCart = [...cart];
                newCart[itemIndex] = {
                    ...newCart[itemIndex],
                    amount:
                        Number(newCart[itemIndex].amount) + Number(item.amount),
                };
                setCart(newCart);
            } else {
                setCart([...cart, item]);
            }
            setCartCounter(cartCounter + Number(value));
        } else {
            setValue(1);
            setWarn("Amount must be positive");
        }
    };
    return (
        <div className="food-item">
            <div className="food-container">
                <div className="food-left">
                    <img className="food-img" alt="gia" src={props.image} />
                    <div className="food-info">
                        <div className="food-name">{props.name}</div>
                        <div className="description">{props.description}</div>
                        <div className="price">${props.price}</div>
                    </div>
                </div>
                <div className="food-right">
                    <div className="amount">
                        <p>Amount</p>
                        <input
                            type="number"
                            min="0"
                            defaultValue="1"
                            value={value}
                            onChange={handleChange}
                        />
                    </div>
                    {warn && <p className="warning">{warn}</p>}
                    <button
                        className="addButton"
                        onClick={() => handleAddToCart()}
                    >
                        +Add
                    </button>
                </div>
            </div>
        </div>
    );
};
export default FoodItem;
