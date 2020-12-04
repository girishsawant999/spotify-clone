import React from "react";
import "../Body/body.css";
import PlaylistCard from "../PlaylistCard";
import RecentTrackCard from "../RecentTrackCard";

function CategoryContainer({ category, name, type }) {
  return (
    category?.items?.length > 0 && (
      <div className="categoryRow">
        <h2>{name}</h2>
        <div className="trackCardsContainer">
          {type === 0 &&
            category?.items?.map((item, index) => (
              <RecentTrackCard track={item} trackIndex={index + name} />
            ))}
          {type === 1 &&
            category?.items?.map((item, index) => (
              <PlaylistCard playlist={item} />
            ))}
        </div>
      </div>
    )
  );
}

export default CategoryContainer;
