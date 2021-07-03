import React from 'react';

const MovieReview = ({ reviews }) => {
        return (
            <>
                {reviews.length > 0 ? (<ul>
                    {reviews.map(review =>
                        <li key={review.id}
                        className="AppBarComponent">
                            <h2>Author: {review.author}</h2>
                            <p>Review: {review.content}</p>
                        </li>)}
                </ul>) : <h2>no reviews for this movie</h2>}
            </>
         );
}
 
export default MovieReview;