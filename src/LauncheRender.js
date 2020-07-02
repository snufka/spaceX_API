import React from "react";

export default function LauncheRender({ volumeInfo }) {
  return (
    <div>
      <h4>{volumeInfo.title}</h4>
      <p>By: {volumeInfo.authors}</p>
      <p>
        {volumeInfo.description
          ? volumeInfo.description.substring(0, 100) + "..."
          : ""}
      </p>
      <a href={volumeInfo.infoLink} target="_blank" rel="noopener noreferrer">
        more info
      </a>
    </div>
  );
}
