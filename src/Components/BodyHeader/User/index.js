import Button from '@material-ui/core/Button';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Divider from '@material-ui/core/Divider';
import Grow from '@material-ui/core/Grow';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import { makeStyles } from '@material-ui/core/styles';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { withRouter } from 'react-router-dom';
import { useDataLayerValue } from '../../../DataLayer';
import './style.css';

const useStyles = makeStyles((theme) => ({
  user_popup: {
    zIndex: '1',
    transform: 'none !important',
    top: '44px !important',
    right: '0px',
  },
  grow: {
    background: '#292929;',
    color: '#fff',
    borderRadius: '0px 0px 15px 15px',
  },
}));

function User({ history }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);
  const [{ user }, dispatch] = useDataLayerValue();

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const logout = () => {
    history.push('/');
    dispatch({ action: 'LOGOUT' });
  };

  const gotoMyProfile = () => {
    history.push('/my-profile');
  };

  const handleClose = (event) => {
    if (event.target.id === 'logout') logout();
    if (event.target.id === 'my-profile') gotoMyProfile();
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }
    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div
      id='header__user'
      className={open ? 'body__user body__user_popup_open' : 'body__user'}>
      <Button
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup='true'
        onClick={handleToggle}>
        <h4>{user?.display_name}</h4>
        {user?.images?.length ? (
          <LazyLoadImage src={user?.images[0]} />
        ) : (
          <PersonOutlineIcon className='body__avatar' />
        )}
      </Button>
      <Popper
        open={open}
        anchorEl={anchorRef.current}
        role={undefined}
        transition
        disablePortal
        className={classes.user_popup}>
        {({ TransitionProps, placement }) => (
          <Grow {...TransitionProps} className={classes.grow}>
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList
                  autoFocusItem={open}
                  id='menu-list-grow'
                  onKeyDown={handleListKeyDown}>
                  <Divider variant='middle' />
                  <MenuItem id='my-profile' onClick={handleClose}>
                    Profile
                  </MenuItem>
                  {/* <MenuItem onClick={handleClose}>My account</MenuItem> */}
                  <Divider variant='middle' />
                  <MenuItem id='logout' onClick={handleClose}>
                    Logout
                  </MenuItem>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
}

export default withRouter(User);
