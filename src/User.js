import React, {useState, useContext} from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import "./css/User.css";
import StateContext from "./StateContext";

/**
 * User renders all user info and function to toggle state
 * between "active" and "pending"
 */
const User = ({id, firstName, lastName, email, state, isAdmin}) => {
    const [userState, setUserState] = useState(state);
    const {updateState} = useContext(StateContext);

    const toggleState = async () => {
        // toggle state and then post it on api
        let toggledState = userState === "active" ? "pending" : "active";
        let newState = await updateState({id, firstName, lastName, email, state: toggledState, isAdmin});

        // update new state
        setUserState(newState.state);
    }

    return (
        <Container className="user-container">
            <Card className="text-center user-card" >
                <Card.Body className="user-card-body">
                    <Card.Title>{firstName} {lastName}</Card.Title>
                    <Card.Text><small>{email}</small></Card.Text>
                    <Card.Link
                    style={{color: userState === "active" ? "green" : "red"}}
                    onClick={toggleState}>
                        <small>{userState}</small>
                    </Card.Link>
                </Card.Body>
            </Card>
        </Container>
    )
}

export default User;