import axios from "axios";
import React, {useEffect, useState} from "react";
import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import User from "./User";
import {useHistory} from "react-router-dom";

/**
 * Admin fetches list of all users from api and lists them.
 * Display loading text while fetching users.
 */
const Admin = () => {
    const [users, setUsers] = useState(null);
    const history = useHistory();
    let user = JSON.parse(localStorage.getItem("user"));
    
    useEffect(() => {
        async function getUsers(){
            const {data} = await axios.get("http://localhost:3001/users")
            setUsers(data);
        }
        getUsers();
    }, []);
    
    // user is not signed in
    if(!user) history.push("/");
    
    if(!users) return <h1>Loading...</h1>;
    
    return (
        <Container fluid>
            <h1 style={{ margin: "20px", fontSize: "60px"}}>Admin Page</h1>
            {users.map(u => (<User 
                key={u.id}
                id={u.id}
                firstName={u.firstName}
                lastName={u.lastName}
                email={u.email}
                state={u.state}
                isAdmin={u.isAdmin}
                />
            ))}
            <Button 
            variant="secondary"
            style={{position: "fixed", left: 0, bottom: 0}}
            onClick={() => history.push("/")}>
                Back
            </Button>
        </Container>
    )
}

export default Admin