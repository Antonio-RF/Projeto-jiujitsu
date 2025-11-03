import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Noticias from "./pages/Noticias";
import Fotos from "./pages/Fotos";
import Contato from "./pages/Contato";
import logo from "./logo_jiujitsu.png";
import "./App.css";

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
      <header className="top-nav">
        <img src={logo} alt="Logo" className="nav-logo" />
        <nav>
          <Link to="/">Início</Link>
          <Link to="/noticias">Notícias</Link>
          <Link to="/fotos">Fotos</Link>
          <Link to="/contato">Contato</Link>
        </nav>
      </header>

      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/noticias" element={<Noticias />} />
          <Route path="/fotos" element={<Fotos />} />
          <Route path="/contato" element={<Contato />} />
        </Routes>
      </main>

      <footer>
        <p>© 2025 UFPR — Projeto de Extensão Jiu-Jitsu na Universidade</p>
      </footer>
    </Router>
  );
}

export default App;


