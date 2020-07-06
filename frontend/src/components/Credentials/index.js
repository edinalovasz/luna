import React from "react";
import Login from "./Login";
import {Route} from "react-router-dom";
import Verification from "./Verification";

const Credentials = (props) => {
    return (
        <>
            <Route path="/auth/login" exact component={Login}/>
            {/*<Route path="/auth/signup" exact component={}/>*/}
            {/*<Route path="/auth/signup/sent" exact component={}/>*/}
            <Route path="/auth/signup/validation" exact component={Verification}/>
        </>
    )
};

export default Credentials;
