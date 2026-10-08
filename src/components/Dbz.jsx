function Dbz({ dbz }) {
  return (
    <div id="docs">
          
          
          <h2>Meu Personagem </h2>
          <h3>{dbz.name} </h3>
          <img src={dbz.image} className="base" width="170" height="179" alt="" />
          <p>Raça: {dbz.race}</p>
        </div>
  )}
export default Dbz
