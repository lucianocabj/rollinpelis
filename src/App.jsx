import { BrowserRouter as Router, Routes, Route } from "react-router";
import { HomePage } from "./pages/HomePage";
import { NavbarC } from "./components/navbar/NavbarC";

import { LoginPage } from "./pages/LoginPage";
import { RegisterPage } from "./pages/RegisterPage";
import { UserPage } from "./pages/UserPage";
import { AdminPage } from "./pages/AdminPage";
import { FooterC } from "./components/footer/FooterC";

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
          </Routes>
        </div>
        <FooterC />
      </div>
    </Router>
  );
}

export default App;
