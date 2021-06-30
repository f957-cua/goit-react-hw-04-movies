import React from 'react';
import './MovieDetailsPage.css';

const MovieDetailsPage = ({ posterPath, rating, title, description, id, props, onClick }) => {
    const path = `https://www.themoviedb.org/t/p/w500${posterPath}`;
    return (
        <div key={id}
            className="movie-card">
            <button type="button"
            onClick={onClick}>return away</button>
            <img src={path}
                alt={title}
                className="movie-card__poster" />
            <div
                className="movie-card__rating">{rating}/10
            </div>
            <h2
                className="movie-card__title">
                {title}
            </h2>
            <p
                className="movie-card__description">{description}
            </p>
        </div>
     );
}
 
export default MovieDetailsPage;