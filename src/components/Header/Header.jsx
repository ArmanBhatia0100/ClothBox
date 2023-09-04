import "./Header.scss";
import { useDispatch } from "react-redux";
import { logout } from "../../store/AuthSlice";

import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import { Stack } from "@mui/material";
import { Typography, Button } from "@mui/joy";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

export default function Header() {
  const dispatch = useDispatch();
  return (
    <AppBar position="static">
      <Toolbar>
        <Stack
          spacing={3}
          direction="row"
          sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
          }}
        >
          <Typography level="h3" sx={{ color: "##f50057" }}>
            ClothShop
          </Typography>
          <Link
            component={RouterLink}
            to="/"
            sx={{
              color: "White",
              fontWeight: 500,
            }}
          >
            Home
          </Link>
          <Link
            component={RouterLink}
            to="/contractor"
            sx={{
              color: "White",
              fontWeight: 500,
            }}
          >
            Contractor
          </Link>
          <Link
            component={RouterLink}
            to="/cart"
            sx={{
              color: "White",
              fontWeight: 500,
            }}
          >
            Cart
          </Link>
          <Button
            color="primary"
            onClick={() => {
              window.localStorage.setItem("loggedIn", false);
              dispatch(logout());
            }}
          >
            Logout
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>

    // <div className="nav">
    //   <div className="nav-header">
    //     <div class="nav-title">ClothSHoop</div>
    //   </div>
    //   <div className="nav-links">
    //     <Link className="nav-link" to="/">
    //       Home
    //     </Link>
    //     <Link className="nav-link" to="/contractor">
    //       Contractor
    //     </Link>
    //     <Link className="nav-link" to="/cart">
    //       Cart
    //     </Link>
    //     <button
    //       className="close btn-logout"
    //       type="button"
    //       onClick={() => {
    //         window.localStorage.setItem("loggedIn", false);
    //         dispatch(logout());
    //       }}
    //     >
    //       Logout
    //     </button>
    //   </div>
    // </div>
  );
}
