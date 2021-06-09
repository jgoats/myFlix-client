import React from "react";
import PropTypes from "prop-types";
import "./movie-view.scss";



export default class MovieView extends React.Component {
    render() {
        const { movie, onMovieClick } = this.props;
        return (
            <div className="movie-card" onClick={() => onMovieClick(movie)}>
                <img className="image" src={"/src/images/" + movie.imageURL} />
                <div className="title">{movie.title}</div>
            </div>
        )
    }
}
MovieView.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};
