import { createContext, useState } from "react";
export const UserContext = createContext({});
export const UserProvider = ({ children }) => {
    const [cartCounter, setCartCounter] = useState(0);
    const [billShown, setBillShown] = useState(false);
    const [cart, setCart] = useState([]);
    const [formShown, setFormShown] = useState(false);
    const [totalMoney, setTotalMoney] = useState(0);
    const [OrderShow, setOrderShow] = useState(false);
    const [isLoadingIn, setIsLoadingIn] = useState(false);
    const [orderSented, setOrderSented] = useState(false);
    return (
        <UserContext.Provider
            value={{
                orderSented,
                setOrderSented,
                isLoadingIn,
                setIsLoadingIn,
                OrderShow,
                setOrderShow,
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
            {children}
        </UserContext.Provider>
    );
};
