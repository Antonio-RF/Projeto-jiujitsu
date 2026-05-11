import Link from "next/link"

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-brand">
          <span className="footer-title">Jiu-Jitsu na Universidade</span>
          <p className="footer-desc">
            Projeto de extensão da UFPR promovendo saúde e integração social através do Jiu-Jitsu.
          </p>
        </div>
        <div className="footer-links">
          <h4>Navegacao</h4>
          <Link href="/">Início</Link>
          <Link href="/historia">História</Link>
          <Link href="/noticias">Notícias</Link>
          <Link href="/fotos">Fotos</Link>
          <Link href="/contato">Contato</Link>
        </div>
        <div className="footer-contact">
          <h4>Contato</h4>
          <p>R. Coracao de Maria, 92</p>
          <p>Jardim Botânico, Curitiba - PR</p>
          <p>UFPR - Campus Botânico</p>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2026 UFPR - Projeto de Extensão Jiu-Jitsu na Universidade</p>
      </div>
    </footer>
  )
}
