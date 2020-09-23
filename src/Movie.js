import React from "react"
// import PropTypes from "prop-types"

function Movie({ title, link, image, subtitle, pubDate, director, actor, userRating }) {
  return (
    <div>
      <div className="Movie">
        <div className="Movie__Column">
          <MoviePoster poster={image} alt={title} />
        </div>
      </div>
      <div className="Movie__column">
        <h1>{title}</h1>
        <h3>{subtitle}</h3>
        <h5>{director}</h5>
        <h5>{actor}</h5>
        <h4>{userRating}</h4>
      </div>
    </div>
  )
}

function MoviePoster({ poster, alt }) {
  return <img src={poster} alt={alt} title={alt} className="Movie__Poster" />
}

export default Movie
