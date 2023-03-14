import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useRef, useEffect } from "react";
const useHover = () => {
    const [isHover, setHover] = useState(false);
    const elemRef = useRef();

    useEffect(() => {
        const elem = elemRef.current;
        const handleMouseenter = () => {
            setHover(true);
        };
        const handleMouseleave = () => {
            setHover(false);
        };

        elem.addEventListener("mouseenter", handleMouseenter);
        elem.addEventListener("mouseleave", handleMouseleave);
        return () => {
            elem.removeEventListener("mouseenter", handleMouseenter);
            elem.removeEventListener("mouseleave", handleMouseleave);
        };
    }, []);

    return [elemRef, isHover];
};

const App = () => {
    const [input1, setInput1] = useState("");
    const [input2, setInput2] = useState("");

    const onChangeInput1 = (event) => {
        setInput1(event.target.value);
    };
    const onChangeInput2 = (event) => {
        setInput2(event.target.value);
    };
    const [elemRef, isHover] = useHover();

    const onMouseEnter = () => {
        isHover(true);
    };
    const onMouseLeave = () => {
        isHover(false);
    };

    return (
        <>
            <div
                ref={elemRef}
                style={{ width: 100, height: 100, border: "1px solid black" }}
            >
                <input
                    type="text"
                    value={input1}
                    onChange={onChangeInput1}
                ></input>
                {isHover ? "Hovering" : " Not Hovering"}
                <input
                    type="text"
                    value={input2}
                    onChange={onChangeInput2}
                ></input>
            </div>
        </>
    );
};

export default App;
