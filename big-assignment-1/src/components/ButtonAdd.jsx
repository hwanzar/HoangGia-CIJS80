import { useState } from "react";

const ButtonAdd = () => {
    const [showForm, setShowForm] = useState(false);
    const [list, setList] = useState([]);
    const handleButtonClick = () => {
        setShowForm(true);
    };

    const [formData, setFormData] = useState({
        name: "",
        amount: "",
        date: "",
    });

    const handleSubmit = (event) => {
        event.preventDefault();
    };

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevState) => ({ ...prevState, [name]: value }));
    };

    const handleCancel = () => {
        setShowForm(false);
    };

    const handleAdd = () => {
        setList([...list, formData]);
        setFormData({});
        setShowForm(false);
    };

    let show = null;
    if (!showForm) {
        show = (
            <div className="button-container">
                <button className="button-expense" onClick={handleButtonClick}>
                    ADD NEW EXPENSE
                </button>
            </div>
        );
    } else if (showForm) {
        show = (
            <div className="adder-container">
                <form onSubmit={handleSubmit}>
                    <div className="submit-info">
                        <label className="adder-label">
                            Name:
                            <input
                                className="adder-input"
                                type="text"
                                name="name"
                                value={formData.name}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <label className="adder-label">
                            Amount:
                            <input
                                className="adder-input"
                                type="text"
                                name="amount"
                                value={formData.amount}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                        <label className="adder-label">
                            Date:
                            <input
                                className="adder-input"
                                type="date"
                                name="date"
                                value={formData.date}
                                onChange={handleInputChange}
                            />
                        </label>
                        <br />
                    </div>
                    <div className="option-container">
                        <button
                            className="option-button-adder"
                            type="submit"
                            onClick={handleAdd}
                        >
                            ADD
                        </button>
                        <button
                            className="option-button-cancel"
                            type="button"
                            onClick={handleCancel}
                        >
                            CANCEL
                        </button>
                    </div>
                </form>
            </div>
        );
    }
    return <div>{show}</div>;
};

export default ButtonAdd;
