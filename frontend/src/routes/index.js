import React from "react";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Navigation from "../components/Navigation";
import Credentials from "../components/Credentials";


const Routes = () => {
    return <>
        <Router>
            <Switch>
                <Navigation>
                    <Route path={"/auth"} component={Credentials}/>
                    {/*<Route path={"/template"} component={}/>*/}
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
};

export default Routes;