import { Container, Row, Col, InputGroup, FormControl, Button, Form } from 'react-bootstrap';
import axios from 'axios';
import '../index.css';

export default function Login() {
    

    const handleOnClick = (e) => {
        e.preventDefault()
        let emailInput = document.querySelector('#formBasicEmail').value;
        let passwordInput = document.querySelector('#formBasicPassword').value;
        console.log(emailInput);
        console.log(passwordInput);
        console.log('this works');

        var userData = {
            email: emailInput,
            password: passwordInput
        };

        if (!userData.email || !userData.password) {
            return;
        }
        loginUser(userData.email, userData.password);
    }

    function loginUser(email, password) {
        axios.post("/api/login", {
            email: email,
            password: password
        })
            .then(function () {
                console.log("logged in!")
            })
            .catch(function (err) {
                console.log(err);
            });
    }


    return (
        <Container className="text-center d-flex justify-content-center">
            <div className="formContainer">
                <Form>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password" />
                    </Form.Group>
                    <Button variant="primary" type="button" onClick={handleOnClick}>
                        Login
  </Button>
                </Form>

            </div>
        </Container>
    )
}
