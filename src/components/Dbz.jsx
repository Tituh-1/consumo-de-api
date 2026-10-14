import axios from 'axios'
import { useEffect, useState } from 'react'

export default function GetDbz() {
  const [dbz, setDbz] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get('https://dragonball-api.com/api/characters/65')
        setDbz(res.data)
      } catch (error) {
        console.error('Erro ao buscar dados do DBZ:', error)
      }
    }

    getData()
  }, [])

  if (!dbz) {
    return <p>Carregando personagem...</p>
  }

  return (
    <div id="docs">
      <h2>Meu Personagem</h2>

      <h3>{dbz.name}</h3>

      <img
        src={dbz.image}
        className="base"
        width="170"
        height="179"
        alt={dbz.name}
      />

      <p>Raça: {dbz.race}</p>
    </div>
  )
}