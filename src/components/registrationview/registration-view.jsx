import React from "react";
import "./registration-view.scss";
import MovieTicket from "url:/src/components/registrationview/movie-ticket.svg";

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

    handleSubmit() {
        const { username, password, email, birthday } = this.state;
        console.log(username, password, email, birthday);
        /* Send a request to the server for authentication */
        this.props.onRegistered([username, password, email, birthday]);
    }
    render() {
        return (
            <div className="background-container">
                <div className="screen-container">
                    <div className="hero-container">
                        <img className="logo" src={MovieTicket} />
                        <h1>Welcome to MyFlix</h1>
                        <h3>Create A New Account Today!</h3>
                    </div>
                    <form className="form-container">
                        <div className="label-container">
                            <label className="label">
                                <span>Username:</span>
                                <input type="text" value={this.state.username} onChange={this.onUsernameChange} />
                            </label>
                            <label className="label">
                                <span>Password:</span>
                                <input type="password" value={this.state.password} onChange={this.onPasswordChange} />
                            </label>
                            <label className="label">
                                <span>Email:</span>
                                <input type="text" value={this.state.email} onChange={this.onEmailChange} />
                            </label>
                            <label className="label">
                                <span>Birthday:</span>
                                <input type="text" value={this.state.birthday} onChange={this.onBirthdayChange} />
                            </label>
                            <button className="button" type="button" onClick={this.handleSubmit}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }
}