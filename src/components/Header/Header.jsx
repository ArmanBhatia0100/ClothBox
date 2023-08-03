import "./Header.scss";
import { useDispatch } from "react-redux";
import { logout } from "../../store/AuthSlice";
import { Link } from "react-router-dom";

export default function Header() {
  const dispatch = useDispatch();
  return (
    <div className="nav">
      <div className="nav-header">
        <div class="nav-title">ClothSHoop</div>
      </div>
      <div className="nav-links">
        <Link className="nav-link" to="/">
          Home
        </Link>
        <Link className="nav-link" to="/contractor">
          Contractor
        </Link>
        <Link className="nav-link" to="/cart">
          Cart
        </Link>
        <button
          className="close btn-logout"
          type="button"
          onClick={() => {
            window.localStorage.setItem("loggedIn", false);
            dispatch(logout());
          }}
        >
          Logout
        </button>
      </div>
    </div>
  );
}
