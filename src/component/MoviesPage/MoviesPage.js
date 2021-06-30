import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './MoviesPage.css';
import MoviePreview from '../MoviePreview';

const MoviesPage = ({movies, location}) => {
    return (
        <ul className="MoviesList">
            {movies.map(({id, title, poster_path}) => (
                <li key={id}>
                    <Link to={{
                        pathname: `movies/${id}`,
                        state: {
                            from: location
                        }
                    }}>
                        <MoviePreview
                            posterPath={poster_path}
                            title={title}/>
                    </Link>
                </li>
            ))}
        </ul>
      );
}

export default withRouter(MoviesPage);