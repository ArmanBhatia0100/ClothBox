import Header from "../Header/Header";
import ContractorCard from "./ContractorCard/ContractorCard";
import ContractsBanner from "./ContractorsBanner/ContractorBanner";
import { useState } from "react";
import "./Contractor.scss";
import { useSelector } from "react-redux";

//
export default function Contractor() {
  const [addContractor, setAddContractor] = useState(false);
  const contractorsList = useSelector((state) => state.contractors.assignItems);
  return (
    <div className="contractor">
      <Header></Header>

      {/* Add Contractor button */}
      <div className="contractor_subMenu">
        <button
          className="addContractorBtn"
          type="button"
          onClick={() => setAddContractor(() => !addContractor)}
        >
          Add Contractor
        </button>
      </div>

      {/* Contractor Banner */}
      {addContractor ? (
        <ContractsBanner /> // ! This is the form to add contractor
      ) : (
        <section className="contractor-container">
          <ContractorCard contractorsList={contractorsList}></ContractorCard>
        </section>
      )}
    </div>
  );
}
