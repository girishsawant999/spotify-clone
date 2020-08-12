import React from 'react';
import './sidebarOptions.css';
function SidebarOptions({ Option, Icon }) {
  return (
  <div className="sidebarOptions">
      {Icon && <Icon className="sidebarOptions_icon"/>}
      {Icon ? <h4>{Option}</h4> : <p className="sidebarOptions_icon">{Option}</p>}</div>
  );
}

export default SidebarOptions;
