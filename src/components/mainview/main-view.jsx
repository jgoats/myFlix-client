import React from "react";
import axios from "axios";
import LoginView from "../loginview/login-view.jsx";
import MovieCard from "../moviecard/movie-card.jsx";
import MovieView from "../movieview/movie-view.jsx";


export default class MainView extends React.Component {
    constructor() {
        super()
        this.state = {
            movies: [],
            selectedMovie: null,
            user: null
        }
    }
    changeSelectedMovie = function (selected) {
        this.setState({
            selectedMovie: selected
        });
    }
    onLoggedIn(newUser) {
        this.setState({
            user: newUser
        });
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
        const { movies, selectedMovie, user } = this.state;
        if (!user) return <LoginView onLoggedIn={newUser => this.onLoggedIn(newUser)} />;

        if (movies.length === 0) return <div className="main-view">The list is empty!</div>;
        return (
            <div className="main-view">
                {selectedMovie
                    ? <MovieView movie={selectedMovie} onBackClick={selectedMovie => { this.changeSelectedMovie(selectedMovie); }} />
                    : movies.map(movie => (
                        <MovieCard key={movie._id} movie={movie} onMovieClick={(selectedMovie) => { this.changeSelectedMovie(selectedMovie) }} />
                    ))
                }
            </div>
        )
    }
}