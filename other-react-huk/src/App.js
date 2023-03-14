import logo from "./logo.svg";
import "./App.css";
import Ref from "./Ref";
import React, { useRef } from "react";
const App = () => {
    const inputRef = useRef(null);

    const handleClick = () => {
        inputRef.current.value = "";
        inputRef.current.focus();
    };

    return (
        <div>
            <input type="text" ref={inputRef} />
            <button onClick={handleClick}>Clear and Focus</button>
        </div>
    );
};

export default App;
