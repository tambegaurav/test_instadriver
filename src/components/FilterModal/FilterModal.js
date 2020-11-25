import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import FilterListIcon from "@material-ui/icons/FilterList";
import IconButton from "@material-ui/core/IconButton";
import Dropdown from "../../components/Dropdown";
import DropdownTwo from "../../components/DropdownTwo";
import Button from "@material-ui/core/Button";

function getModalStyle() {
  const top = 50;
  const left = 50;

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    borderRadius: "25px",
    padding: "10px",
  },
}));

export default function SimpleModal() {
  const classes = useStyles();
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <div style={modalStyle} className={classes.paper}>
      <h2
        id="simple-modal-title"
        style={{
          backgroundColor: "#6B6565",
          color: "white",
          margin: "0",
          padding: "10px 0",
          height: "30px",
          verticalAlign: "center",
          textAlign: "center",
          borderRadius: "50px",
        }}
      >
        Filters
      </h2>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Dropdown />
        <DropdownTwo />
        <Button variant="contained" color="primary" onClick={handleClose}>
          Apply Filters
        </Button>
      </div>
    </div>
  );

  return (
    <div>
      <div type="button" onClick={handleOpen} style={{}}>
        <IconButton aria-label="menu">
          <FilterListIcon />
        </IconButton>
      </div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
