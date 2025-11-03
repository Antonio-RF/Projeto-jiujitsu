import React from "react";

export default function Noticias() {
  const noticias = [
    {
      titulo: "UPPR oferece treinos gratuitos de Jiu-Jitsu para a comunidade",
      link: "https://ufpr.br/uppr-oferta-treinos-gratuitos-de-jiu-jitsu-para-a-comunidade/",
    },
    {
      titulo: "Interessados podem ter aulas de graça na UFPR",
      link: "https://ufpr.br/interessados-em-praticar-jiu-jitsu-podem-ter-aulas-de-graca-na-ufpr/",
    },
    {
      titulo: "Estudante da UFPR vence Campeonato Paranaense de Jiu-Jitsu",
      link: "https://ufpr.br/estudante-da-ufpr-vence-segunda-etapa-do-campeonato-paranaense-de-jiu-jitsu/",
    },
    {
      titulo: "Aluna de Educação Física da UFPR é campeã de Jiu-Jitsu",
      link: "https://ufpr.br/aluna-de-educacao-fisica-da-ufpr-e-campea-de-jiu-jitsu-2/",
    },
  ];

  return (
    <div className="page fade-in">
      <h2>📰 Notícias</h2>
      <div className="noticias-container">
        {noticias.map((n) => (
          <a href={n.link} target="_blank" rel="noreferrer" className="noticia-card">
            <h3>{n.titulo}</h3>
            <p>Clique para ler no site da UFPR →</p>
          </a>
        ))}
      </div>
    </div>
  );
}
