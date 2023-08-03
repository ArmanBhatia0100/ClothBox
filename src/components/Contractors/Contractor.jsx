import Header from "../Header/Header";
import ContractorCard from "./ContractorCard/ContractorCard";
import ContractsBanner from "./ContractorsBanner/ContractorBanner";
import { useState } from "react";
import "./Contractor.scss";
import { useSelector } from "react-redux";

export default function Contractor() {
  const [addContractor, setAddContractor] = useState(false);
  const contractorsList = useSelector((state) => state.contractors.assignItems);
  return (
    <div className="contractor">
      <Header></Header>
      <div className="contractor_subMenu">
        <button
          className="addContractorBtn"
          type="button"
          onClick={() => setAddContractor(() => !addContractor)}
        >
          Add Contractor
        </button>
      </div>

      {addContractor ? (
        <ContractsBanner />
      ) : (
        <section className="contractor-container">
          {contractorsList.length > 0
            ? contractorsList.map((contractor) => {
                return (
                  <ContractorCard contractor={contractor}></ContractorCard>
                );
              })
            : null}
        </section>
      )}
    </div>
  );
}
