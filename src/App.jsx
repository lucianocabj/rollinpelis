import { BrowserRouter as Router, Routes, Route } from 'react-router'
import { HomePage } from './pages/HomePage' 
import { NavbarC } from './components/navbar/NavbarC'
// import { LoginPage } from './pages/LoginPage'
// import { RegisterPage } from './pages/RegisterPage'
// import { UserPage } from './pages/userPage'
// import { AdminPage } from './pages/AdminPage'



export const App = () => {
  return (
    <Router>
      <NavbarC/>
      <Routes>
        <Route path='/' element={<HomePage />} />
        {/* <Route path='/user' element={<UserPage />} /> */}
        {/* <Route path='/admin' element={<AdminPage />} /> */}
        {/* <Route path='/iniciar-sesion' element={<LoginPage />} /> */}
        {/* <Route path='/registrarse' element= {<RegisterPage />} /> */}
      </Routes>
    </Router>
  )
}

