import useHookEX from '../hooks/hookex'

export default function GetPoke() {

  const { res,loading,error } = useHookEX("https://pokeapi.co/api/v2/pokemon/mismagius")
  
  if (loading) {
    return <p>Carregando personagem...</p>
  }
  if (error) {
    return <p>Erro ao buscar dados do Pokémon:</p>
  }
  if (!res) {
    return <p>Personagem não encontrado.</p>
  }
  return (
    <div id="docs">
          
          <h2>Meu pokémon</h2>
          <h3>{res.name}</h3>
          <img src={res.sprites.other.showdown.front_default} className="poke" width="170"  alt="" />
          <p>Tipo: {res.types[0].type.name} | Numero da Dex: #{res.id}</p>
  </div>
)}


