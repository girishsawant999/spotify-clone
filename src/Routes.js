import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Spinner from './Components/Spinner';

const Sidebar = lazy(() => import(/*Sidebar*/ './Components/Sidebar'));
const Body = lazy(() => import(/*Body*/ './Components/Body'));
const PlayListView = lazy(() =>
  import(/*PlaylistView*/ './Components/PlaylistView')
);
const MyProfile = lazy(() => import(/*MyProfile*/ './Components/MyProfile'));

function Routes(props) {
  return (
    <Router>
      <Suspense fallback={<div>...</div>}>
        <Sidebar />
      </Suspense>

      <div className='routes'>
        <Suspense fallback={<Spinner />}>
          <Switch>
            <Route exact path='/' component={Body} />
            <Route path='/playlist/:playlist_id' component={PlayListView} />
            <Route path='/my-profile' component={MyProfile} />
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default Routes;
