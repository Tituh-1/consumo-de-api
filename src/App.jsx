import { useState } from 'react'
import './App.css'
import GetPerson from './components/Person'
import GetMovie from './components/movie'
import GetDbz from './components/Dbz'
import GetPoke from './components/Poke'
import SearchMovie from './components/SearchMovie'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <GetPerson />
      <section id="center">
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}        >
          Clica clica tá em {count}
        </button>
      </section>

      <div className="ticks"></div>
      <section id="next-steps">
          <GetDbz />
          <GetPoke />
          <GetMovie />
      </section>
      <div className="list">
        <SearchMovie />
      </div>
      
    </>
  )
}
export default App