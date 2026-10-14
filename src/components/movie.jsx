import axios from 'axios'
import { useEffect, useState } from 'react'

export default function GetMovie() {
  const [movie, setMovie] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("http://www.omdbapi.com/?t=arcane&apikey=c8ea0cb")
        setMovie(res.data)
      } catch (error) {
        console.error('Erro ao buscar dados do filme:', error)
      }
    }

    getData()
  }, [])

  if (!movie) {
    return <p>Carregando filme...</p>
  }
  return (
    <div id="docs">
          <h2>Meu Filme (que não é filme) </h2>
          <h3>{movie.Title}</h3>
          <img src={movie.Poster} className="base" width="170" height="179" alt="" />
          <p>Anos: {movie.Year}</p>
          <p>Gênero: {movie.Genre}</p>
          <p>Nota do IMDB: {movie.imdbRating}</p>
          <p>Prêmios: {movie.Awards}</p>
        
      
        </div>
)}