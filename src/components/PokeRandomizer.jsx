import axios from 'axios'
import { useEffect, useState } from 'react'
import GetPokeCard from './PokeCard'
import coresTipo from '../cores'

export default function GetRandomPoke() {
  const [poke, setPoke] = useState(null)
  const [pokeID, setPokeID] = useState(1)
  const [selectPoke, setSelectPoke] = useState(null)
  const [cores, setCores] = useState("normal")
  const [cores2, setCores2] = useState("normal")
  const handleClick = () => {
  setSelectPoke(pokeID) 
  setCores2(cores)}

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon/" + (pokeID))
        setPoke(res.data)
        setCores(res.data.types[0].type.name)
        
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
      <div id="card" style={{ backgroundColor: coresTipo[cores]}}>
          <button onClick={() => setPokeID(Math.floor(Math.random() * (1025 - 1 + 1)) + 1)}>Gerar Pokémon</button>
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
    <button onClick={handleClick}>Eu escolho você!</button>
    
    </div>
    <div id="card2" style={{ backgroundColor: coresTipo[cores2]}}>
      <GetPokeCard selectPoke={selectPoke} />
    </div>
  </div>
  
  )
}
