import React, { useState } from "react";

const fotos = [
  { src: "/fotos/outubro/", turma: "Escolinha de Iniciação", mes: "outubro", ano: "2025" },
  { src: "/fotos/treino2.jpg", turma: "Treinos de Competição", mes: "setembro", ano: "2025" },
  { src: "/fotos/treino3.jpg", turma: "Escolinha de Iniciação", mes: "setembro", ano: "2025" },
  { src: "/fotos/treino4.jpg", turma: "Treinos de Competição", mes: "outubro", ano: "2025" },
];

const ordenarAnos = (fotosArr) => {
  const anos = [...new Set(fotosArr.map((f) => f.ano))];
  return anos.sort((a, b) => parseInt(b) - parseInt(a));
};

const meses = [
  "janeiro", "fevereiro", "março", "abril", "maio", "junho",
  "julho", "agosto", "setembro", "outubro", "novembro", "dezembro"
];

export default function Fotos() {
  const [ano, setAno] = useState("todos");
  const [mes, setMes] = useState("todos");
  const [turma, setTurma] = useState("todas");

  const anos = ordenarAnos(fotos);
  const mesesUsados = [...new Set(fotos.map(f => f.mes))];

  const fotosFiltradas = fotos.filter(f => 
    (ano === "todos" || f.ano === ano) &&
    (mes === "todos" || f.mes === mes) &&
    (turma === "todas" || f.turma === turma)
  );

  return (
    <div className="page fade-in fotos-section">
      <div className="fotos-header">
        <span className="fotos-icon">📸</span>
        <h2 className="fotos-titulo">Galeria de Fotos</h2>
        <div className="fotos-divider" />
      </div>
      <div className="filtros-fotos">
        <div>
          <label>
            <span role="img" aria-label="Ano">📅</span>
            <select value={ano} onChange={e => setAno(e.target.value)}>
              <option value="todos">Ano</option>
              {anos.map(anoOpt => (
                <option value={anoOpt} key={anoOpt}>{anoOpt}</option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            <span role="img" aria-label="Mês">🗓️</span>
            <select value={mes} onChange={e => setMes(e.target.value)}>
              <option value="todos">Mês</option>
              {meses.map(mesOpt =>
                mesesUsados.includes(mesOpt) ? (
                  <option value={mesOpt} key={mesOpt}>
                    {mesOpt.charAt(0).toUpperCase() + mesOpt.slice(1)}
                  </option>
                ) : null
              )}
            </select>
          </label>
        </div>
        <div>
          <label>
            <span role="img" aria-label="Turma">🥋</span>
            <select value={turma} onChange={e => setTurma(e.target.value)}>
              <option value="todas">Todas as turmas</option>
              <option value="Escolinha de Iniciação">Escolinha de Iniciação</option>
              <option value="Treinos de Competição">Treinos de Competição</option>
            </select>
          </label>
        </div>
      </div>
      <div className="galeria-estilizada">
        {fotosFiltradas.length === 0 && (
          <div className="galeria-vazia">Nenhuma foto encontrada com os filtros selecionados.</div>
        )}
        {fotosFiltradas.map((f, i) => (
          <div
            className={`galeria-card ${f.turma === "Treinos de Competição" ? "turma-compet" : "turma-escolinha"}`}
            key={f.src + i}
          >
            <div className="galeria-img-wrapper">
              <img src={f.src} alt="Foto Jiu-Jitsu" loading="lazy" draggable="false" />
              <span className="galeria-turma-badge">
                {f.turma === "Treinos de Competição" ? "🔥 Treinos de Competição" : "🌱 Escolinha de Iniciação"}
              </span>
            </div>
            <div className="galeria-info">
              <span className="galeria-data">{f.mes.charAt(0).toUpperCase() + f.mes.slice(1)} de {f.ano}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
