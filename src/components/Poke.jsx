import axios from 'axios'
import { useEffect, useState } from 'react'

export default function GetPoke() {
  const [poke, setPoke] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon/mismagius")
        setPoke(res.data)
      } catch (error) {
        console.error('Erro ao buscar dados do Pokemon:', error)
      }
    }

    getData()
  }, [])

  if (!poke) {
    return <p>Carregando personagem...</p>
  }
  return (
    <div id="docs">
          
          <h2>Meu pet</h2>
          <h3>{poke.name}</h3>
          <img src={poke.sprites.other.showdown.front_default} className="poke" width="170" height="179" alt="" />
          <p>Tipo: {poke.types[0].type.name} | Numero da Dex: #{poke.id}</p>
  </div>
)}


