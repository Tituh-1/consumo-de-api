import GetRandomPoke from "../components/PokeRandomizer"
import ThemeButton from "../components/theme-button"
import '../App.css'
import NavigateButton from "../components/navigateButton"

export default function Pokemon() {
  return (
<section className="MovieSearch">
      <NavigateButton path="/" nome="Voltar" />
      <h1>Pokémon</h1>
      <div className="pokemonList">
        <GetRandomPoke />
      </div>
      </section>
  )}