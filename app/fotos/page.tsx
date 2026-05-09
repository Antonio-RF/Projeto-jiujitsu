"use client"

import { useState } from "react"
import Image from "next/image"

const albuns = [
  {
    turma: "Escolinha de Iniciação",
    mes: "outubro",
    ano: "2025",
    fotos: Array.from(
      { length: 14 },
      (_, i) => `/fotos/EscolinhaIniciacao/outubro2025/outubro2025-${i + 1}.jpeg`
    ),
    capa: "/fotos/EscolinhaIniciacao/outubro2025/outubro2025-1.jpeg",
  },
  {
    turma: "Escolinha de Iniciação",
    mes: "setembro",
    ano: "2025",
    fotos: Array.from(
      { length: 13 },
      (_, i) => `/fotos/EscolinhaIniciacao/setembro2025/setembro2025-${i + 1}.jpeg`
    ),
    capa: "/fotos/EscolinhaIniciacao/setembro2025/setembro2025-1.jpeg",
  },
  {
    turma: "Treinos de Competição",
    mes: "setembro",
    ano: "2025",
    fotos: Array.from(
      { length: 6 },
      (_, i) => `/fotos/TreinoCompeticao/setembro2025/setembro2025-${i + 1}.png`
    ),
    capa: "/fotos/TreinoCompeticao/setembro2025/setembro2025-2.png",
  },
]

function LightboxGrid({
  fotos,
  aberto,
  onClose,
}: {
  fotos: string[]
  aberto: boolean
  onClose: () => void
}) {
  const [ampliada, setAmpliada] = useState<number | null>(null)

  if (!aberto || !fotos.length) return null

  return (
    <div className="modal-fotos-overlay" onClick={onClose}>
      <div className="modal-fotos-box-grid" onClick={(e) => e.stopPropagation()}>
        <button className="btn-close" onClick={onClose}>
          ×
        </button>
        <div className="modal-fotos-mosaico">
          {fotos.map((f, i) => (
            <div
              key={f + i}
              className="mosaico-img-wrapper"
              onClick={() => setAmpliada(i)}
            >
              <Image
                src={f}
                alt={`Foto do álbum`}
                width={150}
                height={150}
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
        {ampliada !== null && (
          <div className="lightbox-ampliada" onClick={() => setAmpliada(null)}>
            <Image
              src={fotos[ampliada]}
              alt="Foto ampliada"
              width={800}
              height={600}
              style={{ objectFit: "contain", maxWidth: "90vw", maxHeight: "90vh" }}
            />
          </div>
        )}
      </div>
    </div>
  )
}

const mesesLista = [
  "janeiro",
  "fevereiro",
  "março",
  "abril",
  "maio",
  "junho",
  "julho",
  "agosto",
  "setembro",
  "outubro",
  "novembro",
  "dezembro",
]

export default function Fotos() {
  const [f, setF] = useState({ ano: "todos", mes: "todos", turma: "todas" })
  const [modal, setModal] = useState<{ aberto: boolean; fotos: string[] }>({
    aberto: false,
    fotos: [],
  })

  const anos = Array.from(new Set(albuns.map((a) => a.ano))).sort(
    (a, b) => parseInt(b) - parseInt(a)
  )
  const meses = Array.from(new Set(albuns.map((a) => a.mes)))
  const turmas = Array.from(new Set(albuns.map((a) => a.turma)))

  const albunsFiltrados = albuns.filter(
    (a) =>
      (f.ano === "todos" || a.ano === f.ano) &&
      (f.mes === "todos" || a.mes === f.mes) &&
      (f.turma === "todas" || a.turma === f.turma)
  )

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
            <span role="img" aria-label="Ano">
              📅
            </span>
            <select
              value={f.ano}
              onChange={(e) => setF((f0) => ({ ...f0, ano: e.target.value }))}
            >
              <option value="todos">Ano</option>
              {anos.map((ano) => (
                <option key={ano} value={ano}>
                  {ano}
                </option>
              ))}
            </select>
          </label>
        </div>
        <div>
          <label>
            <span role="img" aria-label="Mês">
              🗓️
            </span>
            <select
              value={f.mes}
              onChange={(e) => setF((f0) => ({ ...f0, mes: e.target.value }))}
            >
              <option value="todos">Mês</option>
              {mesesLista.map((mes) =>
                meses.includes(mes) ? (
                  <option key={mes} value={mes}>
                    {mes.charAt(0).toUpperCase() + mes.slice(1)}
                  </option>
                ) : null
              )}
            </select>
          </label>
        </div>
        <div>
          <label>
            <span role="img" aria-label="Turma">
              🥋
            </span>
            <select
              value={f.turma}
              onChange={(e) => setF((f0) => ({ ...f0, turma: e.target.value }))}
            >
              <option value="todas">Todas as turmas</option>
              {turmas.map((turma) => (
                <option key={turma} value={turma}>
                  {turma}
                </option>
              ))}
            </select>
          </label>
        </div>
      </div>
      <div className="albuns-galeria-grid">
        {albunsFiltrados.length === 0 && (
          <div className="galeria-vazia">
            Nenhum álbum encontrado com os filtros selecionados.
          </div>
        )}
        {albunsFiltrados.map((album) => (
          <div
            className={`album-card-turma ${
              album.turma === "Escolinha de Iniciação"
                ? "green-badge"
                : "red-badge"
            }`}
            key={album.turma + album.mes + album.ano}
            onClick={() => setModal({ aberto: true, fotos: album.fotos })}
            style={{ cursor: "pointer" }}
          >
            <div className="album-img-capa">
              <Image
                src={album.capa}
                alt={`Capa do álbum`}
                width={400}
                height={250}
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
              <span className="album-badge">
                {album.turma === "Escolinha de Iniciação"
                  ? "🌱 Escolinha de Iniciação"
                  : "🔥 Treinos de Competição"}
              </span>
            </div>
            <div className="album-info">
              <b>
                {album.mes.charAt(0).toUpperCase() + album.mes.slice(1)} de{" "}
                {album.ano}
              </b>
              <span className="album-qtd-fotos">{album.fotos.length} fotos</span>
            </div>
          </div>
        ))}
      </div>
      <LightboxGrid
        fotos={modal.fotos}
        aberto={modal.aberto}
        onClose={() => setModal({ aberto: false, fotos: [] })}
      />
    </div>
  )
}
