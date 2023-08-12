import { Link } from "react-router-dom";
import "./ContractorsBanner.scss";
import { useRef, useState } from "react";
import { addContractor } from "../../../store/ContractorSlice";
import { useDispatch, useSelector } from "react-redux";

export default function ContractsBanner() {
  // Used the ref to fecth the input data
  const nameRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const referedByRef = useRef(null);
  const homeAddressRef = useRef(null);
  const messageRef = useRef(null);

  const dispatch = useDispatch();
  const contractorList = useSelector(
    (state) => state.contractors.constractorsList
  );

  const addContractorHandler = (e) => {
    e.preventDefault();
    dispatch(
      addContractor({
        name: nameRef.current.value,
        Phone: phoneNumberRef.current.value,
        ReferedBy: referedByRef.current.value,
        Address: homeAddressRef.current.value,
        message: messageRef.current.value,
      })
    );
    nameRef.current.value =
      phoneNumberRef.current.value =
      referedByRef.current.value =
      homeAddressRef.current.value =
      messageRef.current.value =
        "";
  };
  console.log(contractorList);
  return (
    <div class="contractorFormcontainer">
      <form id="contact" onSubmit={addContractorHandler}>
        <h3>Add Contractor</h3>
        <fieldset>
          <input
            ref={nameRef}
            placeholder="Your name"
            type="text"
            required
          ></input>
        </fieldset>
        <fieldset>
          <input
            ref={phoneNumberRef}
            placeholder="Your Phone Number"
            type="tel"
            required
          ></input>
        </fieldset>
        <fieldset>
          <input
            ref={referedByRef}
            placeholder="Refered By"
            type="text"
            required
          ></input>
        </fieldset>
        <fieldset>
          <input
            ref={homeAddressRef}
            placeholder="Your address"
            type="text"
            required
          ></input>
        </fieldset>
        <fieldset>
          <textarea
            ref={messageRef}
            placeholder="Type your Message Here...."
            required
          ></textarea>
        </fieldset>
        <fieldset>
          <button name="submit" type="submit" id="contact-submit">
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}
