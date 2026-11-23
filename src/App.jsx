import { Routes, Route, BrowserRouter } from "react-router-dom"
import Me from "./pages/me"
import MovieSearch from "./pages/movie-search"
import Pokemon from "./pages/pokemon"
import './App.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Me />} />
        <Route path="/movie-search" element={<MovieSearch />} />
        <Route path="/pokemon" element={<Pokemon />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App