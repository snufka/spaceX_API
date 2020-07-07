import React from "react";

export default function LauncheRender({ volumeInfo }) {
  return (
    <div>
      <h4>{volumeInfo.flight_number}</h4>
      <p>By: {volumeInfo.mission_name}</p>
      <p>
        {volumeInfo.details ? volumeInfo.details.substring(0, 100) + "..." : ""}
      </p>
      <a href={volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">
        more info
      </a>
    </div>
  );
}
