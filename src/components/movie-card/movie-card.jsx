import React from 'react';

export class MovieCard extends React.Component {
    render() {
        const { movieData, onMovieClick } = this.props;
        /*each movieCard gets a method that it uses to pass its data back to the movieview to change the state
        and rerun the render method to change the dom*/
        return <div className="movie-card" onClick={() => { onMovieClick(movieData); }}>{movieData.Title}</div>;
    }
}