import axios from 'axios'
import { useEffect, useState } from 'react'

export default function GetPokeCard({ selectPoke }) {
  const [poke, setPoke] = useState(null)
  

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("https://pokeapi.co/api/v2/pokemon/" + (selectPoke))
        setPoke(res.data)
      } catch (error) {
        console.error('Erro ao buscar dados do Pokemon:', error)
      }
    }

    getData()
  }, [selectPoke])

  if (!poke) {
    return <p>ESCOLHA UM POKÉMON PRIMEIRO!</p>
  }
  return (
    <div id="docs2">
          
          <h2>Card Pokémon</h2>
          <h3>{poke.name}</h3>
          <img src={
          poke.sprites.other.showdown.front_default ||
          poke.sprites.other["official-artwork"].front_default}  
            className="poke" 
            height="200"  
            alt={poke.name} />
          <p>Tipo: {poke.types.map((type, index) => (
      <span key={type.type.name}>
        {index > 0 && " | "}
        {type.type.name}
      </span>
    ))} | Numero da Dex: #{poke.id}</p>
     {poke.stats.map((stat) => (

      <div className="stat" key={stat.stat.name}>

        <div className="stat-name">
          <span>{stat.stat.name}</span>
          <span>{stat.base_stat}</span>
        </div>

        <div className="stat-bar">

          <div
            className="stat-fill"
            style={{
              width: `${Math.min(stat.base_stat, 150) / 150 * 100}%`
            }}
          />

        </div>

      </div>

    ))}
  </div>
)}


