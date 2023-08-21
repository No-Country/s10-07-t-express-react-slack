import './App.css'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register.tsx'
import PrincipalPage from './pages/PrincipalPage.tsx'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<PrincipalPage/>}/>
        <Route path='/register' element={<Register/>}/>
      </Routes>
    </>
  )
}

export default App
