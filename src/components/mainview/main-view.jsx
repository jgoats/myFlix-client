import React from "react";
import axios from "axios";
import RegistrationView from "../registrationview/registration-view.jsx";
import LoginView from "../loginview/login-view.jsx";
import MovieCard from "../moviecard/movie-card.jsx";
import MovieView from "../movieview/movie-view.jsx";
import "./main-view.scss";


export default class MainView extends React.Component {
    constructor() {
        super()
        this.state = {
            movies: [],
            selectedMovie: null,
            user: null,
            registered: null,
            errorMessage: ""
        }
    }
    changeSelectedMovie = function (selected) {
        this.setState({
            selectedMovie: selected
        });
    }
    onLoggedIn(newUser) {
        if (newUser[0] === this.state.registered[0] && newUser[1] === this.state.registered[1]) {
            this.setState({
                user: newUser
            })
        }
        else {
            this.setState({
                user: null,
                errorMessage: "incorrect username and or password used"
            })
        }
    }
    onRegistered(newAccount) {
        this.setState({
            registered: [...newAccount]
        })
    }
    componentDidMount() {
        axios.get('https://movie-api426.herokuapp.com/movies')
            .then(response => {
                this.setState({
                    movies: response.data
                });
                console.log(this.state.movies);
            })
            .catch(error => {
                console.log(error);
            });
    }
    render() {
        const { movies, selectedMovie, user, registered } = this.state;
        //if (!registered) return <RegistrationView onRegistered={newAccount => this.onRegistered(newAccount)} />;
        //if (!user) return <LoginView message={this.state.message} onLoggedIn={newUser => this.onLoggedIn(newUser)} />;

        if (movies.length === 0) return <div className="main-view">The list is empty!</div>;
        return (
            <div className="main-view">
                {selectedMovie
                    ? <MovieCard movie={selectedMovie} onBackClick={selectedMovie => { this.changeSelectedMovie(selectedMovie); }} />
                    : movies.map(movie => (
                        <MovieView key={movie._id} movie={movie} onMovieClick={(selectedMovie) => { this.changeSelectedMovie(selectedMovie) }} />
                    ))
                }
            </div>
        )
    }
}
