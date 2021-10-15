import React from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Help from "./components/Help";
import Form from "./components/Form";

const App = () => {
  return (
    <>
      <nav>
        <h1>Lambda Eats</h1>
        <div className="Links">
          <Link to="/">Home</Link>
          <Link to="/help">Help</Link>
          <Link id="order-pizza" to="/piza"></Link>
        </div>
      </nav>
      <Switch>
        <Route path="/pizza" component={Form} />
        <Route path="/help" component={Help} />
        <Route path="/" component={Home} />
      </Switch>
    </>
  );
};
export default App;
