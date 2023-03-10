import Card from "../UI/Card";
import classes from "./AvailableMeals.module.css";
import MealItem from "./MealItem/MealItem";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Tuna Fry",
    description: "Finest fish and veggies",
    price: 522.99,
  },
  {
    id: "m2",
    name: "Litti Chokha",
    description: "A Bihar specialty!",
    price: 80.0,
  },
  {
    id: "m3",
    name: "Barbecue Chicken",
    description: "American, raw, meaty",
    price: 212.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 318.99,
  },
];

const AvailableMeals = () => {
  const mealItem = DUMMY_MEALS.map((meal) => {
    return (
      <MealItem
        key={meal.id}
        id ={meal.id}
        name={meal.name}
        description={meal.description}
        price={meal.price}
      />
    );
  });

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealItem}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
