import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import MovieDetailsPage from '../../component/MovieDetailsPage';
import MovieCast from '../../component/MovieDetailsPage/MovieCast';
import MovieReview from '../../component/MovieDetailsPage/MovieReview';
import API from '../../services/movies-api';
import routes from '../../routes';

class MovieDetailsPageView extends Component {
    state = {
        movies: [],
        casts: [],
        reviews: [],
    }
    
    componentDidMount() {

        const { movieId } = this.props.match.params;

        API.fetchById(movieId)
        .then(res => {
                this.setState({
                movies: res,
                })
        })
            .catch(error => this.setState({ error }))
            .finally(() => this.setState({ isLoading: false }));
        
        API.fetchByActors(movieId)
            .then(res => {
                this.setState({
                    casts: res.cast,
                })
            })
        .catch(error => this.setState({ error }))
            .finally(() => this.setState({ isLoading: false }));
        
        API.fetchByReviews(movieId)
        .then(res => {
                this.setState({
                reviews: res,
                })
        })
        .catch(error => this.setState({ error }))
        .finally(() => this.setState({ isLoading: false }));
        
        }

    onClick = () => {
        const { location, history } = this.props;

        history.push(location?.state?.from || routes.home)
    }
    
    render() {
        const { movies, casts, reviews } = this.state;
        const { match } = this.props;

        return (
            <>
                <MovieDetailsPage
                    posterPath={movies.poster_path}
                    rating={movies.vote_average}
                    id={movies.id}
                    title={movies.title}
                    description={movies.overview}
                    props={this.props}
                    onClick={this.onClick}
                />
                <h1>Additional information</h1>
                <ul>
                    <li><NavLink to={`${match.url}/credits`}>Cast</NavLink></li>
                    <li><NavLink to={`${match.url}/reviews`}>Reviews</NavLink></li>
                </ul>

                    <Route
                        path={`${match.path}/credits`}
                        render={props => (<MovieCast {...props} casts={casts} />)} />
                    <Route
                        path={`${match.path}/reviews`}
                        render={props => (<MovieReview {...props} reviews={reviews} />)} />
            </>
         );
    }
}
 
export default MovieDetailsPageView;