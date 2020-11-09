import MenuIcon from "@material-ui/icons/Menu";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import SearchIcon from "@material-ui/icons/Search";
import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDataLayerValue } from "../../DataLayer";
import "../Body/body.css";

function BodyHeader(props) {
  const [{ user }, dispatch] = useDataLayerValue();
  const [menuOpen, setmenuOpen] = useState(false);

  const openSidebar = () => {
    document.getElementById("sidebar").style.display = "block";
  };

  return (
    <div className="body__header">
      <span id="menuBtn" className="body__menu" onClick={openSidebar}>
        <MenuIcon />
      </span>
      <div id="searchInput" className="body__search">
        <SearchIcon className="body__SearchIcon" />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search songs, playlist, artists"
          autoComplete="off"
          onFocus={() => {
            document.getElementById("header__user").style.display = "none";
            document.getElementById("searchInput").style.maxWidth = "100%";
          }}
          onBlur={() => {
            document.getElementById("header__user").style.display = "flex";
            document.getElementById("searchInput").style.maxWidth = "300px";
          }}
        />
      </div>
      <div id="header__user" className="body__user">
        <h4>{user?.display_name}</h4>
        {user?.images?.length ? (
          <LazyLoadImage src={user?.images[0]} />
        ) : (
          <PersonOutlineIcon className="body__avatar" />
        )}
      </div>
    </div>
  );
}

export default BodyHeader;
