import React, { useState } from "react";

export default function Fotos() {
  const [filtro, setFiltro] = useState("todos");
  const fotos = [
    { src: "/fotos/treino1.jpg", mes: "outubro", ano: "2025" },
    { src: "/fotos/treino2.jpg", mes: "setembro", ano: "2025" },
  ];

  return (
    <div className="page fade-in">
      <h2>📸 Galeria de Fotos</h2>

      <div className="filtros">
        <select onChange={(e) => setFiltro(e.target.value)}>
          <option value="todos">Todos</option>
          <option value="outubro">Outubro</option>
          <option value="setembro">Setembro</option>
        </select>
      </div>

      <div className="galeria">
        {fotos
          .filter((f) => filtro === "todos" || f.mes === filtro)
          .map((f, i) => (
            <img key={i} src={f.src} alt="Treino" />
          ))}
      </div>
    </div>
  );
}
