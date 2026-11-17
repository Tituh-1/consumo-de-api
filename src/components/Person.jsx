import useHookEX from "../hooks/hookex"
export default function GetPerson() {
  const { res, loading, error } = useHookEX("https://6a79e554674f43f4db11ebc8.mockapi.io/api/person")

  if (!res) {
    return <p>Carregando pessoa...</p>
  }
  return (
    <div id="docs">
          <h1>{res[3].nome}</h1>
  </div>
)}


