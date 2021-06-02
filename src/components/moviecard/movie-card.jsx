import React from "react";
import PropTypes from 'prop-types';

export default class MovieCard extends React.Component {
    render() {
        const { movie, onMovieClick } = this.props;
        return (
            <div onClick={() => onMovieClick(movie)} className="movie-card">{movie.title}</div>
        )
    }
}

MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};