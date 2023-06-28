import "./Card.scss";

export default function Card() {
  return (
    <div className="card-container">
      <img
        className="cardImg"
        src="https://dummyimage.com/100x100/000/fff&text=Image"
        alt=""
      />
      <p className="cardtext">
        <span className="cardText-title">Name:</span>Item1
      </p>
      <p className="cardtext">
        <span className="cardText-title">Price:</span>$1.99
      </p>
      <div>
        <label htmlFor="">Qty</label>
        <input
          className="cardText-qty"
          type="number"
          step="1"
          min="0"
          defaultValue="0"
        />
        <button className="addToCartBtn" type="button">Add to Cart</button>
      </div>
    </div>
  );
}
