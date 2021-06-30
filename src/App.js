import './App.css';
import { Route, Switch } from "react-router-dom";
import AppBar from './component/AppBar';
import routes from './routes';
import { lazy, Suspense } from 'react';

const HomePage = lazy(() => import('./views/HomePage' /* webpackChunkName: "home-page" */));
const MoviesPage = lazy(() => import('./views/MoviesPage' /* webpackChunkName: "movies-page" */));
const MovieDetailsPage = lazy(() => import('./views/MovieDetailsPage' /* webpackChunkName: "movie-details-page" */));
const NotFoundPage = lazy(() => import('./views/NotFoundPage' /* webpackChunkName: "not-found-page" */));

const App = () => {
  return (
    <div className="App">
      <AppBar/>
      <Suspense fallback={<h1>Loading ...</h1>}>
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.movieDetails} component={MovieDetailsPage} />
          <Route exact path={routes.movies} component={MoviesPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
