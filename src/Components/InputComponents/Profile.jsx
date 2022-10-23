import * as React from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import {
  Button,
  Menu,
  MenuItem,
  Fade,
  Avatar,
  Typography,
} from "@mui/material";
import { Modal } from "../layoutContainer";

import { AuthContext } from "../../App";

export default function Profile() {
  // states
  const authValue = useContext(AuthContext);
  const navigate = useNavigate();
  const [openModal, setOpenModal] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () => {
    authValue.logout().then(() => {
      navigate("/");
    });
  };
  const cancel = () => {
    setOpenModal(false);
  };

  const handleResetPasswordClick = () => {
    navigate("/resetPassword");
  };

  return (
    <div>
      <Button
        id="fade-button"
        aria-controls={open ? "fade-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Avatar sx={{ width: "30px", height: "30px" }} />
      </Button>
      <Menu
        id="fade-menu"
        MenuListProps={{
          "aria-labelledby": "fade-button",
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>My account</MenuItem>
        <MenuItem onClick={handleResetPasswordClick}>Reset Password</MenuItem>
        <MenuItem>
          <Modal
            text="logout"
            openModal={openModal}
            setOpenModal={setOpenModal}
          >
            <Typography variant="h6" component="div">
              Are you sure!!
            </Typography>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginTop: "1rem",
              }}
            >
              <Button variant="outlined" onClick={cancel}>
                Cancel
              </Button>
              <Button variant="contained" color="error" onClick={logout}>
                logout
              </Button>
            </div>
          </Modal>
        </MenuItem>
      </Menu>
    </div>
  );
}
