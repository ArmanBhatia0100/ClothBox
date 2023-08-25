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
        itemsInCart: [
          {
            name: "Item0",
            price: 50,
            qty: "4",
          },
          {
            name: "Item1",
            price: 50,
            qty: "5",
          },
          {
            name: "Item0",
            price: 50,
            qty: "4",
          },
        ],
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

      // Delete the details cards and add the default.

      state.contractorDetails = {
        id: "xxx",
        name: "xxx",
        phone: 123,
        referedBy: "xxx",
        address: "xxx",
        message: "xxx",
      };
    },

    findContractorDetails(state, action) {
      const foundContractor = state.assignItems.find(
        (contractor) => contractor.id == action.payload
      );
      state.contractorDetails = { ...foundContractor };
    },
    itemReceived(state, action) {
      const contractorIndex = state.assignItems.findIndex(
        (contractor) => contractor.id == action.payload.contractorid
      );

      const itemIndex = state.assignItems[
        contractorIndex
      ].itemsInCart.findIndex((item) => item.name == action.payload.name);

      state.assignItems[contractorIndex].itemsInCart.splice(itemIndex, 1);
    },
  },
});

export const {
  assignItems,
  addContractor,
  findContractorDetails,
  deleteContractor,
  itemReceived,
} = contractorSlice.actions;
export default contractorSlice.reducer;
