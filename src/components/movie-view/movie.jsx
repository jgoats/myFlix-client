import React from "react";

export class MovieView extends React.Component {
    render() {
        const { movie, onBackClick } = this.props;
        return (
            /* the data passed into the movie prop is used to fill in these divs with its data.
            the onBackClick prop containes a method from the main-view component that allows the movieView to change
            the selectedMovie state back to null when clicked*/
            <div className="movie-view">
                <div className="movie-poster">
                    <img src={movie.ImagePath} />
                </div>
                <div className="movie-title">
                    <span className="label">Title</span>
                    <span className="value">{movie.Title}</span>
                </div>
                <div className="movie-description">
                    <span className="label">Description</span>
                    <span className="value">{movie.Description}</span>
                </div>
                <button onClick={() => { onBackClick(null) }}>Return to All Movies</button>
            </div>
        )
    }
}