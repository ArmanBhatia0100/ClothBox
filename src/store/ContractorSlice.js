import { createSlice } from "@reduxjs/toolkit";

const contractorSlice = createSlice({
  name: "contractor",
  initialState: {
    assignItems: [
      {
        id: "Ar39",
        name: "Arman Bhatia",
        phone: 5144485939,
        referedBy: "Happy",
        address: "ABC road",
        message: "Hardworker and honest",
        itemsInCart: [5],
      },
    ],
    contractorsList: [
      {
        id: "Ar39",
        name: "Arman Bhatia",
        phone: 5144485939,
        referedBy: "Happy",
        address: "ABC road",
        message: "Hardworker and honest",
      },
    ],
    contractorDetails: {
      id: "Ar39",
      name: "Arman Bhatia",
      phone: 5144485939,
      referedBy: "Happy",
      address: "ABC road",
      message: "Hardworker and honest",
    },
  },
  reducers: {
    assignItems(state, action) {
      const indexFound = state.assignItems.findIndex(function (item) {
        return item.name === action.payload.name;
      });

      // Index found
      if (indexFound >= 0) {
        state.assignItems[indexFound].itemsInCart.push(
          ...action.payload.itemsInCart
        );
      } else {
        state.assignItems.push(action.payload);
      }
    },
    addContractor(state, action) {
      state.contractorsList.push(action.payload);
    },

    deleteContractor(state, action) {
      // Find in the list of contractors and delete the contractor
      const indexToDelete = state.contractorsList.findIndex(
        (obj) => obj.id == action.payload
      );
      state.contractorsList.splice(indexToDelete, 1);

      // Find in the contractor's products assignment list List and delete the item

      const indexToDeleteAssignedItems = state.assignItems.findIndex(
        (obj) => obj.id == action.payload
      );
      state.assignItems.splice(indexToDeleteAssignedItems, 1);
    },

    findContractorDetails(state, action) {
      const foundContractor = state.contractorsList.find(
        (contractor) => contractor.id == action.payload
      );
      state.contractorDetails = { ...foundContractor };
    },
  },
});

export const {
  assignItems,
  addContractor,
  findContractorDetails,
  deleteContractor,
} = contractorSlice.actions;
export default contractorSlice.reducer;
