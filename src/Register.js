import React from "react";
import {useHistory} from "react-router-dom";
import useFields from "./useFields";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

/**
 * Register renders form for users to register their info
 * User cannot input blank or "space-only" inputs
 * If user is already registered, the user will be signed in
 * Redirect to homepage after registering
 */
const Register = () => {
    const history = useHistory();
    // id is only there so new data is stored in the same order
    const [formData, handleChange, resetFormData] = useFields({
        id: "",
        email: "",
        firstName: "",
        lastName: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        // users are sent to homepage right after so set them active
        const {data} = await axios.post("http://localhost:3001/users", 
        {...formData, state: "active"});
        
        localStorage.setItem("user", JSON.stringify(data));
        history.push("/homepage");
    }

    // remove all spaces from every input,
    // if there is actual data (not just spaces) in all, return true
    // Once all are not empty then allow user to register
    let allFilled = formData.email.replace(/ /g, '') !== "" &&
        formData.firstName.replace(/ /g, '') !== "" &&
        formData.lastName.replace(/ /g, '') !== ""
    
    return (
        <Container>
            <h1 style={{marginBottom: "100px", fontSize: "60px"}}>Register</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Label id="firstName">First Name</Form.Label>
                    <Form.Control 
                        name="firstName" 
                        type="text" 
                        aria-labelledby="firstName"
                        minLength={1}
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="first name"
                        />
                </Form.Group>
                <Form.Group>
                    <Form.Label id="lastName">Last Name</Form.Label>
                    <Form.Control 
                        name="lastName" 
                        type="text" 
                        aria-labelledby="lastName"
                        minLength={1}
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="last name"
                        />
                </Form.Group>
                <Form.Group>
                    <Form.Label id="email">Email</Form.Label>
                    <Form.Control 
                        name="email" 
                        type="email"
                        aria-labelledby="email"
                        minLength={5}
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="email"
                        />
                </Form.Group>
                <Button disabled={!allFilled} variant="primary" type="submit" size="lg" block>
                    Submit
                </Button>
            </Form>
        </Container>
    )
}

export default Register;