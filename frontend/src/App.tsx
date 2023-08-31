import './App.css'
import { Route, Routes } from 'react-router-dom'
import Register from './pages/Register.tsx'
import PrincipalPage from './pages/PrincipalPage.tsx'
import WorkFlows from './pages/WorkFlows.tsx'
import Login from './pages/Login.tsx'
import WorkspaceFirstStep from './pages/WorkspaceFirstStep.tsx'
import WorkspaceSecondStep from './pages/WorkspaceSecondStep.tsx'
import Recovery from './pages/Recovery.tsx'
import PasswordReset from './components/auth/PasswordReset.tsx'
import Reset from "./pages/Reset.tsx"

function App() {

  return (
    <>
      <Routes>
        <Route path='/' element={<PrincipalPage/>}/>
        <Route path='/register' element={<Register/>}/>
        <Route path='/login' element={<Login/>}/>
        <Route path='/recover' element={<Recovery/>}/>
        <Route path='/reset-password/:id/:token' element={<Reset/>}/>
        <Route path='/workspaces' element={<WorkFlows/>}/>
        <Route path='/workspaces/firststep' element={<WorkspaceFirstStep/>}/>
        <Route path='/workspaces/secondstep' element={<WorkspaceSecondStep/>}/>
      </Routes>
    </>
  )
}

export default App
