import React from "react";
import Card from "./Card";
import LaunchesList from "./LaunchesList";

function App() {
  return (
    <div>
      <h1>Space X Launches</h1>
      <div className="form-group">
        <form>
          <label className="col-sm-2 col-form-label">Search:</label>
          <input type="search" class="col-sm-8"></input>
        </form>
      </div>
      <LaunchesList />
      <Card />
    </div>
  );
}

export default App;
