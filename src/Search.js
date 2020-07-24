import React, { useState } from "react";

export default function Search() {
  //state inpute
  const [query, setQuery] = useState("67");
  //state api result
  const [launches, setLaunches] = useState([]);

  const searchApi = async (e) => {
    e.preventDefault();
    console.log("submitting");

    const url =
      "https://api.spacexdata.com/v3/launches?limit=20?" + query + "&latest";
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
      <form onSubmit={searchApi} className="form-inline">
        <label className="sr-only" htmlFor="query">
          Search
        </label>
        <input
          className="form-control"
          type="text"
          name="query"
          placeholder="Flight Number"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />

        <button className="btn btn-info" type="submit">
          Search
        </button>
      </form>

      <div className="col-sm-6">
        <div className="text-center">
          {launches.map((launch) => (
            <div key={launch.flight_number}>
              <h3 className="card-title">
                Flight Number:{launch.flight_number}
              </h3>
              <h1 className="card-header">
                Rocket Name: {launch.rocket.rocket_name}
              </h1>
              <img
                src={launch.links.mission_patch_small}
                className="card-img-top"
                alt={launch.rocket.rocket_name}
              />
              <div className="card-body">
                <h3>Status: {launch.launch_success}</h3>
                <p>Date: {launch.launch_date_utc}</p>
                <p className="card-text">Details: {launch.details}</p>
                <a href={launch.links.article_link} className="btn btn-primary">
                  Read More about the Lunch
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
