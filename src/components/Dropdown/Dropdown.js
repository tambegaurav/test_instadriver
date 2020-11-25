import React from "react";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";

export default function SimpleMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <Button
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        style={{
          width: "200px",
          border: "1px black solid",
          borderRadius: "15px",
          margin: "20px 0",
        }}
      >
        Message Statuses
      </Button>
      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Read Messages</MenuItem>
        <MenuItem onClick={handleClose}>Unead Messages</MenuItem>
        <MenuItem onClick={handleClose}>Opened but not responded</MenuItem>
        <MenuItem onClick={handleClose}>Ongoing Discussion</MenuItem>
        <MenuItem onClick={handleClose}>Ended Discussion</MenuItem>
      </Menu>
    </div>
  );
}
