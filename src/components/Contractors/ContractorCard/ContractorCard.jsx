import { useSelector, useDispatch } from "react-redux";
import {
  findContractorDetails,
  deleteContractor,
  itemReceived,
} from "../../../store/ContractorSlice";
import "./ContractorCard.scss";
import { useState } from "react";

export default function ContractorCard({ contractorsList }) {
  const [showList, setShowList] = useState(false);
  const getTheshowlistHandler = (value) => {
    setShowList(() => value);
  };

  return (
    <div className="contractorCard_container">
      {/* This Containes the contractor's cards */}
      <ContractorOverview
        showListCardHandler={getTheshowlistHandler}
        contractorsAssignmentList={contractorsList}
      />
      <ContractorDetails showItemsList={showList} />
    </div>
  );
}

// ! This is the overview card on the left side.
const ContractorOverview = ({
  showListCardHandler,
  contractorsAssignmentList,
}) => {
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
                  showListCardHandler(false);
                }}
              >
                Contractor Info
              </button>
              <button
                className="btn infoBtn"
                type="button"
                onClick={() => {
                  dispatch(findContractorDetails(contractor.id));
                  showListCardHandler(true);
                }}
              >
                Item details
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

// ! This is the details card on the right side
const ContractorDetails = ({ showItemsList }) => {
  const dispatch = useDispatch();
  const contractorsDetails = useSelector(
    (state) => state.contractors.contractorDetails
  );

  return (
    <div className="contractor_details--container">
      <div className="wrapper">
        {/* This is the profile photo section */}
        <div className="profile_info">
          <div className="profile_photo">
            <img src="./images/avataaars.png" alt="" />
          </div>
          {!showItemsList ? (
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
                  <div>{contractorsDetails.message}</div>
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
          ) : (
            <ItemDetail itemDetails={contractorsDetails.itemsInCart} />
          )}
        </div>
      </div>
    </div>
  );
};

// ! This is the list of items in contractors name.

const ItemDetail = ({ itemDetails }) => {
  const dispatch = useDispatch();
  const contractorsDetails = useSelector(
    (state) => state.contractors.contractorDetails
  );

  // This {ItemDeatils is an array of obj [{}]}
  return (
    <div className="item_details_container">
      <div className="contractors-name-phone">
        <div>
          <span className="profile_lable" style={{ fontWeight: 600 }}>
            Name:
          </span>
          <span> Arman Bhatia</span>
        </div>
        <div>
          <span className="profile_lable" style={{ fontWeight: 600 }}>
            Phone:
          </span>
          <span> 514-448-5939</span>
        </div>
      </div>
      <div className="Items_container">
        {/* This is the item */}
        {itemDetails.map((item) => {
          return (
            <div className="item">
              <div className="date">23/08/23</div>
              <div>
                {item.name} X {item.qty}
              </div>
              <input
                type="number"
                steps="1"
                max={item.qty}
                min="0"
                name=""
                placeholder="enter the products you recieved"
              />
            </div>
          );
        })}
      </div>
      <div className="actionBtn-received">
        <button
          type="button"
          onClick={() => {
            dispatch(
              itemReceived({
                contractorid: contractorsDetails.id,
                name: "Item0",
              })
            );
          }}
        >
          Submit
        </button>
      </div>
    </div>
  );
};
