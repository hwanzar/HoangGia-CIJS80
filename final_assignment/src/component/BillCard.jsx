import React from "react";

function BillCard(props) {
    return (
        <div className="bill-info">
            <div className="bill-info-right">
                <h3>{props.name}</h3>
                <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        gap: "10px",
                    }}
                >
                    <div
                        style={{
                            color: "#802408",
                        }}
                    >
                        {props.price}
                    </div>
                    <div className="bill-price">x{props.amount}</div>
                </div>
            </div>

            <div className="change-button">
                <button onClick={props.onDecrement}> - </button>
                <button onClick={props.onIncrement}> + </button>
            </div>
        </div>
    );
}

export default BillCard;
