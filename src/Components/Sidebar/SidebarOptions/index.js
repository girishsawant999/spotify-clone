import React from 'react';
import './sidebarOptions.css';
import { useNavigate } from 'react-router-dom';

function SidebarOptions({ Option, index, Icon, url,  }) {
    const navigate =useNavigate();

  const closeSidebar = () => {
    const element = document.getElementById('sidebar');
    if (element) {
      element.classList.toggle('m-hidden');
      element.classList.toggle('m-display');
    }
  };
  const goto = (url) => {
    closeSidebar();
    navigate(url);
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

export default (SidebarOptions);
