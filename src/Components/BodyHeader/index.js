import React, { useEffect, useState } from "react";
import "../Body/body.css";
import { useDataLayerValue } from "../../DataLayer";
import SearchIcon from "@material-ui/icons/Search";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";

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
          <img src={user?.images[0]} alt="" />
        ) : (
          <PersonOutlineIcon className="body__avatar" />
        )}
      </div>
    </div>
  );
}

export default BodyHeader;
