import React from 'react';
import PropTypes from 'prop-types';

export class MovieCard extends React.Component {
    render() {
        const { movieData, onMovieClick } = this.props;
        /*each movieCard gets a method that it uses to pass its data back to the movieview to change the state
        and rerun the render method to change the dom*/
        return <div className="movie-card" onClick={() => { onMovieClick(movieData); }}>{movieData.title}</div>;
    }
}

/*MovieCard.propTypes = {
    movieData: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        imageURL: PropTypes.string.isRequired,
        genre: PropTypes.shape({
            description: PropTypes.string.isRequired,
            name: PropTypes.string.isRequired
        }),
        director: PropTypes.shape({
            bio: PropTypes.string.isRequired,
            born: PropTypes.string.isRequired,
            death: PropTypes.String.isRequired,
            name: PropTypes.String.isRequired
        })
    }).isRequired,
    onMovieClick: PropTypes.func.isRequired
};*/