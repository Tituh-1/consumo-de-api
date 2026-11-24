import axios from 'axios'
import { useEffect, useState } from 'react'
import GetPokeCard from './PokeCard'
import coresTipo from '../cores'

export default function GetRandomPoke() {
  const [poke, setPoke] = useState(null)
  const [pokeID, setPokeID] = useState(1)
  const [selectPoke, setSelectPoke] = useState(null)
  const [cores, setCores] = useState(["normal","normal"])
  const [cores2, setCores2] = useState([])
  const handleClick = () => {
  setSelectPoke(pokeID) 
  setCores2(cores)}

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon/" + (pokeID))
        setPoke(res.data)
        setCores([res.data.types[0].type.name, res.data.types[1]?.type.name || "normal"])
      } catch (error) {
        console.error('Erro ao buscar dados do Pokemon:', error)
      }
    }

    getData()
  }, [pokeID])

  if (!poke) {
    return <p>Carregando personagem...</p>
  }
  return (
    <div id="randomPoke">
      <div id="card" style={{ background: `linear-gradient(135deg, ${coresTipo[cores[0]]}, ${coresTipo[cores[1]]}` }}>
        
          
          <h2>Pokémon Aleatório</h2>
          <h3>{poke.name}</h3>
          <img
  src={
    poke.sprites.other.showdown.front_default ||
    poke.sprites.other["official-artwork"].front_default}
  className="poke"
  height="200"
  alt={poke.name}
/>
          <p>Tipo: {poke.types.map((type, index) => (
      <span key={type.type.name}>
        {index > 0 && " | "}
        {type.type.name}
      </span>
    ))} | Numero da Dex: #{poke.id}</p>
{poke.stats.map((stat) => {
  const porcentagem = Math.min(stat.base_stat, 150) / 150 * 100 //é tudo frufruzinho da barra de stats

  const color =
    porcentagem < 30 ? "#ef4444" :
    porcentagem < 60 ? "#eab308" :
    porcentagem < 85 ? "#84cc16" :
    "#22c55e" //mais frufu

  return (
    <div className="stat" key={stat.stat.name}>

      <div className="stat-name">
        <span>{stat.stat.name}</span>
        <span>{stat.base_stat}</span>
      </div>

      <div className="stat-bar">
        <div
          className="stat-fill"
          style={{
            width: `${porcentagem}%`,
            backgroundColor: color
          }}
        />
      </div>

    </div>
  )
})}
<button onClick={() => setPokeID(Math.floor(Math.random() * (1025 - 1 + 1)) + 1)}>Gerar outro Pokémon</button>
    <button onClick={handleClick}>Eu escolho você!</button>
    
    </div>
    <div id="card2" style={{ background: `linear-gradient(135deg, ${coresTipo[cores2[0]]}, ${coresTipo[cores2[1]]}` }}>
  
      <GetPokeCard selectPoke={selectPoke} />
    </div>
  </div>
  
  )
}
