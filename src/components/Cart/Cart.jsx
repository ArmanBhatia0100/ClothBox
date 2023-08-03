import React from "react";

import Card from "../Cards/Card";
import "./Cart.scss";
import Header from "../Header/Header";
import { useSelector, useDispatch } from "react-redux";
import { assignItems } from "../../store/ContractorSlice";

import { removeFromCart } from "../../store/CartSlice";

export default function Cart() {
  const cartItems = useSelector((state) => state.cartItems);
  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Header />
      <div className="modal">
        <div className="cartItems_container">
          {cartItems.items.map((item, index) => {
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
              <button
                type="button"
                onClick={() => {
                  dispatch(
                    assignItems({ name: "Arman", itemsInCart: cartItems.items })
                  );
                  dispatch(removeFromCart());
                }}
              >
                Assign
              </button>
            </div>
            <div className="contractor_card">
              <h2>Tanish</h2>
              <button
                type="button"
                onClick={() => {
                  dispatch(
                    assignItems({
                      name: "Tanish",
                      itemsInCart: cartItems.items,
                    })
                  );
                  dispatch(removeFromCart());
                }}
              >
                Assign
              </button>
            </div>
            <div className="contractor_card">
              <h2>Arman</h2>
              <button
                type="button"
                onClick={() => {
                  dispatch(
                    assignItems({ name: "Karan", itemsInCart: cartItems.items })
                  );
                  dispatch(removeFromCart());
                }}
              >
                Assign
              </button>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

const CartCard = ({ name, price, qty }) => {
  return (
    <div class="example-1 card" style={{ width: "40%" }}>
      <div class="wrapper">
        <div class="data">
          <div class="content">
            <span class="author ItemName"> {name}</span>
            <p class="text">Price : ${price}</p>
            <p class="text">Qty : {qty}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
