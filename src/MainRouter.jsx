import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./core/Home.component";
import Menu from "./core/Menu.component";
import Signup from "./user/Signup.component";
import Signin from "./user/Signin.component";
import Profile from "./user/Profile.component";
import Users from "./user/Users.component";
import EditPofile from "./user/EditPofile.component";
import FindPeople from "./user/FindPeople.component";
import NewPost from "./post/NewPost.component";
import SinglePost from "./post/SinglePost.component";
import EditPost from "./post/EditPost.component";
import PrivateRoute from "./auth/PrivateRoute";
import ForgotPassword from "./user/ForgotPassword.component";
import ResetPassword from "./user/ResetPassword.component";
import Admin from "./admin/Admin.component";

const MainRouter = () => (
    <div>
        <Menu />
        <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/forgot-password" component={ForgotPassword} />
            <Route
                exact
                path="/reset-password/:resetPasswordToken"
                component={ResetPassword}
            />
            <PrivateRoute exact path="/post/create" component={NewPost} />
            <Route exact path="/post/:postId" component={SinglePost} />
            <PrivateRoute
                exact
                path="/post/edit/:postId"
                component={EditPost}
            />
            <Route exact path="/users" component={Users} />
            <Route exact path="/signup" component={Signup} />
            <Route exact path="/signin" component={Signin} />
            <PrivateRoute
                exact
                path="/user/edit/:userId"
                component={EditPofile}
            />
            <PrivateRoute exact path="/findpeople" component={FindPeople} />
            <PrivateRoute exact path="/user/:userId" component={Profile} />
            <PrivateRoute exact path="/admin" component={Admin} />
        </Switch>
    </div>
);

export default MainRouter;
