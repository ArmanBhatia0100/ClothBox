import { useDispatch, useSelector } from "react-redux";
import { itemReceived } from "../../../store/ContractorSlice";
import { useRef } from "react";
import AssignItem from "./assignItem";

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

// ! --------------------------------------------------------------------
// ? These are the cards which is rendring the list of all the items asssign to a perticular contractor

const ItemDetail = ({ itemDetails }) => {
  const contractorsDetails = useSelector(
    (state) => state.contractors.contractorDetails
  );
  return (
    <div className="item_details_container">
      <div className="contractors-name-phone">
        <div>
          <span className="profile_lable" style={{ fontWeight: 600 }}>
            Name:
          </span>
          <span> {contractorsDetails.name}</span>
        </div>
        <div>
          <span className="profile_lable" style={{ fontWeight: 600 }}>
            Phone:
          </span>
          <span> {contractorsDetails.phone}</span>
        </div>
      </div>
      <div className="Items_container">
        {contractorsDetails.itemsInCart.length != 0 ? (
          itemDetails.map((item, index) => {
            return (
              <AssignItem
                key={index}
                item={item}
                contractorsDetails={contractorsDetails}
              />
            );
          })
        ) : (
          <h1 style={{ margin: "2rem", fontWeight: 600 }}>No Items Assigned</h1>
        )}
      </div>
    </div>
  );
};

export default ContractorDetails;
