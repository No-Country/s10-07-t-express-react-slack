import './App.css'
import { Route, Routes } from 'react-router-dom'
import io from 'socket.io-client'
import Register from './pages/Register.tsx'

const socket = io("/");
function App() {

  return (
    <>
      <Routes>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </>
  )
}

export default App
