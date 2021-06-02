import React from "react";

export default class MovieCard extends React.Component {
    render() {
        const { movie, onMovieClick } = this.props;
        return (
            <div onClick={() => onMovieClick(movie)} className="movie-card">{movie.title}</div>
        )
    }
}