import logo from "./logo.svg";
import { useContext } from "react";
import { StoreContext } from "./store";
import "./App.css";

function App() {
    const [state, dispatch] = useContext(StoreContext);
    console.log(state);
    return (
        <div className="App">
            <h1>Hello F8</h1>
        </div>
    );
}

export default App;
