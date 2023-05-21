import { useContext } from "react";
import classes from "./MealItem.module.css";
import MealItemForm from "./MealItemForm";
import CartContext from "../../../store/cart-context";

const MealItem = (props) => {
  const cartCtx = useContext(CartContext);

  const price = `${+props.price.toFixed(2)}€`;

  const addToCartHandler = (amount) => {
    // const id = Math.floor(Math.random() * 5000) + 1;
    cartCtx.addItem({
      amount,
      id: props.id,
      name: props.name,
      description: props.description,
      price: +props.price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <MealItemForm onAddToCart={addToCartHandler} id={props.id} />
    </li>
  );
};

export default MealItem;
