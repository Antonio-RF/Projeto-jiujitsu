export default function Contato() {
  return (
    <div className="page">
      <section className="page-hero">
        <h1 className="page-title">Contato</h1>
        <p className="page-subtitle">
          Entre em contato conosco e venha fazer parte do projeto.
        </p>
      </section>

      <div className="container">
        <div className="contact-grid">
          <div className="contact-card">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </div>
            <h3>Redes Sociais do Projeto</h3>
            <p>Siga-nos para acompanhar treinos, eventos e novidades.</p>
            <a
              href="https://www.instagram.com/jiu.jitsu.na.universidade/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              @jiu.jitsu.na.universidade
            </a>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
                <circle cx="12" cy="7" r="4"/>
              </svg>
            </div>
            <h3>Professor Responsavel</h3>
            <p>Prof. Dr. Tacito Pessoa de Souza Junior</p>
            <div className="contact-buttons">
              <a
                href="https://www.instagram.com/proftacito.junior/"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
              >
                @proftacito.junior
              </a>
              <a
                href="https://linktr.ee/proftacitojunior"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline"
              >
                Todos os links
              </a>
            </div>
          </div>

          <div className="contact-card">
            <div className="contact-icon">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/>
                <circle cx="12" cy="10" r="3"/>
              </svg>
            </div>
            <h3>Venha Treinar</h3>
            <address className="contact-address">
              Ginasio UFPR - Campus Botanico<br />
              R. Coracao de Maria, 92<br />
              Jardim Botanico, Curitiba - PR
            </address>
            <a
              href="https://www.google.com/maps?q=R.+Cora%C3%A7%C3%A3o+de+Maria,+92+Jardim+Bot%C3%A2nico+Curitiba+PR"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-primary"
            >
              Ver no mapa
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
