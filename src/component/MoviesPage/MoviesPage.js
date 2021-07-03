import React from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import './MoviesPage.css';
import MoviePreview from '../MoviePreview';

const MoviesPage = ({movies, location}) => {
    return (
        <ul className="MoviesList">
            {movies.map(({id, title, poster_path}) => (
                <li key={id}>
                    <NavLink to={{
                        pathname: `movies/${id}`,
                        state: {
                            from: location
                        }
                    }}
                    className="NavLink">
                        <MoviePreview
                            posterPath={poster_path}
                            title={title}/>
                    </NavLink>
                </li>
            ))}
        </ul>
      );
}

export default withRouter(MoviesPage);