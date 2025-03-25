import { BrowserRouter as Router, Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage";
import { NavbarC } from "./components/navbar/NavbarC";

import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { UserPage } from "./pages/UserPage";
import { AdminPage } from "./pages/AdminPage";
import { FooterC } from "./components/footer/FooterC";
import Favoritos from "./components/favoritos/favoritos";
import SobreNosotrosPage from "./pages/SobreNosotrosPage";
import { ContactoPage } from "./pages/ContactoPage";


function App() {
  return (
    <Router>
      <div className="app-container">
        <NavbarC />
        <div className="content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/iniciar-sesion" element={<LoginPage />} />
            <Route path="/registrarse" element={<RegisterPage />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/contacto" element={<ContactoPage  />} />
            <Route path="/sobre-nosotros" element={<SobreNosotrosPage />} />
          </Routes>
        </div>
        <FooterC />
      </div>
    </Router>
  );
}

export default App;
