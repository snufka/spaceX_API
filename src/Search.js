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
      <div className="row">
        <div className="col-sm-6">
          <div className="text-center">
            {launches.map((launch) => (
              <div key={launch.flight_number}>
                <h3 className="card-header">
                  Flight Number:{launch.flight_number}
                </h3>
                <h1 className="card-header">
                  Rocket Name: {launch.rocket.rocket_name}{" "}
                </h1>
                <img
                  src={launch.links.mission_patch}
                  className="card-img-top"
                />
                <div className="card-body">
                  <h3>Status: {launch.launch_success}</h3>
                  <p>Date: {launch.launch_date_utc}</p>
                  <p>Details:{launch.details}</p>
                  <a
                    href={launch.links.article_link}
                    className="btn btn-primary"
                  >
                    Read More about the Lunch
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
