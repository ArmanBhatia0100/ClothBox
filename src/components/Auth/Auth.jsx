import React, { useRef, useState } from "react";
import "./Auth.scss";
import { useSelector, useDispatch } from "react-redux";
import { login } from "../../store/AuthSlice";
import { Input, Button } from "@mui/material";

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
      <div className="authComponent_container">
        <h1 className="title">Cloth Box</h1>
        <form className="form_control" action="" onSubmit={loginHandler}>
          <div className="actionControl_container">
            <Input
              type="text"
              variant="soft"
              placeholder="username"
              size="small"
              onChange={(e) => {
                setUsername(() => e.target.value);
              }}
            />
          </div>
          <div className="actionControl_container">
            <Input
              type="password"
              variant="soft"
              placeholder="password"
              size="small"
              onChange={(e) => {
                setPassword(() => e.target.value);
              }}
            />
          </div>
          <div className="actionControl_container">
            <Button size="medium" type="submit">
              Login
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
