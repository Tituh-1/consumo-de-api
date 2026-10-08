function Poke({ poke }) {
  return (
    <div id="docs">
          
          <h2>Meu pet</h2>
          <h3>{poke.name}</h3>
          <img src={poke.sprites.other.showdown.front_default} className="poke" width="170" height="179" alt="" />
          <p>Tipo: {poke.types[0].type.name} | Numero da Dex: #{poke.id}</p>
  </div>
)}

export default Poke
