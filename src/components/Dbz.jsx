import axios from 'axios'
import { useEffect, useState } from 'react'

export default function GetDbz() {
  const [dbz, setDbz] = useState(null)
 // const [count, setCount] = useState(1)

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get('https://dragonball-api.com/api/characters/65' /*+ count*/)
        setDbz(res.data)
      } catch (error) {
        console.error('Erro ao buscar dados do DBZ:', error)
      }
    }

    getData()
  }, [/*count*/])

  if (!dbz) {
    return <p>Carregando personagem...</p>
  }

  return (
    <div id="docs">
      <h2>Meu Personagem</h2>
      {/*  <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}        >
          Proximo personagem
        </button> */}
      <h3>{dbz.name}</h3> 

      <img
        src={dbz.image}
        className="base"
        width="150"
        
        alt={dbz.name}
      />

      <p>Raça: {dbz.race}</p>
    </div>
  )
}