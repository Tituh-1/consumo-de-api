import axios from 'axios'
import { useEffect, useState } from 'react'

export default function GetPoke() {
  const [poke, setPoke] = useState(null)
  const [pokeID, setPokeID] = useState(1)

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon/" + (pokeID))
        setPoke(res.data)
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
    <div id="docs">
          <button onClick={() => setPokeID(Math.floor(Math.random() * (1025 - 1 + 1)) + 1)}>Gerar Pokémon</button>
          <h2>Pokémon Aleatório</h2>
          <h3>{poke.name}</h3>
          <img src={poke.sprites.other.showdown.front_default} className="poke" width="170"  alt="" />
          <p>Tipo: {poke.types[0].type.name} | Numero da Dex: #{poke.id}</p>
  </div>
)}


