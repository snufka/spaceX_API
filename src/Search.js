import React, { useState } from "react";

export default function Search() {
  //state inpute
  const [query, setQuery] = useState("67");
  //state api result

  const searchApi = async (e) => {
    e.preventDefault();
    console.log("submitting");

    const url = "https://api.spacexdata.com/v3/launches?limit=20?" + query;
    try {
      const res = await fetch(url);
      const data = await res.json();
      console.log(data);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <form onSubmit={searchApi}>
        <label className="label" htmlFor="query">
          Api Search
        </label>
        <input
          className="input"
          type="text"
          name="query"
          placeholder="flight number"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
