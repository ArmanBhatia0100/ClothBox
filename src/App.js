import Auth from "./components/Auth/Auth";
import Home from "./components/Home/Home";
import Cart from "./components/Cart/Cart";
import "./styles.css";
import { useSelector } from "react-redux";

export default function App() {
  const isLoggedIn = useSelector((state) => state.authentication.isLoggedIn);
  return (
    <div className="App">
      {!isLoggedIn ? <Auth /> : <Home />}

      {/* <Cart /> */}
    </div>
  );
}
