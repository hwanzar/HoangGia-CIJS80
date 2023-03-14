import React, { createContext, useState } from "react";
import Header from "./components/FoodList";
import FoodList from "./components/Header";
import WelcomeCard from "./components/WelcomeCard";
import YourCart from "./components/YourCart";
import { UserContext } from "./UserContext";
const App = () => {
    return (
        <div>
            <UserContext.Provider>
                <Header />
                <WelcomeCard />
                <div className="menu">
                    <FoodList />
                </div>
            </UserContext.Provider>
        </div>
    );
};

export default App;
