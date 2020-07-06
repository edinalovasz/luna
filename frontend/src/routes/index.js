import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "../components/Navigation";
import React from "react";
import Credentials from "../components/Credentials";
import Template from "../components/Templates";

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Route path={"/template"} exact component={Template} />
          <Route path={"/auth"} exact component={Credentials} />
          <Navigation>
            {/*<Route exact path='/home' />*/}
            {/*<Route exact path='/search' />*/}
            {/*<Route exact path='/profile'/>*/}
            {/*<Route path='/users/:userId'/>*/}
            {/*<Route path='/restaurant/:restaurantId' />*/}
            {/*<Route exact path='/userProfileUpdate' />*/}
          </Navigation>
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
