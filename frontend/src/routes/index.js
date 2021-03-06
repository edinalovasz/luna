import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Navigation from "../components/Navigation";
import Credentials from "../components/Credentials";
import Template from "../components/Templates";
import RestaurantCreate from "../components/RestaurantCreate";
import Home from "../components/Home";
import ReviewCreate from "../components/ReviewCreate";
import RestaurantReview from "../components/RestaurantReview";
import Profile from "../components/Profile";
import Search from "../components/Search";
import UserProfile from "../components/UserProfile";
import RestaurantEdit from "../components/RestaurantEdit";
import authComponent from '../HOCs/AuthComponent/'

const Routes = () => {
  return (
    <>
      <Router>
        <Switch>
          <Navigation>
            <Route path="/auth" component={Credentials} />
            <Route exact path="/template" component={Template} />
            <Route exact path="/" component={Home} />
            <Route exact path="/profile" component={authComponent(UserProfile)}/>
            <Route exact path="/search" component={Search} />
            <Route path='/users/:userId' component={Profile}/>
            <Route
              path="/restaurants/:restaurantId"
              component={RestaurantReview}
            />
            <Route
              exact
              path="/restaurant/create"
              component={RestaurantCreate}
            />
            <Route
              exact
              path="/restaurant/edit/:restaurantId"
              component={RestaurantEdit}
            />
            <Route
              exact
              path="/restaurant/review/create/:restaurantId"
              component={ReviewCreate}
            />
          </Navigation>
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
