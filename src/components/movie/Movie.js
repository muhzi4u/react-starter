import React from 'react';
import PropTypes from 'prop-types';

function Movie(props) {
  return (
    <div className="card">
      <div className="card-image waves-effect waves-block waves-light">
        <img alt="movie-poster" className="activator" src={props.moviePoster} />
      </div>
      <div className="card-content">
        <span className="card-title activator grey-text text-darken-4">
          {props.movieTitle}
          <i className="material-icons right">{props.movieReleaseDate}</i>
        </span>
        <p>
          <a target="_blank" href={props.movieUrl}>
            More Info
          </a>
        </p>
      </div>
    </div>
  );
}
Movie.propTypes = {
  movieTitle: PropTypes.string,
  moviePoster: PropTypes.string,
  movieUrl: PropTypes.string,
  movieReleaseDate: PropTypes.string,
};
Movie.defaultProps = {
  movieTitle: 'No Title',
  moviePoster:
    'https://image.tmdb.org/t/p/w300_and_h450_bestv2/fLV91pC3ngxVgllY0fmlDmW0kcM.jpgo',
  movieUrl: 'hhttps://www.themoviedb.org/movie',
  movieReleaseDate: '2018-04-14',
};

export default Movie;