import "./Header.scss";
import { useDispatch } from "react-redux";
import { logout } from "../../store/AuthSlice";

export default function Header() {
  const dispatch = useDispatch();
  return (
    <header className="headerContainer">
      <div className="header_item">
        <a href="#">Home</a>
      </div>
      <div className="header_item">
        <a href="#">Contractors</a>
      </div>
      <div className="header_item">
        <a href="#">Cart</a>
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
