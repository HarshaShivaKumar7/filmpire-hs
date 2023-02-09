import React from "react";
import { CssBaseline } from "@mui/material";
import { Routes, Route } from "react-router-dom";
import useStyles from "./styles.js";
import { Actors, Movies, NavBar, Profile, MovieInformation } from "./index";

const App = () => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <NavBar />
      <main className={classes.content}>
        <div className={classes.content} />
        <Routes>
          <Route exact path="/" element={<Movies />} />
          <Route exact path="/movie" element={<MovieInformation />} />
          <Route exact path="/actors" element={<Actors />} />
          <Route exact path="/profile" element={<Profile />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
