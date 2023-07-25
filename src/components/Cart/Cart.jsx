import React from "react";

import Card from "../Cards/Card";
import "./Cart.scss";
import Header from "../Header/Header";
import { UseSelector, useSelector } from "react-redux";

export default function Cart() {
  const cartItems = useSelector((state) => state.cartItems);

  return (
    <React.Fragment>
      <Header />
      <div className="modal">
        <div className="cartItems_container">
          <h1 style={{ textAlign: "left" }}>Cart Item</h1>
          {cartItems.map((item, index) => {
            return (
              <CartCard
                key={index}
                name={item.name}
                qty={item.qty}
                price={item.price}
              />
            );
          })}
        </div>
        <div className="cartContractor_container">
          <div className="search_container">
            <h3>Search for the contrators</h3>
            <input type="search" />
          </div>
          <div className="contractorsList">
            <div className="contractor_card">
              <h2>Arman</h2>
              <button type="button">Assign</button>
            </div>
            <div className="contractor_card">
              <h2>Arman</h2>
              <button type="button">Assign</button>
            </div>
            <div className="contractor_card">
              <h2>Arman</h2>
              <button type="button">Assign</button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const CartCard = ({ name, price, qty }) => {
  return (
    <div className="cartItem_card">
      <p>Name: {name}</p>
      <p>price: ${price}</p>
      <p>Qty: {qty}</p>
    </div>
  );
};
