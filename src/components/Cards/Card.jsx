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
        <span className="cardText-title">Qty</span>
        <input
          className="cardText-qty"
          type="number"
          step="1"
          min="0"
          defaultValue="0"
        />
        <button>Add to Cart</button>
      </div>
    </div>
  );
}
