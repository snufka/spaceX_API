import React, { useEffect } from "react";
import axios from "axios";
import LauncheRender from "./LauncheRender";

const BASEURL = "https://api.spacexdata.com/v3/launches?limit=20?";

export default function LaunchesList() {
  const fetchData = async (str) => {
    const result = await axios.get(BASEURL + str + "&latest");
    console.log(result.data);
    setSearchResults(result.data.items || []);
  };
  const [searchTerm, setSearchTerm] = React.useState("");
  const [searchResults, setSearchResults] = React.useState([]);
  const handleSubmit = (searchLaunche) => {
    searchLaunche.preventDefault();
    fetchData(searchTerm);
  };
  const handleChange = (e) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    fetchData("launch_success=true");
  }, []);
  return (
    <div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={handleChange}
          />
        </form>
      </div>

      <ui className="list-group">
        {searchResults.length
          ? searchResults.map(({ volumeInfo }) => {
              return <LauncheRender volumeInfo={volumeInfo} />;
            })
          : "Loading....."}
      </ui>
    </div>
  );
}
