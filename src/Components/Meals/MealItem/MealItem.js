import { useContext } from "react";
import classes from "./MealItem.module.css";
import CartContext from "../../../Store/Cart-context";
import MealItemForm from "./MealItemForm";

const MealItem = (props) => {
  const CartCtx = useContext(CartContext);
  const price = `Rs ${props.price.toFixed(2)}/-`;

  const onAddToCartHandler = amount => {
    CartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price
    })
  };
  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <MealItemForm id= {props.id} onAddToCart = {onAddToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;
