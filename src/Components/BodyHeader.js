import React, { useEffect } from 'react';
import './body.css';
import { useDataLayerValue } from '../DataLayer';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import MenuIcon from '@material-ui/icons/Menu';

function BodyHeader(props) {
  const [{ user }, dispatch] = useDataLayerValue();
  useEffect(() => {
    const menuBtn = document.getElementById('menuBtn');
    menuBtn.addEventListener('click', () => {
      if(document.getElementById('sidebar').style.display === 'none') {
        document.getElementById('sidebar').style.display = 'block';
        document.getElementById('searchInput').style.display = 'none';
      } else {
        document.getElementById('sidebar').style.display = 'none';
        document.getElementById('searchInput').style.display = 'flex';

      }

    });
    return () => {
      menuBtn.removeEventListener('click', {});
    };
  }, []);

  return (
    <div className="body__header">
      <span id="menuBtn" className="body__menu">
        <MenuIcon />
      </span>
      <div id="searchInput" className="body__search">
        <SearchIcon className="body__SearchIcon" />
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search songs, playlist, artists"
        />
      </div>
      <div className="body__user">
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
