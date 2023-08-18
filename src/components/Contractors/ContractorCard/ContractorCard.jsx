import "./ContractorCard.scss";

export default function ContractorCard({ contractorsList }) {
  console.log(contractorsList);
  return (
    <div className="contractorCard_container">
      {/* This Containes the contractor's cards */}
      <ContractorOverview contractorsList={contractorsList} />
      <ContractorDetails />
    </div>
  );
}

const ContractorOverview = ({ contractorsList }) => {
  return (
    <div className="contractor_overview--container">
      {contractorsList.map((contractor) => {
        return (
          <div className="contractor_overview--card">
            <div className="contractorInfo" style={{ textAlign: "left" }}>
              <h1>
                <span style={{ fontWeight: 600 }}>Name:</span>
                {contractor.name}
              </h1>
              <h3>
                <span style={{ fontWeight: 600 }}>Total Products:</span>
                {contractor.itemsInCart.length}
              </h3>
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
      })}
    </div>
  );
};

const ContractorDetails = () => {
  return (
    <div className="contractor_details--container">
      <div className="profile_info">
        <div className="profile_photo">
          <img src="./images/avataaars.png" alt="" />
        </div>
        <div className="profile_details">
          <div className="section-left">
            <div>
              <span className="profile_lable">Name: </span>
              <span>Arman</span>
            </div>
            <div>
              <span className="profile_lable">ReferedBy: </span>
              <span>Karan Deep</span>
            </div>
            <div>
              <span className="profile_lable">Address: </span>
              <span>Abc city,ON,CA</span>
            </div>
            <div>
              <span className="profile_lable">Message: </span>
              <span>
                He is a good contractor He is a good contractorHe is a good
                contractor He is a good contractor He is a good contractor
              </span>
            </div>
          </div>
          <div className="section-right">
            <div>
              <span className="profile_lable">Phone: </span>
              <span>5144485939</span>
            </div>
            <div>
              <button className="profile_del--btn" type="button">
                Delete
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
