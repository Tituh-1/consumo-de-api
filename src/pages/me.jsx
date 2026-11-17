import GetPerson from "../components/Person"
import GetDbz from "../components/Dbz"
import GetPoke from "../components/Poke"
import GetMovie from "../components/movie"
import ThemeButton from "../components/theme-button"
import '../App.css'
import NavigateButton from "../components/navigateButton"

export default function Me() {
  return (
    <section>
      <GetPerson />
      <NavigateButton path="/movie-search" nome="Pesquisa de Filmes" />
        <section className="next-steps">

          <GetDbz />
          <GetPoke />
          <GetMovie />
      </section>
    </section>
  )
}