import "./ContractorsBanner.scss";
import { useRef } from "react";
import { addContractor } from "../../../store/ContractorSlice";
import { useDispatch, useSelector } from "react-redux";

import { Button, Container } from "@mui/material";

export default function ContractsBanner() {
  // Used the ref to fecth the input data
  const nameRef = useRef(null);
  const phoneNumberRef = useRef(null);
  const referedByRef = useRef(null);
  const homeAddressRef = useRef(null);
  const messageRef = useRef(null);

  const dispatch = useDispatch();
  const contractorList = useSelector((state) => {
    return state.contractors.constractorsList;
  });

  const addContractorHandler = (e) => {
    e.preventDefault();
    dispatch(
      addContractor({
        id:
          nameRef.current.value.substr(0, 2) +
          phoneNumberRef.current.value.substr(8, 3),
        name: nameRef.current.value,
        phone: phoneNumberRef.current.value,
        referedBy: referedByRef.current.value,
        address: homeAddressRef.current.value,
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
  return (
    <Container maxWidth="sm">
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
          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
        </fieldset>
      </form>
    </Container>
  );
}
