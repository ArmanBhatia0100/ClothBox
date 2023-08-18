import React from "react";

import "./Cart.scss";
import Header from "../Header/Header";
import { useSelector, useDispatch } from "react-redux";
import { assignItems } from "../../store/ContractorSlice";

import { removeFromCart } from "../../store/CartSlice";

export default function Cart() {
  const cartItems = useSelector((state) => state.cartItems);
  const contractorsList = useSelector(
    (state) => state.contractors.contractorsList
  );

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
            {contractorsList.map(function (contractor, index) {
              return (
                <div key={index} className="contractor_card">
                  <h2>{contractor.name}</h2>
                  <button
                    type="button"
                    onClick={() => {
                      dispatch(
                        assignItems({
                          id: contractor.id,
                          name: contractor.name,
                          phone: contractor.phone,
                          address: contractor.address,
                          referedby: contractor.referedBy,
                          message: contractor.message,
                          itemsInCart: cartItems.items,
                        })
                      );
                      dispatch(removeFromCart());
                    }}
                  >
                    Assign
                  </button>
                </div>
              );
            })}
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
