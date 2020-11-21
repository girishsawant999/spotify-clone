import MenuIcon from "@material-ui/icons/Menu";
import PersonOutlineIcon from "@material-ui/icons/PersonOutline";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useDataLayerValue } from "../../DataLayer";
import "../Body/body.css";
import SearchSuggestion from "./Search/SearchSuggestion";

function BodyHeader(props) {
  const [{ user }] = useDataLayerValue();

  const openSidebar = () => {
    const element = document.getElementById("sidebar");
    if (element) {
      element.classList.toggle("hidden");
      element.classList.toggle("display");
    }
  };

  return (
    <div className="body__header">
      <span id="menuBtn" className="body__menu" onClick={openSidebar}>
        <MenuIcon />
      </span>
      <SearchSuggestion />
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
