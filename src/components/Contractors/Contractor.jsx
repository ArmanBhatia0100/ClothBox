import Header from "../Header/Header";
import ContractorCard from "./ContractorCard/ContractorCard";

import "./Contractor.scss";
import { useSelector } from "react-redux";

export default function Contractor() {
  const contractorsList = useSelector((state) => state.contractors.assignItems);
  console.log(contractorsList.length);
  return (
    <div className="contractor">
      <Header></Header>
      <section className="contractor-container">
        {contractorsList.length > 0
          ? contractorsList.map((contractor) => {
              return <ContractorCard contractor={contractor}></ContractorCard>;
            })
          : null}
      </section>
    </div>
  );
}
