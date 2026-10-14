import axios from 'axios'
import { useEffect, useState } from 'react'

export default function GetPerson() {
  const [person, setPerson] = useState(null)

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("https://6a79e554674f43f4db11ebc8.mockapi.io/api/person")
        setPerson(res.data)
      } catch (error) {
        console.error('Erro ao buscar dados da Pessoa:', error)
      }
    }

    getData()
  }, [])

  if (!person) {
    return <p>Carregando pessoa...</p>
  }
  return (
    <div id="docs">
          <h1>{person[3].nome}</h1>
  </div>
)}


