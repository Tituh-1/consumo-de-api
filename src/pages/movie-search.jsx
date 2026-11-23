import SearchMovie from "../components/SearchMovie"
import { useState } from "react"
import '../App.css'
import NavigateButton from "../components/navigateButton"
import ThemeButton from "../components/theme-button"

export default function MovieSearch() {
     const [dark,setDark] = useState(false)
     const tema = dark? 'temaClaro' : 'temaEscuro'
  return (
     <section id={tema}>
           <ThemeButton dark={dark} onToggle={() => setDark(!dark)} />
    <section className="movieSearch">
      <NavigateButton path="/" nome="Voltar" />
      <h1>Pesquisa de Filmes</h1>
      <div className="movieList">
        <SearchMovie />
      </div>
      </section>
       </section>
  )
}