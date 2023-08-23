import './App.css'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register.tsx'
import PrincipalPage from './pages/PrincipalPage.tsx'
import WorkFlows from './pages/WorkFlows.tsx'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<PrincipalPage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/workflows' element={<WorkFlows/>}/>
      </Routes>
    </>
  )
}

export default App
