import { useEffect, useState } from "react";
import axios from "axios";
import FoodItem from "./FoodItem";
import "../styles/FoodList.css";

function FoodList() {
    const [meals, setMeals] = useState([]);

    useEffect(() => {
        axios
            .get("https://625a91bf0ab4013f94a2d9a8.mockapi.io/meals")
            .then((response) => {
                setMeals(response.data);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []); //

    return (
        <div className="list">
            {meals.map((meal) => {
                return (
                    <FoodItem
                        key={meal.id}
                        image={meal.image}
                        name={meal.name}
                        description={meal.description}
                        price={meal.price}
                    />
                );
            })}
        </div>
    );
}

export default FoodList;
