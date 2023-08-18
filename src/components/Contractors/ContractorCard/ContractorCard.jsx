import { useSelector, useDispatch } from "react-redux";
import {
  findContractorDetails,
  deleteContractor,
} from "../../../store/ContractorSlice";
import "./ContractorCard.scss";

export default function ContractorCard({ contractorsList }) {
  return (
    <div className="contractorCard_container">
      {/* This Containes the contractor's cards */}
      <ContractorOverview contractorsAssignmentList={contractorsList} />
      <ContractorDetails />
    </div>
  );
}

const ContractorOverview = ({ contractorsAssignmentList }) => {
  const dispatch = useDispatch();
  return (
    <div className="contractor_overview--container">
      {contractorsAssignmentList.map((contractor) => {
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
              <button
                className="btn itemDetailsBtn"
                type="button"
                onClick={() => {
                  dispatch(findContractorDetails(contractor.id));
                }}
              >
                Contractor Info
              </button>
              <button className="btn infoBtn" type="button">
                Item details
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

const ContractorDetails = () => {
  const dispatch = useDispatch();
  const contractorsDetails = useSelector(
    (state) => state.contractors.contractorDetails
  );

  return (
    <div className="contractor_details--container">
      <div className="wrapper">
        <div className="profile_info">
          <div className="profile_photo">
            <img src="./images/avataaars.png" alt="" />
          </div>
          <div className="profile_details">
            <div className="section-left">
              <div>
                <span className="profile_lable">Name: </span>
                <span>{contractorsDetails.name}</span>
              </div>
              <div>
                <span className="profile_lable">ReferedBy: </span>
                <span>{contractorsDetails.referedBy}</span>
              </div>
              <div>
                <span className="profile_lable">Address: </span>
                <span>{contractorsDetails.address}</span>
              </div>
              <div>
                <span className="profile_lable">Message: </span>
                <span>{contractorsDetails.message}</span>
              </div>
            </div>
            <div className="section-right">
              <div>
                <span className="profile_lable">Phone: </span>
                <span>{contractorsDetails.phone}</span>
              </div>
              <div>
                <button
                  className="profile_del--btn"
                  type="button"
                  onClick={() => {
                    dispatch(deleteContractor(contractorsDetails.id));
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
