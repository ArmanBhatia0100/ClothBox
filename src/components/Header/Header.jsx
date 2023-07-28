import "./Header.scss";
import { useDispatch } from "react-redux";
import { logout } from "../../store/AuthSlice";
import { Link } from "react-router-dom";

export default function Header() {
  const dispatch = useDispatch();
  return (
    <header className="headerContainer">
      <div className="header_item">
        <Link to="/">Home</Link>
      </div>
      <div className="header_item">
        <Link to="/contractor">Contractors</Link>
      </div>
      <div className="header_item">
        <Link to="/cart">Cart</Link>
      </div>
      <div className="header_item">
        <button
          type="button"
          onClick={() => {
            window.localStorage.setItem("loggedIn", false);
            dispatch(logout());
          }}
        >
          Logout
        </button>
      </div>
    </header>
  );
}
