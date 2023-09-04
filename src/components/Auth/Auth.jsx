import React, { useRef, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../store/AuthSlice";

import "./Auth.scss";

import { Input, Button, Stack } from "@mui/material";
import { Card, Typography } from "@mui/joy";

const owner = {
  name: "Arman",
  role: "admin",
  password: "admin@123",
};

export default function Auth() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    if (username === owner.name && password === owner.password) {
      dispatch(login());
      window.localStorage.setItem("loggedIn", true);
    } else {
      alert("email or password incorrect try again");
      window.localStorage.setItem("loggedIn", false);
    }
    setUsername("");
    setPassword("");
  };
  return (
    <div className="authContainer">
      <Card variant="outlined" sx={{ minWidth: "400px", padding: "3rem 3rem" }}>
        <Typography sx={{ color: "grey" }} level="h3" mb="1.5rem">
          Cloth Box
        </Typography>
        <form className="form_control" action="" onSubmit={loginHandler}>
          <Stack spacing={2}>
            <Input
              type="text"
              variant="soft"
              placeholder="Username"
              size="small"
              onChange={(e) => {
                setUsername(() => e.target.value);
              }}
            />
            <Input
              type="password"
              variant="soft"
              placeholder="Password"
              size="small"
              onChange={(e) => {
                setPassword(() => e.target.value);
              }}
            />
            <Button
              sx={{ width: "100%" }}
              variant="contained"
              size="medium"
              type="submit"
            >
              Login
            </Button>
            <Typography level="h6">
              username:"Arman" password:"admin@123"
            </Typography>
          </Stack>
        </form>
      </Card>
    </div>
  );
}
