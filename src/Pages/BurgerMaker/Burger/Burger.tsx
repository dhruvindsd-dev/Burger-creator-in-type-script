import React from "react";
import { BurgerIngredientsInterface } from "../../../BurgerContext";
import "../burger.css";
interface props {
  ingredients: BurgerIngredientsInterface;
}

const Burger = ({ ingredients }: props) => {
  const burgerIngredients = Object.keys(ingredients).map((ig) =>
    [
      ...Array(ingredients[ig as keyof BurgerIngredientsInterface]),
    ].map((_, i) => <BurgerIngredient type={ig} key={ig + i} />)
  );
  return (
    <div
      className="burger-container"
      style={{ overflowY: "scroll", height: "528px" }}
    >
      <BurgerIngredient type="bread-top" />
      {burgerIngredients}
      <BurgerIngredient type="bread-bottom" />
    </div>
  );
};
export default Burger;

interface BurgerIngredientProps {
  type: string;
}

const BurgerIngredient = ({ type }: BurgerIngredientProps) => {
  let ingredient = null;
  switch (type) {
    case "bread-bottom":
      ingredient = <div className="BreadBottom"></div>;
      break;
    case "bread-top":
      ingredient = (
        <div className="BreadTop">
          <div className="Seeds1"></div>
          <div className="Seeds2"></div>
        </div>
      );
      break;
    case "meat":
      ingredient = <div className="Meat"></div>;
      break;
    case "cheese":
      ingredient = <div className="Cheese"></div>;
      break;
    case "salad":
      ingredient = <div className="Salad"></div>;
      break;
    case "bacon":
      ingredient = <div className="Bacon"></div>;
      break;
    default:
      ingredient = null;
  }
  return ingredient;
};
