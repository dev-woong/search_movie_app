import React from "react"
import Movie from "./Movie"
// import axios from "axios"
class Search extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      username: null,
    }
  }

  state = {
    isLoadind: true,
    movies: [],
    value: "%EC%95%84%EC%9D%B4%EC%96%B8%EB%A7%A8",
  }
  componentDidMount() {
    this._getMovies()
  }

  _renderMovies = () => {
    const movies = this.state.movies.map((movie) => {
      return (
        <Movie
          title={movie.title}
          link={movie.link}
          image={movie.image}
          subtitle={movie.subtitle}
          pubDate={movie.pubDate}
          director={movie.director}
          actor={movie.actor}
          userRating={movie.userRating}
        />
      )
    })
    return movies
  }

  _getMovies = async () => {
    const movies = await this._callApi()
    this.setState({
      movies,
    })
  }

  _callApi = () => {
    return fetch("/api")
      .then((res) => res.json())
      .then((data) => data.items)
      .catch((err) => console.log(err))
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
  }

  render() {
    const { movies } = this.state
    return (
      <div className={movies ? "App" : "App--loading"}>
        {movies ? this._renderMovies() : "Loading"}
      </div>
    )
  }
}

export default Search
