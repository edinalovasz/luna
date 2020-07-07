import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navigation from "../components/Navigation";
import Credentials from "../components/Credentials";
import Template from "../components/Templates";
import RestaurantCreate from "../components/RestaurantCreate";


const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Navigation>
          <Route path={"/auth"} component={Credentials} />
          <Route path={"/template"} component={Template} />
            {/*<Route exact path='/home' />*/}
            {/*<Route exact path='/search' />*/}
            {/*<Route exact path='/profile'/>*/}
            {/*<Route path='/users/:userId'/>*/}
            {/*<Route path='/restaurant/:restaurantId' />*/}
            <Route path='/restaurant/create' component={RestaurantCreate} />
            {/*<Route exact path='/userProfileUpdate' />*/}
          </Navigation>
        </Switch>
      </Router>
    </>
  );
};

export default Routes;