import React from "react";

import Card from "../Cards/Card";
import "./Cart.scss";
import Header from "../Header/Header";

export default function Cart() {
  return (
    <React.Fragment>
      <Header />
      <div className="modal">
        <div className="cartItems_container">
          <h1 style={{ textAlign: "left" }}>Cart Item</h1>
          <div className="cartItem_card">
            <p>Name: Item1</p>
            <p>price:1.99</p>
            <p>Qty:3</p>
          </div>

          <div className="cartItem_card">
            <p>Name: Item1</p>
            <p>price:1.99</p>
            <p>Qty:3</p>
          </div>
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
