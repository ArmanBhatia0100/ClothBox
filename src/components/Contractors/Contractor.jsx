import Header from "../Header/Header";
import ContractorCard from "./ContractorCard/ContractorCard";

import "./Contractor.scss";
import { useSelector } from "react-redux";

export default function Contractor() {
  const contractorsList = useSelector((state) => state.contractors.assignItems);
  const test = useSelector((state) => state.contractors.test);
  console.log(contractorsList);
  console.log("This is test", test);
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
