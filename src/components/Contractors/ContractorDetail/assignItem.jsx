import { useDispatch } from "react-redux";
import { itemReceived } from "../../../store/ContractorSlice";

const AssignItem = ({ item, contractorsDetails }) => {
  const dispatch = useDispatch();
  const itemReceivedRef = useRef(null);
  return (
    <div className="item">
      <div className="date">23/08/23</div>
      <div>
        {item.name} X {item.qty}
      </div>
      <input type="number" />
      <button
        type="button"
        onClick={() => {
          dispatch(
            itemReceived({
              contractorid: contractorsDetails.id,
              name: item.name,
              qty: 1,
            })
          );
        }}
      >
        Submit
      </button>
    </div>
  );
};

export default AssignItem;
