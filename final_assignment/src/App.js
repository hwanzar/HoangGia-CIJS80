import "./App.css";
import Header from "./component/Header";
import FoodList from "./component/FoodList";
import WelcomeCard from "./component/WelcomeCard";
import BillBoard from "./component/BillBoard";
import { UserContext } from "./component/UserContext";
import { useState } from "react";

const App = () => {
    const [cartCounter, setCartCounter] = useState(0); // add state for cartCount
    const [billShown, setBillShown] = useState(false);
    const [formShown, setFormShown] = useState(false);
    const [cart, setCart] = useState([]);
    const [totalMoney, setTotalMoney] = useState(0);
    const [OrderSent, setOrderSent] = useState(false);
    const [isLoadingIn, setIsLoadingIn] = useState(true);
    const [orderSented, setOrderSented] = useState(false);
    const handleClose = () => {
        setBillShown(false);
    };
    const handleOrder = () => {
        setFormShown(true);
    };
    const handleCancel = () => {
        setFormShown(false);
    };
    const handleOrderSent = () => {
        setOrderSent(true);
    };
    const FINAL = () => {
        setBillShown(false);
        setFormShown(false);
        setOrderSented(false);
        setOrderSent(false);
        setTotalMoney(0);
        setCartCounter(0);
        setCart([]);
    };
    return (
        <UserContext.Provider
            value={{
                orderSented,
                setOrderSented,
                isLoadingIn,
                setIsLoadingIn,
                OrderSent,
                setOrderSent,
                cartCounter,
                setCartCounter,
                billShown,
                setBillShown,
                cart,
                setCart,
                formShown,
                setFormShown,
                totalMoney,
                setTotalMoney,
            }}
        >
            {" "}
            <div className="App">
                <Header />
                {billShown && (
                    <div className="board-container">
                        {" "}
                        <BillBoard
                            handleClose={handleClose}
                            handleOrder={handleOrder}
                            handleCancel={handleCancel}
                            FINAL={FINAL}
                            handleOrderSent={handleOrderSent}
                        />
                    </div>
                )}
                <div className="main-container">
                    <WelcomeCard />
                    <FoodList />
                    {/* {billShown && (
                        <div className="bill-overlay">
                            <BillBoard
                                className="bill"
                                FINAL={FINAL}
                                handleClose={handleClose}
                                handleOrder={handleOrder}
                                handleCancel={handleCancel}
                                handleOrderSent={handleOrderSent}
                            />
                        </div>
                    )} */}
                </div>
            </div>
        </UserContext.Provider>
    );
};

export default App;
