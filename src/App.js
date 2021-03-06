import React from "react";
//import Card from "./Card";
//import LaunchesList from "./LaunchesList";
import Search from "./Search";

function App() {
  return (
    <>
      <div className="col-sm-10 text-center">
        <h1 className="text-info">Space X Launches</h1>
        <div className="parallax">
          <img
            src="https://www.spacex.com/static/images/backgrounds/anasisii_website_desktop3.jpg"
            className="align-self-end mr-3"
            alt="parallax"
          ></img>
        </div>
        <Search />
      </div>
    </>
  );
}

export default App;
