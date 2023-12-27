import React from "react";
import classes from "./home.module.css";
import SearchBar from "../search/searchBar";

export default function Home() {
  return (
    <div className={classes.container}>
      <div>
        <span>Welcome to PG Management System</span>
      </div>
    </div>
  );
}
