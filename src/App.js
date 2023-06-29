import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import "./styles.css";
import { useSelector } from "react-redux";

export default function App() {
  const isAlreadyLoggedIn = window.localStorage.getItem("loggedIn");
  const isLoggedIn = useSelector((state) => state.authentication.isLoggedIn);

  console.log("reevaluated", isAlreadyLoggedIn, isLoggedIn);
  return (
    <div className="App">
      {isAlreadyLoggedIn && isLoggedIn ? <Home /> : <Auth />}
      {/* <Cart /> */}
    </div>
  );
}
