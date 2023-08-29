import { useDispatch } from "react-redux";
import { itemReceived } from "../../../store/ContractorSlice";
import { useRef } from "react";

const AssignItem = ({ item, contractorsDetails }) => {
  const dispatch = useDispatch();
  const itemReceivedRef = useRef(null);
  console.log(itemReceivedRef);
  return (
    <div className="item">
      <div className="date">23/08/23</div>
      <div>
        {item.name} X {item.qty}
      </div>
      <input type="number" ref={itemReceivedRef} max={item.qty} />
      <button
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
      </button>
    </div>
  );
};

export default AssignItem;
