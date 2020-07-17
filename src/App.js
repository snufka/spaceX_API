import React from "react";
import Card from "./Card";
import LaunchesList from "./LaunchesList";
import Search from "./Search";

function App() {
  return (
    <div>
      <h1>Space X Launches</h1>
      <Search />
      <LaunchesList />
      <Card />
    </div>
  );
}

export default App;
