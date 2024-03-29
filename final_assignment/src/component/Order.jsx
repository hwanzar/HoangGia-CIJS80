import { useForm } from "react-hook-form";
import axios from "axios";
// import './Order.css'
import { UserContext } from "./UserContext";
import { useContext } from "react";

export default function Order({ handleCancel, handleOrderShow }) {
    const { cart } = useContext(UserContext);
    const { setOrderSented } = useContext(UserContext);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { name, street, postalcode, city } = data;
        const order = {
            name,
            street,
            postalcode,
            city,
            cart,
        };
        axios
            .post("http://localhost:3001/orders", order)
            .then((response) => {
                setOrderSented(true);
                console.log(response);
                /* alert("DONE"); */
                handleOrderShow();
            })
            .catch((error) => {
                console.log(order);
            });
    };

    return (
        <div className="Form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-group">
                    <label
                        style={errors.name && { color: "red" }}
                        htmlFor="name"
                    >
                        Your Name
                    </label>
                    <input
                        style={
                            errors.name && {
                                backgroundColor: "pink",
                                color: "white",
                            }
                        }
                        type="text"
                        id="name"
                        {...register("name", { required: true })}
                    />
                    {errors.name && <span>Please enter a valid name!</span>}
                </div>

                <div className="form-group">
                    <label
                        style={errors.street && { color: "red" }}
                        htmlFor="street"
                    >
                        Street
                    </label>
                    <input
                        style={
                            errors.street && {
                                backgroundColor: "pink",
                                color: "white",
                            }
                        }
                        type="text"
                        id="street"
                        {...register("street", { required: true })}
                    />
                    {errors.street && <span>Please enter a valid street!</span>}
                </div>

                <div className="form-group">
                    <label
                        style={errors.postalcode && { color: "red" }}
                        htmlFor="postalcode"
                    >
                        Postal code
                    </label>
                    <input
                        style={
                            errors.postalcode && {
                                backgroundColor: "pink",
                                color: "white",
                            }
                        }
                        type="text"
                        id="postalcode"
                        {...register("postalcode", {
                            required: true,
                            pattern: /^\d{5}$/,
                        })}
                    />
                    {errors.postalcode && (
                        <span>
                            Please enter a valid postal code ( 5 character long
                            )!
                        </span>
                    )}
                </div>

                <div className="form-group">
                    <label
                        htmlFor="city"
                        style={errors.city && { color: "red" }}
                    >
                        City
                    </label>
                    <input
                        style={
                            errors.city && {
                                backgroundColor: "pink",
                                color: "white",
                            }
                        }
                        type="text"
                        id="city"
                        {...register("city", { required: true })}
                    />
                    {errors.city && <span>Please enter a valid city!</span>}
                </div>
                <button className="orderButton" onClick={handleCancel}>
                    {" "}
                    Cancel{" "}
                </button>
                <button type="submit" className="orderButton">
                    Confirm
                </button>
            </form>
        </div>
    );
}
