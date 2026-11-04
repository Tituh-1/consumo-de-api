import {useState, useEffect} from 'react'
import axios from 'axios'

export default function SearchMovie() {
  const [movies, setMovies] = useState([])
  const [loading, setLoading] = useState(false)
  const [query, setQuery] = useState('')
  const MOVIE_KEY = 'c8ea0cb'
  useEffect(() => {
    const getData = async () => {
      setLoading(true)
      try {
        const res = await axios.get(`https://www.omdbapi.com/?s=${query}&apikey=${MOVIE_KEY}`)
        const data = res.data
        if (data.Response === 'True') {
          setMovies(data.Search)
        }else{
          setMovies([])
        }
      } catch (error) {
        console.error('Erro buscando filmes:', error)
      } finally {
        setLoading(false)
      }
    }

    const delayDebounceFn = setTimeout(() => {
      if (query.trim() !== '') {
        getData()
      }else{
        setMovies([])
      }
    }, 800)

    return () => clearTimeout(delayDebounceFn)
  }, [query])

  return (
    <div>
      <input
        className="Search"
        type="text"
        placeholder="Pesquisar Filmes..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      {loading && <p>Loading...</p>}
      <ul>
        {movies.map((movie) => (
          <li key={movie.imdbID} className="list">
            <strong>{movie.Title}</strong> ({movie.Year})
          </li>
        ))}
      </ul>
    </div>
  )
}