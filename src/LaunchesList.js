import React, { useEffect } from "react";
import axios from "axios";
import LauncheRender from "./LauncheRender";

const BASEURL = "https://api.spacexdata.com/v3/launches";

export default function LaunchesList() {
  const fetchData = async (str) => {
    const result = await axios.get(BASEURL + str + "?limit=20");
    console.log(result);
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
    fetchData("women empowerment");
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
