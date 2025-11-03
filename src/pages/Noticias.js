import React from "react";

export default function Noticias() {
  const noticias = [
    {
      titulo: "UFPR oferece treinos gratuitos de Jiu-Jitsu para a comunidade",
      link: "https://ufpr.br/uppr-oferta-treinos-gratuitos-de-jiu-jitsu-para-a-comunidade/",
      data: "17/10/2022"
    },
    {
      titulo: "Equipe de Jiu–Jitsu da UFPR obtém diversas conquistas no ano de 2016",
      link: "https://ufpr.br/equipe-de-jiu-jitsu-da-ufpr-obtem-diversar-conquistas-no-ano-de-2016/",
      data: "16/11/2016"
    },
    {
      titulo: "Equipe de jiu-jitsu da UFPR conquista 12 medalhas no Paranaense",
      link: "https://ufpr.br/equipe-de-jiu-jitsu-da-ufpr-conquista-12-medalhas-no-paranaense/",
      data: "30/07/2015"
    },
    {
      titulo: "Jiu-jitsu da UFPR termina o ano com várias conquistas",
      link: "https://ufpr.br/jiu-jitsu-da-ufpr-termina-o-ano-com-varias-conquistas/",
      data: "30/07/2015"
    },
    {
      titulo: "Equipe de jiu-jitsu da UFPR é vice-campeã do Campeonato Paranaense",
      link: "https://ufpr.br/equipe-de-jiu-jitsu-da-ufpr-e-vice-campea-do-campeonato-paranaense/",
      data: "11/09/2014"
    },
    {
      titulo: "Equipe de Jiu Jitsu da UFPR conquista 11 medalhas em campeonato paranaense",
      link: "https://ufpr.br/equipe-de-jiu-jitsu-da-ufpr-conquista-11-medalhas-em-campeonato-paranaense/",
      data: "10/07/2014"
    },
    {
      titulo: "Disciplina de Jiu Jitsu é oferecida no curso de Educação Física",
      link: "https://ufpr.br/disciplina-de-jiu-jitsu-e-oferecida-no-curso-de-educacao-fisica/",
      data: "24/02/2014"
    },
    {
      titulo: "Interessados podem ter aulas de graça na UFPR",
      link: "https://ufpr.br/interessados-em-praticar-jiu-jitsu-podem-ter-aulas-de-graca-na-ufpr/",
      data: "17/09/2013"
    },
    {
      titulo: "Aluna de Educação Física da UFPR é campeã de Jiu-Jitsu",
      link: "https://ufpr.br/aluna-de-educacao-fisica-da-ufpr-e-campea-de-jiu-jitsu-2/",
      data: "22/13/2012"
    },
  ];

  return (
    <div className="page fade-in noticias-page">
      <header className="noticias-topo">
        <span className="noticias-emoji">📰</span>
        <h2 className="noticias-titulo">Notícias</h2>
        <div className="noticias-subdiv"></div>
      </header>
      <div className="noticias-pilocards">
        {noticias.map((n, idx) => (
          <div className="noticia-block" key={idx}>
            <div className="noticia-data">{n.data}</div>
            <h3 className="noticia-titulo">{n.titulo}</h3>
            <a
              href={n.link}
              target="_blank"
              rel="noreferrer"
              className="noticia-botao"
            >
              Ler no site da UFPR <span className="noticia-arrow">↗</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
}