import "./Header.scss";
import * as React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/AuthSlice";

import Link from "@mui/material/Link";
import { Link as RouterLink } from "react-router-dom";
import { Typography, Button, Stack } from "@mui/joy";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";

const pages = ["Home", "Pricing", "Blog"];
export default function Header() {
  const dispatch = useDispatch();

  const [anchorElNav, setAnchorElNav] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            ClothShop
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              <MenuItem onClick={handleCloseNavMenu}>
                <Link
                  component={RouterLink}
                  to="/"
                  sx={{ border: "none", textDecoration: "none" }}
                >
                  Home
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link
                  component={RouterLink}
                  to="/contractor"
                  sx={{ border: "none", textDecoration: "none" }}
                >
                  Details
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Link
                  component={RouterLink}
                  to="/cart"
                  sx={{ border: "none", textDecoration: "none" }}
                >
                  Cart
                </Link>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <Button
                  color="primary"
                  onClick={() => {
                    window.localStorage.setItem("loggedIn", false);
                    dispatch(logout());
                  }}
                >
                  Logout
                </Button>
              </MenuItem>
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            LOGO
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            <Stack
              spacing={2}
              direction="row"
              sx={{ display: "flex", alignItems: "center" }}
            >
              <Link
                component={RouterLink}
                to="/"
                sx={{ color: "white", border: "none", textDecoration: "none" }}
              >
                Home
              </Link>
              <Link
                component={RouterLink}
                to="/contractor"
                sx={{ color: "white", border: "none", textDecoration: "none" }}
              >
                Contractor
              </Link>
              <Link
                component={RouterLink}
                to="/cart"
                sx={{ color: "white", border: "none", textDecoration: "none" }}
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
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );

  // -------------------------------
  // <AppBar position="static">
  //   <Toolbar>
  //     <Stack
  //       spacing={3}
  //       direction="row"
  //       sx={{
  //         display: "flex",
  //         flexDirection: "row",
  //         alignItems: "center",
  //       }}
  //     >
  //       <Typography level="h3" sx={{ color: "##f50057" }}>
  //         ClothShop
  //       </Typography>
  //       <Link
  //         component={RouterLink}
  //         to="/"
  //         sx={{
  //           color: "White",
  //           fontWeight: 500,
  //         }}
  //       >
  //         Home
  //       </Link>
  //       <Link
  //         component={RouterLink}
  //         to="/contractor"
  //         sx={{
  //           color: "White",
  //           fontWeight: 500,
  //         }}
  //       >
  //         Contractor
  //       </Link>
  //       <Link
  //         component={RouterLink}
  //         to="/cart"
  //         sx={{
  //           color: "White",
  //           fontWeight: 500,
  //         }}
  //       >
  //         Cart
  //       </Link>
  // <Button
  //   color="primary"
  //   onClick={() => {
  //     window.localStorage.setItem("loggedIn", false);
  //     dispatch(logout());
  //   }}
  // >
  //   Logout
  // </Button>
  //     </Stack>
  //   </Toolbar>
  // </AppBar>

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
  // <button
  //   className="close btn-logout"
  //   type="button"
  //   onClick={() => {
  //     window.localStorage.setItem("loggedIn", false);
  //     dispatch(logout());
  //   }}
  // >
  //   Logout
  // </button>
  //   </div>
  // </div>
}
