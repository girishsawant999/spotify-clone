import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Body from "./Components/Body";
import PlayListView from "./Components/PlaylistView";
import Sidebar from "./Components/Sidebar";

function Routes(props) {
  return (
    <Router>
      <Sidebar />
      <Switch>
        <div class="routes">
          <Route exact path="/" component={Body} />
          <Route path="/playlist/:playlist_id" component={PlayListView} />
        </div>
      </Switch>
    </Router>
  );
}

export default Routes;
