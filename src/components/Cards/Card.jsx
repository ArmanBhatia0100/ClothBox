import { useRef, useState } from "react";
import { addTocart, removeFromCart } from "../../store/CartSlice";
import { useDispatch, useSelector } from "react-redux";

import AspectRatio from "@mui/joy/AspectRatio";
import { Card as MuiCard, Input } from "@mui/joy";
import CardContent from "@mui/joy/CardContent";
import CardOverflow from "@mui/joy/CardOverflow";
import Divider from "@mui/joy/Divider";
import Typography from "@mui/joy/Typography";
import { Button } from "@mui/material";

export default function Card({ id, name, price }) {
  const [newQty, setNewQty] = useState("");
  const dispatch = useDispatch();

  return (
    <MuiCard variant="outlined" sx={{ width: 320, margin: ".5rem" }}>
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
        <Typography level="h6">{name}</Typography>
        <Typography level="body-sm">${price}</Typography>
      </CardContent>
      <CardOverflow variant="soft" sx={{ bgcolor: "background.level1" }}>
        <Divider inset="context" />
        <CardContent orientation="horizontal">
          <Input
            type="number"
            variant="standard"
            inputProps={{ min: "10", steps: "2" }}
            value={newQty}
            onChange={(e) => {
              setNewQty(() => e.target.value);
            }}
          ></Input>
          <Divider orientation="vertical" />
          <Button
            type="button"
            variant="contained"
            onClick={() => {
              if (newQty > 0) {
                dispatch(addTocart({ id, name, price, qty: newQty }));
              } else {
                alert("Enter Positive value");
              }
              setNewQty(() => 0);
            }}
          >
            Add
          </Button>
        </CardContent>
      </CardOverflow>
    </MuiCard>
  );
}
