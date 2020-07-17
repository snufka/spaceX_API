import React from "react";

export default function Search() {
  const searchApi = async (e) => {
    e.preventDefault();
    console.log("submitting");

    const query = "67";

    const url = "https://api.spacexdata.com/v3/launches/" + query;
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
        />
        <button className="button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}
