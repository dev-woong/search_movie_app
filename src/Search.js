import React from "react"
import axios from "axios"
class Search extends React.Component {
  state = {
    isLoadind: true,
    movies: [],
    value: "%EC%95%84%EC%9D%B4%EC%96%B8%EB%A7%A8",
  }

  _getSearchMovie = async () => {
    const ID_KEY = "65ZmRcZsZzv91e_ZBrjT"
    const SECRET_KEY = "uSA8qys_Dq"
    const search = this.state.value

    try {
      if (search === "") {
        this.setState({ movies: [], isLoading: false })
      } else {
        const {
          data: { items },
        } = await axios.get("https://openapi.naver.com/v1/search/movie.json", {
          params: {
            query: search,
            display: 10,
          },
          headers: {
            "X-Naver-Client-Id": ID_KEY,
            "X-Naver-Client-Secret": SECRET_KEY,
          },
        })

        this.setState({ movies: items, isLoading: false })
      }
    } catch (error) {
      console.log(error)
    }
  }

  componentDidMount() {
    this._getSearchMovie()
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this._getSearchMovie()
  }

  render() {
    const { moves, isLoading } = this.state

    return <div>{isLoading ? <div>Loading.. </div> : <div>Complete</div>}</div>
  }
}

export default Search
