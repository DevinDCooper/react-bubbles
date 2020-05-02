import React from "react";
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";

import Login from "./components/Login";
import PrivateRoute from "./components/PrivateRoute";
import BubblePage from "./components/BubblePage";
import "./styles.scss";

function App() {
  return (
    <Router>
      <div className="App">
      <h1>Welcome to Bubbles</h1>
        <Switch>
        <PrivateRoute  exact path="/protected" component={BubblePage}/>
        <Route  path="/" component={Login} />
        <Route component={Login}/>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
