import React from "react";
import {Switch, Route} from "react-router-dom";
import HomepageWrapper from "./HomepageWrapper";
import Register from "./Register";
import Admin from "./Admin";

/**
 * Routes renders all the routes the user can access
 * Render 404 page if path not defined
 * Root path is either homepage or register page, depending if user is signed in
 * Duplicate roots are so we can redirect user
 */
const Routes = () => {
    const user = JSON.parse(localStorage.getItem("user"));
   
    return(
        <Switch>
            <Route exact path="/">
                {user ? <HomepageWrapper /> : <Register/>}
            </Route>
            <Route exact path="/homepage">
                <HomepageWrapper />
            </Route>
            <Route exact path="/register">
                <Register/>
            </Route>
            <Route exact path="/admin">
                <Admin/>
            </Route>
            <Route>
                <h1>ERROR 404</h1>
                <p>Hmmm. I can't seem to find what you want...</p>
                <img src=
                "https://image.freepik.com/free-vector/funny-error-404-background-design_1167-219.jpg"
                />
            </Route>
        </Switch>
    )
}

export default Routes;