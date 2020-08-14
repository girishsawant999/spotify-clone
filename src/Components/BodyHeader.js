import React from 'react';
import './body.css';
import { useDataLayerValue } from '../DataLayer';
import SearchIcon from '@material-ui/icons/Search';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';

function BodyHeader(props) {
  const [{ user }, dispatch] = useDataLayerValue();
  return (
    <div className="body__header">
      <div className="body__search">
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
