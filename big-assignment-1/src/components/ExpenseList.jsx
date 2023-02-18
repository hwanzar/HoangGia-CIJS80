import React from "react";

const List = [
    { id: "1", date: "16-02-2022", title: "Some Book", price: 75 },
    { id: "2", date: "11-02-2023", title: "Electric Bill", price: 75 },
    { id: "3", date: "12-33-3232", title: "New bike", price: 100 },
];
const ExpenseList = () => {
    return (
        <div>
            <div className="container">
                {List.map((Item) => {
                    return (
                        <div className="list-items">
                            <div className="item-date">{Item.date}</div>
                            <div className="item-title">{Item.title}</div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};
export default ExpenseList;
