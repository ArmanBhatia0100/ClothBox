import ContractorDetails from "../ContractorDetail/ContractorDetails";
import { useSelector, useDispatch } from "react-redux";
import {
  findContractorDetails,
  deleteContractor,
  itemReceived,
} from "../../../store/ContractorSlice";
import "./ContractorCard.scss";
import { useState } from "react";

import { Button, Card } from "@mui/material";

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
      {contractorsAssignmentList.map((contractor, index) => {
        return (
          <Card raised={true} key={index} className="contractor_overview--card">
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
              <Button
                variant="contained"
                size="small"
                sx={{
                  margin: "0.3rem",
                }}
                type="button"
                onClick={() => {
                  dispatch(findContractorDetails(contractor.id));
                  showListCardHandler(false);
                }}
              >
                Contractor Info
              </Button>
              <Button
                variant="contained"
                size="small"
                type="button"
                sx={{
                  margin: "0.3rem",
                }}
                onClick={() => {
                  dispatch(findContractorDetails(contractor.id));
                  showListCardHandler(true);
                }}
              >
                Item details
              </Button>
            </div>
          </Card>
        );
      })}
    </div>
  );
};

// ! This is the details card on the right side
