import "./Card.scss";
import { useRef } from "react";
import { addTocart, removeFromCart } from "../../store/CartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Card({ id, name, price, qty }) {
  const dispatch = useDispatch();
  const qtyRef = useRef();

  return (
    <div class="example-1 card">
      <div class="wrapper">
        <div class="data">
          <div class="content">
            <span class="author ItemName"> {name}</span>
            <p class="text">Price : ${price}</p>
            <label htmlFor="">Qty</label>
            <input
              className="cardText-qty"
              ref={qtyRef}
              type="number"
              step="1"
              min="0"
              defaultValue={qty}
            />
            <button
              className="addToCartBtn"
              type="button"
              onClick={() => {
                dispatch(addTocart({ name, price, qty: qtyRef.current.value }));
                qtyRef.current.value = 0;
              }}
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>

    // <div className="card-container">
    //   <img
    //     className="cardImg"
    //     src="https://dummyimage.com/100x100/000/fff&text=Image"
    //     alt=""
    //   />
    //   <p className="cardtext">
    //     <span className="cardText-title">Name: </span>
    //     {name}
    //   </p>
    //   <p className="cardtext">
    //     <span className="cardText-title">Price: </span>${price}
    //   </p>
    //   <div>
    //     <label htmlFor="">Qty</label>
    //     <input
    //       className="cardText-qty"
    //       ref={qtyRef}
    //       type="number"
    //       step="1"
    //       min="0"
    //       defaultValue={qty}
    //     />
    //     <button
    //       className="addToCartBtn"
    //       type="button"
    //       onClick={() => {
    //         dispatch(addTocart({ name, price, qty: qtyRef.current.value }));
    //         qtyRef.current.value = 0;
    //       }}
    //     >
    //       Add to Cart
    //     </button>
    //   </div>
    // </div>
  );
}

{
  /* <div class="example-1 card">
  <div class="wrapper">
    <div class="date">
      <span class="day">12</span>
      <span class="month">Aug</span>
      <span class="year">2016</span>
    </div>
    <div class="data">
      <div class="content">
        <span class="author ItemName"> {name}</span>
        <h1 class="title">
          <a href="#">Boxing icon has the will for a couple more fights</a>
        </h1>
        <p class="text">Price : ${price}</p>
      </div>
    </div>
  </div>
</div>; */
}
