import React from "react";
import Card from "./Card";

function App() {
  return (
    <div>
      <h1>Space X Launches</h1>
      <div class="form-group">
        <form>
          <label class="col-sm-2 col-form-label">Search:</label>
          <input type="search" class="col-sm-8"></input>
        </form>
      </div>
      <Card />
    </div>
  );
}

export default App;
