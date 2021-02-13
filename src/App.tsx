import React, { Component, useState } from "react";
import "./App.css";
import "./assets/css/bulma/bulma.css";
import { Route, Switch } from "react-router";
import Home from "./Pages/Home/Home";
import AuthContext, { AuthContextInterface } from "./AuthContext";
import BurgerMaker from "./Pages/BurgerMaker/BurgerMaker";
import BurgerContext, { BurgerContextInterface } from "./BurgerContext";

export const INGREDIENT_PRICES = {
  meat: 0.5,
  salad: 0.9,
  cheese: 1,
  bacon: 1,
};
interface Props {}
class App extends Component<
  Props,
  { burgerState: BurgerContextInterface; authState: AuthContextInterface }
> {
  handleRemoveItem = (ingredient: "bacon" | "meat" | "cheese" | "salad") => {
    const updatedBurgerState = { ...this.state.burgerState };
    updatedBurgerState.ingredients[ingredient] =
      updatedBurgerState.ingredients[ingredient] - 1;
    updatedBurgerState.totalPrice =
      updatedBurgerState.totalPrice - INGREDIENT_PRICES[ingredient];
    this.setState({
      burgerState: updatedBurgerState,
    });
  };
  handleAddIngredient = (ingredient: "bacon" | "meat" | "cheese" | "salad") => {
    const updatedBurgerState = { ...this.state.burgerState };
    updatedBurgerState.ingredients[ingredient] =
      updatedBurgerState.ingredients[ingredient] + 1;
    updatedBurgerState.totalPrice =
      updatedBurgerState.totalPrice + INGREDIENT_PRICES[ingredient];
    this.setState({
      burgerState: updatedBurgerState,
    });
  };
  state = {
    burgerState: {
      ingredients: {
        meat: 1,
        salad: 1,
        cheese: 0,
        bacon: 0,
      },
      totalPrice: 4,
      addIngredients: this.handleAddIngredient,
      removeIngredients: this.handleRemoveItem,
    },
    authState: {
      isAuth: false,
    },
  };

  render() {
    return (
      <AuthContext.Provider value={this.state.authState}>
        <Switch>
          <Route path="/" exact component={Home} />
          {/* BURGER CREATOR ROUTES */}
          <BurgerContext.Provider value={this.state.burgerState}>
            <Route path="/make-your-own-burger" component={BurgerMaker} />
          </BurgerContext.Provider>
        </Switch>
      </AuthContext.Provider>
    );
  }
}

export default App;
