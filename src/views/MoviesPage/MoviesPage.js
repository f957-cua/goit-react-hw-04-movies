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