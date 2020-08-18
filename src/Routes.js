import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Body from './Components/Body';
import PlayListView from './Components/PlayListView';

function Routes(props) {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Body} />
        <Route exact path="/category/:category_id" component={PlayListView} />
      </Switch>
    </Router>
  );
}

export default Routes;
