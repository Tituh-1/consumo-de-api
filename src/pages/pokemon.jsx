import GetRandomPoke from "../components/PokeRandomizer"
import ThemeButton from "../components/theme-button"
import '../App.css'
import NavigateButton from "../components/navigateButton"
import { useState } from "react"

export default function Pokemon() {
  const [dark,setDark] = useState(false)
       const tema = dark? 'temaClaro' : 'temaEscuro'
  return (
<section id={tema}>
      <ThemeButton dark={dark} onToggle={() => setDark(!dark)} />
        <br />
      <NavigateButton path="/" nome="Voltar" />
      <h1>Pokémon</h1>
      <br></br>
      <div className="pokemonList">
        <GetRandomPoke />
      </div>
      </section>
  )}