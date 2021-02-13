import React, { Component } from "react";
import { INGREDIENT_PRICES } from "../../App";
import BurgerContext from "../../BurgerContext";
import Burger from "./Burger/Burger";
import Controls from "./Controls/Controls";

interface BurgerMakerProps {}

export default class BurgerMaker extends Component<BurgerMakerProps> {
  static contextType = BurgerContext;
  componentDidMount() {}
  render() {
    // giving ingredients info so i can disable buttons when the item is 0
    const ingredientsPrices = Object.keys(INGREDIENT_PRICES).map((item) => {
      return {
        label: item,
        price: (INGREDIENT_PRICES as any)[item],
        quantity: this.context.ingredients[item],
      };
    });
    return (
      <div className="section">
        <div className="columns is-centered">
          <div className="column is-4 flex-vertically-center ">
            <Burger ingredients={this.context.ingredients} />
          </div>
          <div className="column is-1"></div>
          <div className="column flex-vertically-center is-5 ">
            <Controls
              data={ingredientsPrices}
              totalPrice={this.context.totalPrice}
              add={this.context.addIngredients}
              remove={this.context.removeIngredients}
            />
          </div>
        </div>
      </div>
    );
  }
}
