import MenuIcon from "@material-ui/icons/Menu";
import React from "react";
import "../Body/body.css";
import SearchSuggestion from "./Search/SearchSuggestion";
import User from "./User";

function BodyHeader(props) {
  const openSidebar = () => {
    const element = document.getElementById("sidebar");
    if (element) {
      element.classList.toggle("m-hidden");
      element.classList.toggle("m-display");
    }
  };

  return (
    <div className="body__header">
      <span id="menuBtn" className="body__menu" onClick={openSidebar}>
        <MenuIcon />
      </span>
      <SearchSuggestion />
      <User />
    </div>
  );
}

export default BodyHeader;
