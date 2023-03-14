import React, { useEffect, useState } from "react";
import axios from "axios";
import Food from "./Food";
const FoodList = () => {
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
    }, []);

    return (
        <div>
            {meals.map((meal) => (
                <Food key={meal.id} meal={meal} />
            ))}
        </div>
    );
};

export default FoodList;
