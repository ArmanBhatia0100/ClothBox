import { Link } from "react-router-dom";
import "./ContractorsBanner.scss";

export default function ContractsBanner() {
  return (
    <div class="contractorFormcontainer">
      <form id="contact" action="" method="post">
        <h3>Add Contractor</h3>
        <fieldset>
          <input
            placeholder="Your name"
            type="text"
            tabindex="1"
            required
            autofocus
          ></input>
        </fieldset>
        <fieldset>
          <input
            placeholder="Your Phone Number"
            type="tel"
            tabindex="3"
            required
          ></input>
        </fieldset>
        <fieldset>
          <input
            placeholder="Refered By"
            type="text"
            tabindex="4"
            required
          ></input>
        </fieldset>
        <fieldset>
          <input
            placeholder="Your address"
            type="email"
            tabindex="2"
            required
          ></input>
        </fieldset>
        <fieldset>
          <textarea
            placeholder="Type your Message Here...."
            tabindex="5"
            required
          ></textarea>
        </fieldset>
        <fieldset>
          <button
            name="submit"
            type="submit"
            id="contact-submit"
            data-submit="...Sending"
          >
            Submit
          </button>
        </fieldset>
      </form>
    </div>
  );
}
