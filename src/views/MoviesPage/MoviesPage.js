import React, { Component } from 'react';
import MoviesPage from '../../component/MoviesPage';
import API from '../../services/movies-api';
import SearchForm from '../SearchForm/SearchForm';

class MoviesPageView extends Component {
    state = {
        query: '',
        movies: [],
        error: null,
    };
    componentDidMount() {
        if (localStorage.getItem('movies') !== null) {
            const firstMovies = localStorage.getItem('movies');
            const parsedMovies = JSON.parse(firstMovies)
            console.log(parsedMovies)
            this.setState({
                movies: parsedMovies,
            })
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevState.query !== this.state.query) {
        this.onSubmitHandler()
        }
    }
    onSubmit = (data) => {
        this.setState((prev) => ({
        query: data,
        page: 1,
        movies: [],
        error: null
        }))
    }
  
  onSubmitHandler = () => {
    const { query } = this.state;

      API.fetchByQuery({ query: query })
        .then(res => {
            this.setState({
            movies: res,
            })
    })
        .catch(error => this.setState({ error }))
  };
    componentWillUnmount() {
        this.state.movies.length > 0 && localStorage.setItem('movies', JSON.stringify(this.state.movies))
    }
    render() {
        const { movies } = this.state;

        return (
            <>
                <SearchForm onSubmit={this.onSubmit} />
                <MoviesPage
                    movies={movies}
                />
            </>
        );
    }
}
 
export default MoviesPageView;