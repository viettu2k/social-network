import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./core/Home.component";
import Menu from "./core/Menu.component";
import Signup from "./user/Signup.component";
import Signin from "./user/Signin.component";
import Profile from "./user/Profile.component";

const MainRouter = () => (
    <div>
        <Menu />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signin" component={Signin} />
            <Route exact path="/user/:userId" component={Profile} />
        </Switch>
    </div>
);

export default MainRouter;
