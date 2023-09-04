import { useDispatch } from "react-redux";
import { itemReceived } from "../../../store/ContractorSlice";
import { useRef } from "react";
import { Button } from "@mui/material";

const AssignItem = ({ item, contractorsDetails }) => {
  const dispatch = useDispatch();
  const itemReceivedRef = useRef(null);

  return (
    <div className="item">
      <div className="date">23/08/23</div>
      <div>{item.name}</div>
      <div>x{item.qty}</div>
      <input
        type="number"
        ref={itemReceivedRef}
        max={item.qty}
        placeholder="received"
      />
      <Button
        color="success"
        type="button"
        onClick={() => {
          if (itemReceivedRef.current.value <= item.qty) {
            dispatch(
              itemReceived({
                contractorid: contractorsDetails.id,
                name: item.name,
                qty: Number(itemReceivedRef.current.value),
              })
            );
            itemReceivedRef.current.value = "";
          } else {
            alert("Change the input value");
            itemReceivedRef.current.value = "";
          }
        }}
      >
        Submit
      </Button>
    </div>
  );
};

export default AssignItem;
