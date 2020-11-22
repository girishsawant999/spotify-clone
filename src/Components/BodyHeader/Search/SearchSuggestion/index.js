import SearchIcon from "@material-ui/icons/Search";
import React, { useEffect, useState } from "react";
import { useDataLayerValue } from "../../../../DataLayer";
import "./style.css";
import Track from "./Track";

function SearchSuggestion(props) {
  const [{ spotify }, dispatch] = useDataLayerValue();
  const [showSuggestions, setshowSuggestions] = useState(false);
  const [tracks, settracks] = useState([]);

  useEffect(() => {
    const element = document.getElementById("searchInput");
    if (element && showSuggestions) {
      element.classList.add("search_suggestions_open");
      document.getElementById("header__user").style.display = "none";
      document.getElementById("searchInput").style.maxWidth = "100%";
      document.getElementById("menuBtn").classList.add("hidden");
      window.addEventListener("click", (e) => {
        if (!document.getElementById("searchInput").contains(e.target)) {
          setshowSuggestions(false);
        }
      });
    } else if (element) {
      element.classList.remove("search_suggestions_open");
      document.getElementById("header__user").style.display = "flex";
      document.getElementById("searchInput").style.maxWidth = "300px";
      document.getElementById("menuBtn").classList.remove("hidden");
      window.removeEventListener("click", (e) => {});
      settracks([]);
    }
    return () => {};
  }, [showSuggestions]);

  const onInputSearch = (query) => {
    if (query.length < 3) {
      setshowSuggestions(false);
      return;
    }
    spotify.search(query, ["track"], { limit: 5 }).then((res) => {
      settracks(res?.tracks?.items);
      if (res?.tracks?.items.length > 0) setshowSuggestions(true);
      else setshowSuggestions(false);
    });
  };

  const gotoSearchResult = (query) => {
    console.log("query :>> ", query);
  };

  return (
    <div id="searchInput" className="body__search">
      <SearchIcon className="body__SearchIcon" />
      <form
        action="#"
        onSubmit={(e) => {
          e.preventDefault();
          gotoSearchResult(e.target.search.value);
        }}
      >
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search songs, playlist, artists"
          autoComplete="off"
          onInput={(e) => onInputSearch(e.target.value)}
        />
      </form>
      {showSuggestions && (
        <div className="search_suggestions">
          {tracks.length !== 0 &&
            tracks.map((track) => <Track track={track} dispatch={dispatch} />)}
        </div>
      )}
    </div>
  );
}

export default SearchSuggestion;
