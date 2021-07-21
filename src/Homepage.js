import React, {useContext} from "react";
import {useHistory} from "react-router-dom";
import Container from "react-bootstrap/Container";
import JumboTron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import "./css/Homepage.css";
import StateContext from "./StateContext";

/** 
* Homepage renders the Yodlr title and user info.
* If user is admin, load button for admin page to view all users
*/
const Homepage = ({user}) => {
    const history = useHistory();
    const {updateState} = useContext(StateContext);

    // signout user
    const signout = () => {
        localStorage.setItem("user", null);
        updateState({...user, state: "pending"});
        history.push("/register")
    }

    return (
        <Container>
            <JumboTron style={{marginBottom: "100px"}}>
                <h1 className="header">Yodlr Design</h1>
                <h2>{user.firstName} {user.lastName}</h2>
                <h3>{user.email}</h3>
                <h4 style={{color: user.state === "active" ? "green" : "red"}}>
                    {user.state}
                </h4>
                {user.isAdmin && <Button 
                size="lg" 
                variant="primary" 
                className="btn btn-primary"
                onClick={() => {history.push("/admin")}}
                >
                    Admin Page
                </Button>}
            </JumboTron>
            <Button 
            variant="secondary"
            style={{position: "absolute", left: 0, bottom: 0}}
            onClick={signout}>
                Sign Out
            </Button>
        </Container>
    )
};

export default Homepage