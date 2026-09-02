import { useEffect, useState } from 'react'
import './App.css'
import axios from 'axios'

function App() {
  const [count, setCount] = useState(0)
  const [perfil, setPerfil] = useState(0)
  const [error, setError] = useState(false)
  const [loading, setLoading] = useState(true)
  const [dbz, setDbz] = useState([])
  const [poke, setPoke] = useState([])
  const [movie, setMovie] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("https://6a79e554674f43f4db11ebc8.mockapi.io/api/person")
        const res2 = await axios.get('https://dragonball-api.com/api/characters/65')
        const res3 = await axios.get("https://pokeapi.co/api/v2/pokemon/mismagius")
        const res4 = await axios.get("http://www.omdbapi.com/?t=arcane&apikey=c8ea0cb")
        setPerfil(res.data)
        setDbz(res2.data)
        setPoke(res3.data)
        setMovie(res4.data)
        setLoading(false)
        console.log("Sucesso: ", res.data)
      } catch (error) {
        setLoading(false)
        setError(true)
    
        console.log("Deu pau, Erro: ", error )
        }
      }
      getData()
  }, [])

  if(loading){
    return(<div>Carregando...</div>)
  }
  if(error){
    return(<div>Deu pau</div>)
  }

  return (
    <>
    <h1>{perfil[3].nome}</h1>
      <section id="center">
        <div className="hero">
          
          
        </div>
        
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Clica clica tá em {count}
        </button>
      </section>

      <div className="ticks"></div>

      <section id="next-steps">
        <div id="docs">
          
          
          <h2>Meu Personagem </h2>
          <h3>{dbz.name} </h3>
          <img src={dbz.image} className="base" width="170" height="179" alt="" />
          <p>Raça: {dbz.race}</p>
        </div>
        <div id="docs">
          
          <h2>Meu pet</h2>
          <h3>{poke.name}</h3>
          <img src={poke.sprites.other.showdown.front_default} className="poke" width="170" height="179" alt="" />
          <p>Tipo: {poke.types[0].type.name} | Numero da Dex: #{poke.id}</p>
  </div>
        
        
          
           <div id="docs">
          <h2>Meu Filme (que não é filme) </h2>
          <h3>{movie.Title}</h3>
          <img src={movie.Poster} className="base" width="170" height="179" alt="" />
          <p>Anos: {movie.Year}</p>
          <p>Gênero: {movie.Genre}</p>
          <p>Nota do IMDB: {movie.imdbRating}</p>
          <p>Prêmios: {movie.Awards}</p>
        
      
        </div>
      </section>

      <div className="ticks"></div>
      <section id="spacer"></section>
    </>
  )
}

export default App
