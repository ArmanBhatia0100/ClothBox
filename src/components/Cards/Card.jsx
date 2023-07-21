import "./Card.scss";
import { addTocart, removeFromCart } from "../../store/CartSlice";
import { useDispatch, useSelector } from "react-redux";

export default function Card({ id, name, price, qty }) {
  const dispatch = useDispatch();

  return (
    <div className="card-container">
      <img
        className="cardImg"
        src="https://dummyimage.com/100x100/000/fff&text=Image"
        alt=""
      />
      <p className="cardtext">
        <span className="cardText-title">Name: </span>
        {name}
      </p>
      <p className="cardtext">
        <span className="cardText-title">Price: </span>${price}
      </p>
      <div>
        <label htmlFor="">Qty</label>
        <input
          className="cardText-qty"
          type="number"
          step="1"
          min="0"
          defaultValue={qty}
        />
        <button
          className="addToCartBtn"
          type="button"
          onClick={() => dispatch(addTocart())}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
