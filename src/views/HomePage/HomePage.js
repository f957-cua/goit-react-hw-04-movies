import React, { Component } from 'react';
import API from '../../services/movies-api';
import MoviesPage from '../../component/MoviesPage'

class HomePageView extends Component {
    state = {
        movies: [],
        error: null,
    };

    componentDidMount() {

        API.fetchTopRatedMovies()
        .then(res => {
                this.setState({
                movies: res,
                })
        })
            .catch(error => this.setState({ error }));
        }
    
    render() {
        const { movies } = this.state;

        return (<MoviesPage movies={movies}/>);
    }
}
 
export default HomePageView;