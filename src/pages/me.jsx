import GetPerson from "../components/Person"
import GetDbz from "../components/Dbz"
import GetPoke from "../components/Poke"
import GetMovie from "../components/movie"
import ThemeButton from "../components/theme-button"
import '../App.css'
import NavigateButton from "../components/navigateButton"
import { useState } from "react"

export default function Me() {
  const [dark, setDark] = useState(false);
  const tema = dark ? 'temaClaro' : 'temaEscuro';

  return (
    <section id={tema}>
      <ThemeButton dark={dark} onToggle={() => setDark(!dark)} />
      <GetPerson />
      <NavigateButton path="/movie-search" nome="Pesquisa de Filmes" />
      <br />
      <NavigateButton path="/pokemon" nome="Pokémon" />
        <section className="next-steps">

          <GetDbz />
          <GetPoke />
          <GetMovie />
      </section>
    </section>
  )
}