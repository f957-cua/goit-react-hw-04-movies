import axios from 'axios';

axios.defaults.headers.common['Authorization'] =
  'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJiNDM4MWQ5ZmY0YzliODg2MmVkZGUwYTk1ZDkzZWIyYyIsInN1YiI6IjYwODAzYTkxYTFkMzMyMDA1Nzc1YWZhZSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.mhpwUfeStVO8tfIPcWC5IqwtEsx_H70dZrQvokvFJXs';

const instance = axios.create({
    baseURL: `https://api.themoviedb.org/3`,
    params: {
        language: 'en-US',
        page: 1
    }
});

const fetchTopRatedMovies = (param) => {
    const pathTopRated = 'trending/movie/week';

    const urlParams = new URLSearchParams(param).toString();
    return instance.get(`${pathTopRated}?${urlParams}`).then(res => res.data.results) 
}

const fetchByQuery = (param) => {
    const pathByQuery = 'search/movie';

    const urlParams = new URLSearchParams(param).toString();
    return instance.get(`${pathByQuery}?${urlParams}`).then(res => res.data.results) 
}

const fetchById = (param) => {
    const pathById = `movie/${param}`;

    return instance.get(`${pathById}`).then(res => res.data);
}

const fetchByActors = (param) => {
    const pathByActor = `movie/${param}/credits`;

    return instance.get(`${pathByActor}`).then(res => res.data);
}

const fetchByReviews = (param) => {
    const pathByReviews = `movie/${param}/reviews`;

    return instance.get(`${pathByReviews}`).then(res => res.data.results);
}


export default { fetchTopRatedMovies, fetchByQuery, fetchById, fetchByActors, fetchByReviews };