import React from "react";

const Meal = ({ meal, handleAddToCart }) => {
    return (
        <div className="meal-container ">
            <MealPhoto image={meal.image}></MealPhoto>
            <div className="meal-border">
                <div className="meal-name">{meal.name}</div>
                <div className="fst-italic">{meal.description}</div>
                <div className="fw-bold fs-5 text-primary">${meal.price}</div>
            </div>
            <AddMealForm
                handleSubmit={(e) => handleAddMeal(e, meal.id)}
            ></AddMealForm>
        </div>
    );
};

export default Meal;
