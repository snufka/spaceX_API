import React, { useState } from "react";

export default function Search() {
  //state inpute
  const [query, setQuery] = useState("67");
  //state api result
  const [launches, setLaunches] = useState([]);

  const searchApi = async (e) => {
    e.preventDefault();
    console.log("submitting");

    const url = "https://api.spacexdata.com/v3/launches/" + query;
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
      setLaunches(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <form onSubmit={searchApi}>
        <label className="label" htmlFor="query">
          Api Search
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="Flight Number"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
      <div className="card-list">
        {launches.map((launch) => (
          <div>
            <h1> {launch.flight_number} </h1>
          </div>
        ))}
      </div>
    </>
  );
}
