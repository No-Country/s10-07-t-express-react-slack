import './App.css'
import io from 'socket.io-client'

const socket = io("/");
function App() {

  return (
    <>
      <h1 className="text-3xl font-bold underline text-red-600">
        HOLA MUNDO
      </h1>
    </>
  )
}

export default App
