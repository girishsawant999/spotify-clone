import React, { useEffect, useState } from 'react';
import './body.css';
import { useDataLayerValue } from '../DataLayer';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MenuIcon from '@material-ui/icons/Menu';
import CloseIcon from '@material-ui/icons/Close';

function BodyHeader(props) {
  const [{ user }, dispatch] = useDataLayerValue();
  const [menuOpen, setmenuOpen] = useState(false);

  useEffect(() => {
    const menuBtn = document.getElementById('menuBtn');
    menuBtn.addEventListener('click', () => {
      if (document.getElementById('sidebar').style.display === 'none') {
        document.getElementById('sidebar').style.display = 'block';
        document.getElementById('searchInput').style.display = 'none';
        document.getElementById('header__user').style.display = 'none';
        setmenuOpen(true);
      } else {
        document.getElementById('sidebar').style.display = 'none';
        document.getElementById('searchInput').style.display = 'flex';
        document.getElementById('header__user').style.display = 'flex';
        setmenuOpen(false);
      }
    });
    return () => {
      menuBtn.removeEventListener('click', {});
    };
  }, []);

  return (
    <div className="body__header">
      <span id="menuBtn" className="body__menu">
        {menuOpen ? <CloseIcon /> : <MenuIcon />}
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
            document.getElementById('header__user').style.display = 'none';
            document.getElementById('searchInput').style.maxWidth = '100%';
          }}
          onBlur={() => {
            document.getElementById('header__user').style.display = 'flex';
            document.getElementById('searchInput').style.maxWidth = '300px';
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
