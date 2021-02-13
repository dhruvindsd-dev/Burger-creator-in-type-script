import React, { MouseEventHandler } from "react";
import { FaMinus, FaMoneyBill, FaPlus } from "react-icons/fa";
import { INGREDIENT_PRICES } from "../../../App";

interface ControlsProps {
  totalPrice: string;
  add: Function;
  remove: Function;
  data: { label: string; price: number; quantity: number }[];
}

const Controls = ({ totalPrice, add, remove, data }: ControlsProps) => {
  const controls = data.map((item) => (
    <Control
      label={item.label}
      price={item.price}
      quantity={item.quantity}
      add={add.bind(this, item.label)}
      remove={remove.bind(this, item.label)}
      key={item.label}
    />
  ));
  return (
    <div>
      <div className="notification  has-text-centered is-success is-light ">
        <div className="level is-mobile">
          <div className="level-item">
            <FaMoneyBill size={40} />
          </div>
          <div className="level-item">
            <p className="is-size-3">Total : {totalPrice} $ </p>
          </div>
        </div>
      </div>
      {controls}
      <button className="button is-fullwidth is-medium">Order now</button>
    </div>
  );
};
export default Controls;

interface ControlProps {
  label: string;
  price: number;
  quantity: number;
  add: MouseEventHandler<HTMLButtonElement>;
  remove: MouseEventHandler<HTMLButtonElement>;
}
const Control = ({ label, price, quantity, add, remove }: ControlProps) => (
  <div className="notification">
    <div className="level is-mobile">
      <div className="level-item">
        <p className="is-size-4 has-text-weight-semibold">
          {label}
          <span style={{ opacity: "0.7" }} className="is-size-5 ml-3">
            ( ${price} )
          </span>
        </p>
      </div>
      <div className="level-item">
        <div className="buttons is-centered">
          <button
            className="button is-danger is-light is- outlined"
            onClick={remove}
            disabled={quantity === 0}
          >
            <span className="icon">
              <FaMinus />
            </span>
          </button>
          <button
            className="button is-success is-light is-outlined"
            onClick={add}
            disabled={quantity >= 3}
          >
            <span className="icon">
              <FaPlus />
            </span>
          </button>
        </div>
      </div>
    </div>
  </div>
);
