import { createContext } from "react";

export interface BurgerIngredientsInterface {
  meat: number;
  salad: number;
  cheese: number;
  bacon: number;
}
export interface BurgerContextInterface {
  ingredients: BurgerIngredientsInterface;
  totalPrice: number;
  addIngredients: Function;
  removeIngredients: Function;
}

const BurgerContext = createContext<BurgerContextInterface>({
  ingredients: {
    meat: 0,
    salad: 0,
    cheese: 0,
    bacon: 0,
  },
  totalPrice: 4,
  addIngredients: () => {},
  removeIngredients: () => {},
});

export default BurgerContext;
