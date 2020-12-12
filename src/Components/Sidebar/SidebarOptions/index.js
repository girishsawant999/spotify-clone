import React from 'react';
import { withRouter } from 'react-router-dom';
import './sidebarOptions.css';

function SidebarOptions({ Option, index, Icon, url, history }) {
  const closeSidebar = () => {
    const element = document.getElementById('sidebar');
    if (element) {
      element.classList.toggle('m-hidden');
      element.classList.toggle('m-display');
    }
  };
  const goto = (url) => {
    closeSidebar();
    history.push(url);
  };
  return (
    <div className='sidebarOptions' onClick={() => goto(url)}>
      {Icon && <Icon className='sidebarOptions_icon' />}
      {Icon ? (
        <h4>{Option}</h4>
      ) : (
        <p className='sidebarOptions_icon'>{Option}</p>
      )}
    </div>
  );
}

export default withRouter(SidebarOptions);
