import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./core/Home.component";
import Signup from "./user/Signup.component";

const MainRouter = () => {
    return (
        <div>
            <Switch>
                <Route exact patch="/" component={Home}></Route>
                <Route exact patch="/signup" component={Signup}></Route>
            </Switch>
        </div>
    );
};

export default MainRouter;
