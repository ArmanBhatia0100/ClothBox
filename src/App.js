import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import "./styles.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";

export default function App() {
  const [isAlreadyLoggedIn, setIsAlreadyLoggedIn] = useState("false");

  useEffect(() => {
    setIsAlreadyLoggedIn(window.localStorage.getItem("loggedIn"));
  }, [isAlreadyLoggedIn]);

  const isLoggedIn = useSelector((state) => state.authentication.isLoggedIn);

  console.log("reevaluated", isAlreadyLoggedIn, isLoggedIn);
  return (
    <div className="App">
      {isAlreadyLoggedIn && isLoggedIn ? <Home /> : <Auth />}
      {/* <Cart /> */}
    </div>
  );
}
