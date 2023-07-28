import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import "./styles.css";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import Contractor from "./components/Contractors/Contractor";

export default function App() {
  const [isAlreadyLoggedIn, setIsAlreadyLoggedIn] = useState("false");

  useEffect(() => {
    setIsAlreadyLoggedIn(window.localStorage.getItem("loggedIn"));
  }, [isAlreadyLoggedIn]);

  const isLoggedIn = useSelector((state) => state.authentication.isLoggedIn);

  // isAlreadyLoggedIn && isLoggedIn ? <Home /> : <Auth />;
  return (
    <div className="App">
      <Routes>
        <Route
          path="/"
          element={isAlreadyLoggedIn && isLoggedIn ? <Home /> : <Auth />}
        />
        <Route exact path="/cart" element={<Cart />} />
        <Route exact path="/contractor" element={<Contractor />} />
        {/* <Cart /> */}
      </Routes>
    </div>
  );
}
