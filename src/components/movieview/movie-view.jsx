import React from "react";
import PropTypes from "prop-types";
import "./movie-view.scss";

export default class MovieView extends React.Component {
    render() {
        const { movie, onMovieClick } = this.props;
        return (
            <div onClick={() => onMovieClick(movie)} className="movie-card">{movie.title}</div>
        )
    }
}
MovieView.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};
