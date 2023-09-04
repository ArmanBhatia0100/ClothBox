import React from "react";

import "./Cart.scss";
import Header from "../Header/Header";
import { useSelector, useDispatch } from "react-redux";
import { assignItems } from "../../store/ContractorSlice";
import { removeFromCart } from "../../store/CartSlice";

import AspectRatio from "@mui/joy/AspectRatio";
import { Card, Stack, Input } from "@mui/joy";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import Grid from "@mui/material/Grid";
import { Button } from "@mui/material";

export default function Cart() {
  const cartItems = useSelector((state) => state.cartItems);
  const contractorsList = useSelector(
    (state) => state.contractors.contractorsList
  );

  const dispatch = useDispatch();
  return (
    <React.Fragment>
      <Header />
      <Typography level="h2">Items in cart</Typography>
      <div>
        <Grid container spacing={0}>
          <Grid item lg={9}>
            <Stack>
              {cartItems.items.map((item, index) => {
                return (
                  <CartCard
                    key={index}
                    name={item.name}
                    qty={item.qty}
                    price={item.price}
                  />
                );
              })}
            </Stack>
          </Grid>
          <Grid item lg={2}>
            <Card>
              <div>
                <h3>Search for the contrators</h3>
                <Input type="search" size="small" />
              </div>
              {contractorsList.map(function (contractor, index) {
                return (
                  <Stack
                    spacing={2}
                    sx={{
                      maxHeight: "65vh",
                      overflowY: "scroll",
                    }}
                  >
                    <Card sx={{ background: "lightgrey" }} key={index}>
                      <h2>{contractor.name}</h2>
                      <Button
                        size="small"
                        variant="contained"
                        type="button"
                        onClick={() => {
                          dispatch(
                            assignItems({
                              id: contractor.id,
                              name: contractor.name,
                              phone: contractor.phone,
                              address: contractor.address,
                              referedby: contractor.referedBy,
                              message: contractor.message,
                              itemsInCart: cartItems.items,
                            })
                          );
                          dispatch(removeFromCart());
                        }}
                      >
                        Assign
                      </Button>
                    </Card>
                  </Stack>
                );
              })}
            </Card>
          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}

const CartCard = ({ name, price, qty }) => {
  return (
    <Card
      variant="outlined"
      sx={{ width: 320, height: "250px", margin: ".5rem" }}
    >
      <CardOverflow>
        <AspectRatio ratio="2">
          <img
            src="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318"
            srcSet="https://images.unsplash.com/photo-1532614338840-ab30cf10ed36?auto=format&fit=crop&w=318&dpr=2 2x"
            loading="lazy"
            alt=""
          />
        </AspectRatio>
      </CardOverflow>
      <CardContent>
        <Typography level="h3">{name}</Typography>
      </CardContent>
      <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
        <Divider inset="context" />
        <CardContent orientation="horizontal">
          <Typography level="body-md"> ${price}</Typography>
          <Divider orientation="vertical" />
          <Typography level="body-md">Qty: {qty}</Typography>
        </CardContent>
      </CardOverflow>
    </Card>
  );
};
