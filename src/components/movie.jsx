function Movie({ movie }) {
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
export default Movie
