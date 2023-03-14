import React, { useRef } from "react";

function Ref() {
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
}
export default Ref;
