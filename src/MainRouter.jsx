import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./core/Home.component";
import Menu from "./core/Menu.component";
import Signup from "./user/Signup.component";
import Signin from "./user/Signin.component";

const MainRouter = () => (
    <div>
        <Menu />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signin" component={Signin} />
        </Switch>
    </div>
);

export default MainRouter;
