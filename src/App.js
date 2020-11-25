import React from "react";
import "./App.css";
import AppBar from "./components/AppBar";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import SideBar from "./components/SideBar";
import ChatList from "./components/ChatList";
import SearchBar from "./components/SearchBar";
import FilterModal from "./components/FilterModal";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "70vh",
    overflowY: "true",
  },
}));

function App() {
  const classes = useStyles();

  return (
    <div className="App">
      <AppBar />
      <div className={classes.root}>
        <Grid container spacing={0}>
          <Grid item xs={2} style={{ height: "87vh" }}>
            <SideBar />
          </Grid>
          <Grid item xs={10} style={{ height: "60vh" }}>
            <div
              style={{
                margin: "20px 0px",
                display: "flex",
                justifyContent: "space-around",
                maxWidth: "550px",
              }}
            >
              <SearchBar />
              <FilterModal />
            </div>
            <div style={{ height: "60vh", display: "flex" }}>
              <Grid item xs={5}>
                <Paper className={classes.paper}>
                  <ChatList />
                </Paper>
              </Grid>
              <Grid item xs={6}>
                <Paper className={classes.paper}>Chat Screen</Paper>
              </Grid>
            </div>
          </Grid>
        </Grid>
      </div>
    </div>
  );
}

export default App;
