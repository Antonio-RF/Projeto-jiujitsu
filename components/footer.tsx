import Link from "next/link"

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <span className="footer-title">Jiu-Jitsu na Universidade</span>
          <p className="footer-desc">
            Projeto de extensao da UFPR promovendo saude e integracao social atraves do Jiu-Jitsu.
          </p>
        </div>
        <div className="footer-links">
          <h4>Navegacao</h4>
          <Link href="/">Inicio</Link>
          <Link href="/historia">Historia</Link>
          <Link href="/noticias">Noticias</Link>
          <Link href="/fotos">Fotos</Link>
          <Link href="/contato">Contato</Link>
        </div>
        <div className="footer-contact">
          <h4>Contato</h4>
          <p>R. Coracao de Maria, 92</p>
          <p>Jardim Botanico, Curitiba - PR</p>
          <p>UFPR - Campus Botanico</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2025 UFPR - Projeto de Extensao Jiu-Jitsu na Universidade</p>
      </div>
    </footer>
  )
}
