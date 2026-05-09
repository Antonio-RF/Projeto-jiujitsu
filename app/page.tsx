import Image from "next/image"

export default function Home() {
  return (
    <div className="page fade-in">
      <div className="home-hero">
        <div className="home-logos-row">
          <Image
            src="/logo_jiujitsu.png"
            alt="Logo Jiu-Jitsu"
            width={160}
            height={160}
            className="home-logo"
          />
          <Image
            src="/logo_jiujitsu2.png"
            alt="Logo Jiu-Jitsu 2"
            width={160}
            height={160}
            className="home-logo"
          />
        </div>
        <h1 className="home-title">Projeto Jiu-Jitsu na Universidade</h1>
        <p className="home-tagline">
          Treinos gratuitos abertos à comunidade acadêmica e externa — UFPR
        </p>
      </div>

      <section className="home-section custom-sobre-section">
        <div className="sobre-layout">
          <div className="sobre-title-block">
            <div>
              <h2 className="sobre-title">Sobre o Projeto</h2>
              <div className="sobre-divider" />
            </div>
          </div>
          <div className="sobre-content">
            <p>
              <strong>Jiu-Jitsu na Universidade</strong> é um projeto de extensão{" "}
              <b>gratuito e aberto</b> da <b>UFPR</b>, coordenado pelo{" "}
              <strong>Prof. Dr. Tácito Pessoa de Souza Junior</strong> — faixa
              preta 3º grau. Há mais de <b>15 anos</b>, o projeto promove saúde,
              bem-estar e integração social por meio do ensino do Jiu-Jitsu,
              aproximando diferentes públicos da universidade ao esporte em um
              ambiente acolhedor e transformador.
            </p>
            <ul className="sobre-list">
              <li>
                <span className="sobre-bullet">✓</span> <b>Missão:</b>{" "}
                democratizar o esporte, proporcionando um ambiente inclusivo e
                acolhedor para todos.
              </li>
              <li>
                <span className="sobre-bullet">✓</span> <b>Valores:</b>{" "}
                respeito, disciplina, convivência e superação individual e
                coletiva.
              </li>
              <li>
                <span className="sobre-bullet">✓</span> <b>Para quem?</b>{" "}
                estudantes, servidores, comunidade externa, iniciantes ou
                experientes!
              </li>
              <li>
                <span className="sobre-bullet">✓</span> <b>Coordenação:</b>{" "}
                Prof. Tácito Pessoa de Souza Junior (Depto. de Educação
                Física/UFPR)
              </li>
            </ul>
            <blockquote className="sobre-quote">
              {`"Mais do que treinar, é fazer parte de uma família, aprendendo e se superando junto."`}
            </blockquote>
          </div>
        </div>
      </section>

      <section className="home-section custom-horarios-section">
        <div className="horarios-header">
          <h2 className="sobre-title">Horários das Aulas</h2>
          <div className="sobre-divider" />
        </div>
        <div className="horarios-cards">
          <div className="horarios-card card-escolinha">
            <div className="horarios-card-header">
              <span className="card-icon">🌱</span>
              <h3>Escolinha de Iniciação</h3>
            </div>
            <ul>
              <li>
                <b>Quando:</b>{" "}
                <span className="horarios-dia">Segunda, Quarta e Sexta</span>
              </li>
              <li>
                <b>Horário:</b>{" "}
                <span className="horarios-hora">12h às 13h15</span>
              </li>
              <li>
                <b>Público:</b>{" "}
                <span className="horarios-publico">Só para iniciantes</span>
              </li>
            </ul>
            <p className="horarios-desc">
              <span className="horarios-highlight">
                Ideal para quem nunca treinou ou está começando.
              </span>{" "}
              Foco em fundamentos, técnica básica, ambientação ao esporte.
              <br />
              <em>
                Após três meses, pode migrar para os treinos de competição.
              </em>
            </p>
          </div>
          <div className="horarios-card card-competicao">
            <div className="horarios-card-header">
              <span className="card-icon">🔥</span>
              <h3>Treinos de Competição</h3>
            </div>
            <ul>
              <li>
                <b>Quando:</b>{" "}
                <span className="horarios-dia">Segunda a Sexta</span>
              </li>
              <li>
                <b>Horário:</b>{" "}
                <span className="horarios-hora">18h30 às 20h30</span>
              </li>
              <li>
                <b>Público:</b>{" "}
                <span className="horarios-publico">
                  Já pratica Jiu-Jitsu ou concluiu a Escolinha
                </span>
              </li>
            </ul>
            <p className="horarios-desc">
              <span className="horarios-highlight">
                Para quem deseja competir ou se desafiar mais!
              </span>{" "}
              Técnicas avançadas, condicionamento, sparring, preparação para
              campeonatos e evolução pessoal.
            </p>
          </div>
        </div>
      </section>

      <section className="info home-mapa mapa-simples">
        <div className="mapa-header">
          <h2 className="sobre-title">
            <span className="emoji-localizacao">🗺️</span> Como chegar
          </h2>
          <div className="sobre-divider mapa-divider" />
        </div>
        <address className="mapa-endereco-clean">
          R. Coração de Maria, 92
          <br />
          Jardim Botânico, Curitiba - PR
          <br />
          <span className="mapa-ufpr-txt">
            Dentro da UFPR – Campus Botânico
          </span>
        </address>
        <div className="mapa-iframe-wrapper clean">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3601.494732935373!2d-49.24979832530492!3d-25.44215777753886!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94dce4351ccae937%3A0x57ec16f623d2f179!2sR.%20Cora%C3%A7%C3%A3o%20de%20Maria%2C%2092%20-%20Jardim%20Bot%C3%A2nico%2C%20Curitiba%20-%20PR!5e0!3m2!1spt-BR!2sbr!4v1730585405672!5m2!1spt-BR!2sbr"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            title="Mapa UFPR"
          />
        </div>
      </section>
    </div>
  )
}
