import logo from "./logo.svg";
import React from "react";
import "./App.css";

const Counter = () => {
    const [count, setCount] = useState(0);

    const onIncrease = () => {
        setCount(count + 1);
    };

    return ()
};
function App() {
    let [amountState, setAmountState] = React.useState(() => {
        return 10;
    });
    const handleIncrease = (event) => {
        console.log("handleIncrease ", amountState);
        setAmountState(amountState + 1);
    };

    console.log("amountState ", amountState);
    return (
        <div className="App">
            <h1>Learn React</h1>

            <div className="mt-4">
                {/* <div className="h1">{amountState}</div>
                <button className="btn btn-info" onClick={handleIncrease}>
                    {" "}
                    Increase Amount
                </button> */}
                <Counter />
            </div>
        </div>
    );
}

export default App;
