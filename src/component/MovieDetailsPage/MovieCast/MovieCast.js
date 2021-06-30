import React from 'react';
import './index.css';

const MovieCast = ({ casts }) => {
    
        return (
            <>
                <ul className="MovieCast">
                    {casts.map(cast =>
                        <li key={cast.id}>
                            <img
                                src={`https://www.themoviedb.org/t/p/w500${cast.profile_path}`} alt={cast.name}
                                />
                            <h2>Character: {cast.character}</h2>
                            <h3>Actor name: {cast.name}</h3>
                        </li>)}
                </ul>
            </>
         );
}
 
export default MovieCast;