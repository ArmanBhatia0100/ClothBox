import React, { useRef } from "react";
import "./Auth.scss";
import { useSelector, useDispatch } from "react-redux";

const owner = {
  name: "Arman",
  role: "admin",
  password: "admin@123",
};

export default function Auth() {
  const authState = useSelector((state) => state.authentication.isLoggedIn);
  const dispatch = useDispatch();

  console.log(authState);
  const usernameRef = useRef();
  const passwordRef = useRef();

  const loginHandler = (e) => {
    e.preventDefault();
    const username = usernameRef.current.value;
    const password = passwordRef.current.value;

    if (username === owner.name && password === owner.password) {
      alert("login");
    } else {
      alert("email or password incorrect");
    }
    usernameRef.current.value = passwordRef.current.value = "";
  };
  return (
    <div className="authContainer">
      <div className="authComponent_container">
        <h1 className="title">Cloth Box</h1>
        <form className="form_control" action="" onSubmit={loginHandler}>
          <div className="actionControl_container">
            <label htmlFor="">Username</label>
            <input type="text" name="" id="" ref={usernameRef} />
          </div>
          <div className="actionControl_container">
            <label htmlFor="">Password</label>
            <input type="password" name="" id="" ref={passwordRef} />
          </div>
          <div className="actionControl_container">
            <button className="actionControl_actionSubmit" type="submit">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
