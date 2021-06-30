import React from 'react';
import '../MovieDetailsPage/MovieDetailsPage.css';

const MoviePreview = ({posterPath, title}) => {
    const path = `https://www.themoviedb.org/t/p/w500${posterPath}`;
    return (
        <>
            <div className="MoviePreview-thumb">
            <img src={path}
                alt={title}
                className="movie-card__poster" />
            </div>
            <h2
                className="movie-card__title">
                {title}
            </h2>
        </>
     );
}
 
export default MoviePreview;