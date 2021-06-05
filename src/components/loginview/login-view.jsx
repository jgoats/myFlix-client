import React from 'react';
import PropTypes from "prop-types";
import Form from 'react-bootstrap/Form';
import Button from "react-bootstrap/Button";
import "./login-view.scss";

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

    handleSubmit() {
        const { username, password } = this.state;
        /* Send a request to the server for authentication */
        this.props.onLoggedIn([username, password]);
    }

    render() {
        return (
            <Form>
                <Form.Group controlId="formUsername">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control type="text" onChange={e => this.onUsernameChange(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" onChange={e => this.onPasswordChange(e.target.value)} />
                </Form.Group>
                <Button variant="primary" type="submit" onClick={this.handleSubmit}>
                    submit
                </Button>
            </Form>
        );
    }
}
LoginView.propTypes = {
    onLoggedIn: PropTypes.func.isRequired
};