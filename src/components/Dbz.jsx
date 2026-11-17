import useHookEX from '../hooks/hookex'

export default function GetDbz() {
 const {res,loading,error} = useHookEX('https://dragonball-api.com/api/characters/65')

 if(loading) return <p>Carregando personagem...</p>
 if(error) return <p>Erro ao buscar dados do DBZ:</p>
 if(!res) return <p>Nenhum personagem encontrado.</p>

 return (
    <div id="docs">
      <h2>Meu Personagem</h2>
      <h3>{res.name}</h3> 
      <img
        src={res.image}
        className="base"
        width="150"
        
        alt={res.name}
      />

      <p>Raça: {res.race}</p>
    </div>
  )
}