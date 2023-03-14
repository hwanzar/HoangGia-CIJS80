import React, { useState, useEffect } from "react";

export default function Example() {
    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        setCount(count + 1);
    };
    const handleDecrease = () => {
        setCount(count - 1);
    };
    useEffect(() => {
        document.title = `Count: ${count}`;
    }, [count]);
    return (
        <div>
            <h1>Counter</h1>
            <p>count {count}</p>
            <button onClick={handleIncrease}>+1</button>
            <button onClick={handleDecrease}>-1</button>
        </div>
    );
}
