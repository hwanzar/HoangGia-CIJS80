import { useState, useEffect } from "react";

const Counter = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            console.log("update count");
            setCount(count + 1);
        }, 1000);
        return () => {
            clearInterval(timer);
        };
    }, [count]);

    return <div>{count}</div>;
};
export default Counter;
