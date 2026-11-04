import { useState } from 'react'
import './App.css'


import GetPerson from './components/Person'
import GetMovie from './components/movie'
import GetDbz from './components/Dbz'
import GetPoke from './components/Poke'
import SearchMovie from './components/SearchMovie'
import ThemeButton from './components/theme-button'

function App() {
  const [count, setCount] = useState(0)
  const [dark,setDark] = useState(false)
  const tema = dark? 'temaClaro' : 'temaEscuro'
console.log("API KEY:", import.meta.env.MOVIE_KEY);
  return (
    <section id={tema}>
      <ThemeButton dark={dark} onToggle={() => setDark(!dark)} />
      <GetPerson />
      <section className="center">
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}        >
          Clica clica tá em {count}
        </button>
      </section>
      <section className="next-steps">
          <GetDbz />
          <GetPoke />
          <GetMovie />
      </section>
      <div className="list">
        <SearchMovie />
      </div>
    </section>
  )
}
export default App