import MenuIcon from '@material-ui/icons/Menu';
import React, { lazy } from 'react';
import '../Body/body.css';

const SearchSuggestion = lazy(() =>
  import(/*SearchSuggestion*/ './Search/SearchSuggestion')
);
const User = lazy(() => import(/*User*/ './User'));

function BodyHeader(props) {
  const openSidebar = () => {
    const element = document.getElementById('sidebar');
    if (element) {
      element.classList.toggle('m-hidden');
      element.classList.toggle('m-display');
    }
  };

  return (
    <div className='body__header'>
      <span id='menuBtn' className='body__menu' onClick={openSidebar}>
        <MenuIcon />
      </span>
      <SearchSuggestion />
      <User />
    </div>
  );
}

export default BodyHeader;
