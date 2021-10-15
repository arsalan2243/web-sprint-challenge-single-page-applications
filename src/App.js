import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Help from "./components/Help";

const App = () => {
  return (
    <>
      <nav>
        <h1>Lambda Eats</h1>
        <div className="Links">
          <Link to="/">Home</Link>
          <Link to="/help">Help</Link>
        </div>
      </nav>
      <Switch>
        <Route path="/help" component={Help} />
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
};
export default App;
