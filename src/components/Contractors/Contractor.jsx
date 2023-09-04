import Header from "../Header/Header";
import ContractorCard from "./ContractorCard/ContractorCard";
import ContractsBanner from "./ContractorsBanner/ContractorBanner";
import { useState } from "react";
import "./Contractor.scss";
import { useSelector } from "react-redux";

import { Button } from "@mui/joy";

//
export default function Contractor() {
  const [addContractor, setAddContractor] = useState(false);
  const contractorsList = useSelector((state) => state.contractors.assignItems);
  console.log();
  return (
    <div className="contractor">
      <Header></Header>

      {/* Add Contractor button */}
      <div className="contractor_subMenu">
        <Button
          variant="soft"
          color="danger"
          type="button"
          onClick={() => setAddContractor(() => !addContractor)}
        >
          Add Contractor
        </Button>
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
