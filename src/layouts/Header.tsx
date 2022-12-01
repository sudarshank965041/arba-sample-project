import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Badge from "@mui/material/Badge";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { carts } = useSelector((state: any) => state.cartItems);
  const [total, setTotal] = React.useState(0);
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const isMenuOpen = Boolean(anchorEl);
  const handleProfileMenuOpen = (event: any) => {
    setAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  const navigate = useNavigate();

  const handleLogout = (e: any) => {
    localStorage.clear();
    window.location.reload();
  };

  React.useEffect(() => {
    if (carts && Object.entries(carts).length) {
      let count = 0;
      for (const key in carts) {
        if (Object.prototype.hasOwnProperty.call(carts, key)) {
          count += +carts[key];
        }
      }
      setTotal(count);
    } else{
      setTotal(0)
    }
  }, [carts]);

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "right",
      }}
      id={menuId}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleLogout}>Logout</MenuItem>
      <MenuItem
        onClick={(e) => {
          navigate("/profile");
          handleMenuClose();
        }}
      >
        Profile
      </MenuItem>
      <MenuItem
        onClick={(e) => {
          navigate("/code-challenge");
          handleMenuClose();
        }}
      >
        Code Challenge
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" component="nav">
        <Toolbar>
          <Typography
            variant="h6"
            component="div"
            sx={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/dashboard");
            }}
          >
            Logo
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { md: "flex" } }}>
            <IconButton
              size="large"
              aria-label="cart counts"
              color="inherit"
              onClick={() => navigate("/carts")}
            >
              <Badge badgeContent={total} color="error">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              edge="end"
              aria-label="account of current user"
              aria-controls={menuId}
              aria-haspopup="true"
              onClick={handleProfileMenuOpen}
              color="inherit"
            >
              <AccountCircle />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      {renderMenu}
    </Box>
  );
}
