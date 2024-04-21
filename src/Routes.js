import React, { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Spinner from './Components/Spinner';

const Sidebar = lazy(() => import(/*Sidebar*/ './Components/Sidebar'));
const Body = lazy(() => import(/*Body*/ './Components/Body'));
const PlayListView = lazy(() =>
  import(/*PlaylistView*/ './Components/PlaylistView')
);
const MyProfile = lazy(() => import(/*MyProfile*/ './Components/MyProfile'));

function AppRoutes(props) {
  return (
    <Router>
      <Suspense fallback={<Spinner loading={true} />}>
        <Sidebar />
      </Suspense>

      <div className='routes'>
        <Suspense fallback={<Spinner loading={true} />}>
        <Routes>
            <Route path='/' element={<Body />} />
            <Route path='/playlist/:playlist_id' element={<PlayListView />} />
            <Route path='/my-profile' element={<MyProfile />} />
          </Routes>
        </Suspense>
      </div>
    </Router>
  );
}

export default AppRoutes;
