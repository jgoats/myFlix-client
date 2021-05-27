import React from 'react';
import axios from 'axios';
import PropTypes from 'prop-types';

import { RegistrationView } from '../registration-view/registration-view';
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie";
import { LoginView } from '../login-view/login-view';

export class MainView extends React.Component {
    constructor() {
        super()
        this.state = {
            movies: [],
            selectedMovie: null,
            user: null
        }
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
    onLoggedIn(user) {
        this.setState({
            user
        });
    }
    onRegister(register) {
        this.setState({
            register
        });
    }
    toggleRegister = (e) => {
        e.preventDefault();
        this.setState({
            register: !this.state.register
        })
    }
    // function to change state to selected movie when clicked or to change selected movie back to null
    setSelectedMovie(newSelectedMovie) {
        this.setState({
            selectedMovie: newSelectedMovie
        });
    }
    // runs everytime the state of mainView changes and return a single jsx element
    render() {
        // destructuring movies , selectedMovie from this.state
        const { movies, selectedMovie, register } = this.state;
        if (register) return <RegistrationView onRegister={register => this.onRegister(register)} toggleRegister={this.toggleRegister} />;
        /* If there is no user, the LoginView is rendered. If there is a user logged in, the user details are *passed as a prop to the LoginView*/
        if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} toggleRegister={this.toggleRegister} />;
        // if no movies present from this.state.movies, return a div that tells the user the list is empty
        if (movies.length === 0) return <div className="main-view" />;

        return (
            /*if selected movie is equal to null (which is the default state) map through the movies array inside the state
            and pass the data into the <MovieCard/> component (creates a movie card for each iteration). The method onMovieClick is 
            passed through a prop to each <MovieCard/> to allow the state of mainView to change when a user clicks on a movie from the <MovieView/>
            if selected is not equal to null (happens when a movie is clicked on and the data for the movie is passed into selectedMovie)
            the <MovieView/> component is rendered and has the movie data and a method called onBackClick passed into a prop */
            <div className="main-view">
                {selectedMovie ? <MovieView movie={selectedMovie} onBackClick={newSelectedMovie => { this.setSelectedMovie(newSelectedMovie); }} />
                    : movies.map(movie => (
                        <MovieCard key={movie._id} movieData={movie} onMovieClick={(movie) => { this.setSelectedMovie(movie) }} />
                    ))
                }
            </div>
        );
    }
}
