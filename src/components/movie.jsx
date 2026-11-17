import useHookEX from "../hooks/hookex"

export default function GetMovie() {
    const MOVIE_KEY = 'c8ea0cb'
    const {  res, loading, error } = useHookEX(`https://www.omdbapi.com/?t=arcane&apikey=${MOVIE_KEY}`)
    
if (loading) {
    return <p>Carregando filme...</p>
  }
if (error) {
    return <p>Erro ao buscar filme</p>
  }
if (!res) {
    return <p>filme não encontrado</p>  
  }
  return (
    <div id="docs">
          <h2>Meu Filme (que não é filme) </h2>
          <h3>{res.Title}</h3>
          <img src={res.Poster} className="base" width="170"  alt="" />
          <p>Anos: {res.Year}</p>
          <p>Gênero: {res.Genre}</p>
          <p>Nota do IMDB: {res.imdbRating}</p>
          <p>Prêmios: {res.Awards}</p>
        
      
        </div>
)}