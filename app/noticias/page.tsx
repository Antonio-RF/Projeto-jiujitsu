const noticias = [
  {
    titulo: "UFPR oferece treinos gratuitos de Jiu-Jitsu para a comunidade",
    link: "https://ufpr.br/uppr-oferta-treinos-gratuitos-de-jiu-jitsu-para-a-comunidade/",
    data: "17/10/2022",
  },
  {
    titulo: "Equipe de Jiu-Jitsu da UFPR obtem diversas conquistas no ano de 2016",
    link: "https://ufpr.br/equipe-de-jiu-jitsu-da-ufpr-obtem-diversar-conquistas-no-ano-de-2016/",
    data: "16/11/2016",
  },
  {
    titulo: "Equipe de jiu-jitsu da UFPR conquista 12 medalhas no Paranaense",
    link: "https://ufpr.br/equipe-de-jiu-jitsu-da-ufpr-conquista-12-medalhas-no-paranaense/",
    data: "30/07/2015",
  },
  {
    titulo: "Jiu-jitsu da UFPR termina o ano com varias conquistas",
    link: "https://ufpr.br/jiu-jitsu-da-ufpr-termina-o-ano-com-varias-conquistas/",
    data: "30/07/2015",
  },
  {
    titulo: "Equipe de jiu-jitsu da UFPR e vice-campea do Campeonato Paranaense",
    link: "https://ufpr.br/equipe-de-jiu-jitsu-da-ufpr-e-vice-campea-do-campeonato-paranaense/",
    data: "11/09/2014",
  },
  {
    titulo: "Equipe de Jiu Jitsu da UFPR conquista 11 medalhas em campeonato paranaense",
    link: "https://ufpr.br/equipe-de-jiu-jitsu-da-ufpr-conquista-11-medalhas-em-campeonato-paranaense/",
    data: "10/07/2014",
  },
  {
    titulo: "Disciplina de Jiu Jitsu e oferecida no curso de Educacao Fisica",
    link: "https://ufpr.br/disciplina-de-jiu-jitsu-e-oferecida-no-curso-de-educacao-fisica/",
    data: "24/02/2014",
  },
  {
    titulo: "Interessados podem ter aulas de graca na UFPR",
    link: "https://ufpr.br/interessados-em-praticar-jiu-jitsu-podem-ter-aulas-de-graca-na-ufpr/",
    data: "17/09/2013",
  },
  {
    titulo: "Aluna de Educacao Fisica da UFPR e campea de Jiu-Jitsu",
    link: "https://ufpr.br/aluna-de-educacao-fisica-da-ufpr-e-campea-de-jiu-jitsu-2/",
    data: "22/03/2012",
  },
]

export default function Noticias() {
  return (
    <div className="page">
      <section className="page-hero">
        <h1 className="page-title">Noticias</h1>
        <p className="page-subtitle">
          Acompanhe as conquistas e novidades do projeto Jiu-Jitsu na Universidade.
        </p>
      </section>

      <div className="container">
        <div className="news-grid">
          {noticias.map((n, idx) => (
            <article className="news-card" key={idx}>
              <div className="news-date">{n.data}</div>
              <h3 className="news-title">{n.titulo}</h3>
              <a
                href={n.link}
                target="_blank"
                rel="noreferrer"
                className="news-link"
              >
                Ler no site da UFPR
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="16" height="16">
                  <path d="M7 17L17 7M17 7H7M17 7V17"/>
                </svg>
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  )
}
