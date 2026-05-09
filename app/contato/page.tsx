export default function Contato() {
  return (
    <div className="page fade-in contato-page">
      <div className="contato-header">
        <h2 className="contato-title">✉️ Contato</h2>
        <div className="contato-divider"></div>
      </div>
      <div className="contato-grid-new">
        <div className="contato-bloco contato-instagram">
          <h3>Projeto nas redes sociais</h3>
          <a
            href="https://www.instagram.com/jiu.jitsu.na.universidade/"
            target="_blank"
            rel="noopener noreferrer"
            className="contato-btn insta-main"
          >
            <span className="contato-icon">📸</span> @jiu.jitsu.na.universidade
          </a>
        </div>

        <div className="contato-bloco contato-prof">
          <h3>Professor responsável</h3>
          <a
            href="https://www.instagram.com/proftacito.junior/"
            target="_blank"
            rel="noopener noreferrer"
            className="contato-btn prof-insta"
          >
            <span className="contato-icon">👨‍🏫</span> @proftacito.junior
          </a>
          <a
            href="https://linktr.ee/proftacitojunior?fbclid=PAZXh0bgNhZW0CMTEAAadnQGze7Dq9zXnfQ0AD1aOl0WBrwU1SuSN95qTVQHLt-M-3mntB5UusCX997Q_aem_lINrCfXSvxu7mtomPvnSMQ"
            target="_blank"
            rel="noopener noreferrer"
            className="contato-btn prof-links"
            style={{ marginTop: 7 }}
          >
            <span className="contato-icon">🔗</span> Links do professor
          </a>
        </div>

        <div className="contato-bloco contato-treino">
          <h3>Venha treinar presencialmente!</h3>
          <div className="contato-endereco">
            <span className="contato-icon">📍</span> Ginásio UFPR — Campus
            Botânico
            <br />
            R. Coração de Maria, 92
            <br />
            Jardim Botânico — Curitiba/PR
          </div>
          <a
            href="https://www.google.com/maps?ll=-25.450838,-49.239192&z=16&t=m&hl=pt-BR&gl=BR&mapclient=embed&q=R.+Cora%C3%A7%C3%A3o+de+Maria,+92+-+Jardim+Bot%C3%A2nico+Curitiba+-+PR+80210-132"
            target="_blank"
            rel="noopener noreferrer"
            className="contato-btn contato-local"
            style={{ marginTop: 8 }}
          >
            Ver no mapa
          </a>
        </div>
      </div>
    </div>
  )
}
