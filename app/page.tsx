import Image from "next/image"
import Link from "next/link"

export default function Home() {
  return (
    <div className="page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-logos">
            <Image
              src="/logo_jiujitsu.png"
              alt="Logo Jiu-Jitsu"
              width={120}
              height={120}
              className="hero-logo"
            />
            <Image
              src="/logo_jiujitsu2.png"
              alt="Logo Integracao"
              width={120}
              height={120}
              className="hero-logo"
            />
          </div>
          <h1 className="hero-title">Jiu-Jitsu na Universidade</h1>
          <p className="hero-subtitle">
            Treinos gratuitos abertos a comunidade academica e externa - UFPR
          </p>
          <div className="hero-actions">
            <Link href="/contato" className="btn btn-primary">
              Comece a treinar
            </Link>
            <Link href="/historia" className="btn btn-secondary">
              Conheca nossa historia
            </Link>
          </div>
        </div>
      </section>

      {/* Sobre Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Sobre o Projeto</h2>
            <div className="section-divider"></div>
          </div>
          <div className="about-content">
            <p className="about-text">
              <strong>Jiu-Jitsu na Universidade</strong> e um projeto de extensao{" "}
              gratuito e aberto da UFPR, coordenado pelo{" "}
              <strong>Prof. Dr. Tacito Pessoa de Souza Junior</strong> - faixa
              preta 3o grau. Ha mais de 15 anos, o projeto promove saude,
              bem-estar e integracao social por meio do ensino do Jiu-Jitsu.
            </p>
            <div className="features-grid">
              <div className="feature-card">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
                  </svg>
                </div>
                <h3>Missao</h3>
                <p>Democratizar o esporte em um ambiente inclusivo e acolhedor para todos.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h3>Valores</h3>
                <p>Respeito, disciplina, convivencia e superacao individual e coletiva.</p>
              </div>
              <div className="feature-card">
                <div className="feature-icon">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="12" cy="12" r="10"/>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2M9 9h.01M15 9h.01"/>
                  </svg>
                </div>
                <h3>Para quem?</h3>
                <p>Estudantes, servidores e comunidade externa - iniciantes ou experientes!</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Horarios Section */}
      <section className="section section-dark">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Horarios das Aulas</h2>
            <div className="section-divider"></div>
          </div>
          <div className="schedule-grid">
            <div className="schedule-card schedule-beginner">
              <div className="schedule-badge">Iniciantes</div>
              <h3>Escolinha de Iniciacao</h3>
              <ul className="schedule-list">
                <li>
                  <span className="label">Dias:</span>
                  <span className="value">Segunda, Quarta e Sexta</span>
                </li>
                <li>
                  <span className="label">Horario:</span>
                  <span className="value">12h as 13h15</span>
                </li>
                <li>
                  <span className="label">Publico:</span>
                  <span className="value">Exclusivo para iniciantes</span>
                </li>
              </ul>
              <p className="schedule-desc">
                Ideal para quem nunca treinou. Foco em fundamentos e tecnica basica.
                Apos tres meses, pode migrar para os treinos de competicao.
              </p>
            </div>
            <div className="schedule-card schedule-advanced">
              <div className="schedule-badge">Avancado</div>
              <h3>Treinos de Competicao</h3>
              <ul className="schedule-list">
                <li>
                  <span className="label">Dias:</span>
                  <span className="value">Segunda a Sexta</span>
                </li>
                <li>
                  <span className="label">Horario:</span>
                  <span className="value">18h30 as 20h30</span>
                </li>
                <li>
                  <span className="label">Publico:</span>
                  <span className="value">Praticantes ou pos-Escolinha</span>
                </li>
              </ul>
              <p className="schedule-desc">
                Para quem deseja competir ou se desafiar mais! Tecnicas avancadas,
                condicionamento e preparacao para campeonatos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Localizacao Section */}
      <section className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Como Chegar</h2>
            <div className="section-divider"></div>
          </div>
          <div className="location-content">
            <div className="location-info">
              <address className="location-address">
                <strong>Ginasio UFPR - Campus Botanico</strong>
                <br />
                R. Coracao de Maria, 92
                <br />
                Jardim Botanico, Curitiba - PR
              </address>
              <a
                href="https://www.google.com/maps?q=R.+Cora%C3%A7%C3%A3o+de+Maria,+92+Jardim+Bot%C3%A2nico+Curitiba+PR"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
              >
                Abrir no Google Maps
              </a>
            </div>
            <div className="location-map">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.494732935373!2d-49.24979832530492!3d-25.44215777753886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4351ccae937%3A0x57ec16f623d2f179!2sR.%20Cora%C3%A7%C3%A3o%20de%20Maria%2C%2092%20-%20Jardim%20Bot%C3%A2nico%2C%20Curitiba%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1730585405672!5m2!1spt-BR!2sbr"
                width="100%"
                height="350"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                title="Mapa UFPR"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
