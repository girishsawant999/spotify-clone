import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Body from './Components/Body';
import PlayListView from './Components/PlayListView';

function Routes(props) {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Body} />
        <div class="routes">
          <Route path="/playlist/:playlist_id" component={PlayListView} />
        </div>
      </Switch>
    </Router>
  );
}

export default Routes;
