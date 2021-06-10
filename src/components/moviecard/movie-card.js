import React from "react";
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import "./movie-card.scss";

export default class MovieCard extends React.Component {
    render() {
        const { movie, onBackClick } = this.props;
        return (
            <Card className="card">
                <Card.Img className="movie-img" variant="top" src={"/src/images/" + movie.imageURL} />
                <Card.Body>
                    <Card.Title>{movie.title}</Card.Title>
                    <Card.Text>{movie.description}</Card.Text>
                    <Card.Title>Genre</Card.Title>
                    <Card.Text>{movie.genre.name}</Card.Text>
                    <Card.Text>{movie.genre.description}</Card.Text>
                    <Card.Title>Director</Card.Title>
                    <Card.Text>{movie.director.name}</Card.Text>
                    <Card.Text>{movie.director.bio}</Card.Text>
                    <Card.Text>{movie.director.born}</Card.Text>
                    <Button onClick={() => onBackClick(movie)} variant="link">Close</Button>
                </Card.Body>
            </Card>
        )
    }
}
MovieCard.propTypes = {
    movie: PropTypes.shape({
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        imageURL: PropTypes.string.isRequired
    }).isRequired,
    onBackClick: PropTypes.func.isRequired
};