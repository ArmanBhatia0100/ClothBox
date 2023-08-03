import "./ContractorCard.scss";

export default function ContractorCard({ contractor }) {
  return (
    <div className="contractorCard_container">
      <div className="contractorInfo">
        <h1>{contractor.name}</h1>
        <h3>Total Products:{contractor.itemsInCart.length}</h3>
      </div>
      <div className="contratorActionBtnContainer">
        <button className="btn itemDetailsBtn" type="button">
          Item details
        </button>
        <button className="btn infoBtn" type="button">
          Contractor Info
        </button>
      </div>
    </div>
  );
}
