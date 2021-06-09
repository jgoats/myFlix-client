import React from 'react';
import PropTypes from "prop-types";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import "./login-view.scss";
import MovieTicket from "/src/images/movie-ticket.svg";


export default class LoginView extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            username: '',
            password: ''
        };

        this.onUsernameChange = this.onUsernameChange.bind(this);
        this.onPasswordChange = this.onPasswordChange.bind(this);
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

    handleSubmit(e) {
        const { username, password } = this.state;
        e.preventDefault();
        this.props.onLoggedIn([username, password]);
    }

    render() {
        return (<div className="background">
            <div className="content-container">

                <div className="hero">
                    <img className="hero-logo" src={MovieTicket} />
                    <h1>Welcome to MyFlix</h1>
                    <h5>sign in here</h5>
                </div>
                <div className="form">
                    <div className="form-size">
                        <Form>
                            <Form.Group controlId="formUsername">
                                <Form.Label>Username:</Form.Label>
                                <Form.Control type="text" onChange={event => this.onUsernameChange(event)} />
                            </Form.Group>

                            <Form.Group controlId="formPassword">
                                <Form.Label>Password:</Form.Label>
                                <Form.Control type="password" onChange={event => this.onPasswordChange(event)} />
                            </Form.Group>
                            <Button variant="primary" type="submit" onClick={(e) => this.handleSubmit(e)}>
                                submit
                </Button>
                        </Form>
                    </div>
                </div>
            </div>
        </div>
        );
    }
}
LoginView.propTypes = {
    onLoggedIn: PropTypes.func.isRequired
};