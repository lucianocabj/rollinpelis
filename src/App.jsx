import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { NavbarC } from './components/navbar/NavbarC';
import CarrouselC from './components/navbar/carrousel/CarrouselC'; 

import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { UserPage } from './pages/UserPage';
import { AdminPage } from './pages/AdminPage';

function App() {
  return (
    <Router>
      <NavbarC />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/admin" element={<AdminPage />} />
        <Route path="/carrousel" element={<CarrouselC />} />
      </Routes>
    </Router>
    
  );
}

export default App;



