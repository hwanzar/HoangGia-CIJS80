import "../styles/BillBoard.css";
import { UserContext } from "./UserContext";
import { useContext, useState } from "react";

import Order from "./Order";

function BillItem(props) {
    return (
        <div className="bill-info">
            <div className="bill-info-right">
                <h3>{props.name}</h3>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px",
                    }}
                >
                    <div
                        style={{
                            color: "#802408",
                        }}
                    >
                        {props.price}
                    </div>
                    <div className="bill-price">x{props.amount}</div>
                </div>
            </div>

            <div className="change-button">
                <button onClick={props.onDecrement}> - </button>
                <button onClick={props.onIncrement}> + </button>
            </div>
        </div>
    );
}

function BillBoard({
    FINAL,
    handleClose,
    handleOrder,
    handleCancel,
    handleOrderSent,
}) {
    const {
        orderSented,
        formShown,
        cart,
        totalMoney,
        setCart,
        setTotalMoney,
        cartCounter,
        billShown,
        setBillShown,
        setCartCounter,
        OrderSent,
    } = useContext(UserContext);

    const handleIncrement = (index) => {
        const newCart = [...cart];
        newCart[index].amount++;
        setCart(newCart);
        setTotalMoney(
            Number(Number(totalMoney) + Number(newCart[index].price)).toFixed(2)
        );
        setCartCounter(cartCounter + 1);
    };
    // const handleClose = () => {
    //     setBillShown(false);
    // };

    const handleDecrement = (index) => {
        let newCart = [...cart];
        const itemAmount = newCart[index].amount;
        setTotalMoney(
            Number(Number(totalMoney) - Number(newCart[index].price)).toFixed(2)
        );
        {
            console.log(newCart[index]);
        }
        if (itemAmount === 1) {
            newCart[index].amount--;
            newCart = newCart.filter((item) => item.amount > 0);
        } else {
            newCart[index].amount--;
        }
        setCart(newCart);
        setCartCounter(cartCounter - 1);
    };

    return (
        <div className="bill-board">
            <div className="billboard-demo">
                {
                    /* !OrderSent && */
                    cart.map((item, index) => {
                        return (
                            <div>
                                <BillItem
                                    key={index}
                                    name={item.name}
                                    price={item.price}
                                    amount={item.amount}
                                    onIncrement={() => handleIncrement(index)}
                                    onDecrement={() => handleDecrement(index)}
                                />
                                <hr />
                            </div>
                        );
                    })
                }

                <div className="footerBill">
                    {!OrderSent && (
                        <div
                            style={{
                                display: "flex",
                                justifyContent: "space-between",
                                flexDirection: "row",
                                width: "100%",
                            }}
                        >
                            <h3>Total Amount</h3>
                            <div>$ {totalMoney}</div>
                        </div>
                    )}
                    {!formShown && !OrderSent && !orderSented && (
                        <div className="bill-button">
                            <button onClick={handleClose}>Close</button>
                            <button onClick={handleOrder}>Order</button>
                        </div>
                    )}
                    {formShown && !orderSented && (
                        <Order
                            handleCancel={handleCancel}
                            handleOrderSent={handleOrderSent}
                        />
                    )}
                </div>
            </div>
            {OrderSent && !orderSented && <div>Sending order data ... </div>}
            {orderSented && (
                <div className="confirmSent">
                    <div>Order success!</div>
                    <div
                        style={{
                            display: "flex",
                            justifyContent: "flex-end",
                        }}
                    >
                        <button className="finalCloseButton" onClick={FINAL}>
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}
export default BillBoard;
