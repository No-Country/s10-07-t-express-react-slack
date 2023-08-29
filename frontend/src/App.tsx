import './App.css'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register.tsx'
import PrincipalPage from './pages/PrincipalPage.tsx'
import WorkFlows from './pages/WorkFlows.tsx'
import Login from './pages/Login.tsx'
import WorkspaceFirstStep from './pages/WorkspaceFirstStep.tsx'
import WorkspaceSecondStep from './pages/WorkspaceSecondStep.tsx'

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<PrincipalPage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/workspaces' element={<WorkFlows/>}/>
        <Route path='/workspaces/firststep' element={<WorkspaceFirstStep/>}/>
        <Route path='/workspaces/secondstep' element={<WorkspaceSecondStep/>}/>
      </Routes>
    </>
  )
}

export default App
