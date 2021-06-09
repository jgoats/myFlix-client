import React from "react";
import "./registration-view.scss";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import MovieTicket from "/src/images/movie-ticket.svg";

export default class RegistrationView extends React.Component {
    constructor() {
        super();
        this.state = {
            username: "",
            password: "",
            email: "",
            birthday: ""
        }
        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onBirthdayChange = this.onBirthdayChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    onUsernameChange(event) {
        this.setState({
            username: event.target.value
        });
    }

    onPasswordChange(event) {
        this.setState({
            password: event.target.value
        });
    }
    onEmailChange(event) {
        this.setState({
            email: event.target.value
        })
    }
    onBirthdayChange(event) {
        this.setState({
            birthday: event.target.value
        })
    }

    handleSubmit(e) {
        const { username, password, email, birthday } = this.state;
        e.preventDefault();
        this.props.onRegistered([username, password, email, birthday]);
    }
    render() {
        return (
            <div className="background-container">
                <div className="screen-container">
                    <div className="hero-container">
                        <img className="logo" src={MovieTicket} />
                        <h1>Welcome to MyFlix</h1>
                        <h5>Create A New Account Today!</h5>
                    </div>
                    <div className="form-container">
                        <div className="adjust-form-size">
                            <Form>
                                <Form.Group controlId="formUsername">
                                    <Form.Label>Username:</Form.Label>
                                    <Form.Control type="text" onChange={event => this.onUsernameChange(event)} />
                                </Form.Group>

                                <Form.Group controlId="formPassword">
                                    <Form.Label>Password:</Form.Label>
                                    <Form.Control type="password" onChange={event => this.onPasswordChange(event)} />
                                </Form.Group>

                                <Form.Group controlId="formEmail">
                                    <Form.Label>Email:</Form.Label>
                                    <Form.Control type="text" onChange={event => this.onEmailChange(event)} />
                                </Form.Group>

                                <Form.Group controlId="formBirthday">
                                    <Form.Label>Birthday:</Form.Label>
                                    <Form.Control type="text" onChange={event => this.onBirthdayChange(event)} />
                                </Form.Group>
                                <Button className="form-button" variant="primary" type="submit" onClick={(e) => this.handleSubmit(e)}>
                                    Create Account
                </Button>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}