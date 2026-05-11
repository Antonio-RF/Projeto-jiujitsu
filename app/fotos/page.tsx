"use client"

import { useState } from "react"
import Image from "next/image"

const albuns = [
  {
    turma: "Treinos de Competição",
    mes: "abril",
    ano: "2026",
    fotos: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abril2026-1-k47AAGJf6SHZVB3dFfLlMZF5JJGSrV.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abril2026-2-ZVeSVRScgdgJiwBW1pQsk8flCkCudV.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abril2026-4-28w9pKE4ttPU4UsKm3gWS6c25ztjgl.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abril2026-5-M6p2qraqwul6yPs78TNNTOUPZ20TL1.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abril2026-6-IGR7h9XQe5TTwPQbF1uweryz8Wp3lW.jpeg",
    ],
    capa: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/abril2026-1-k47AAGJf6SHZVB3dFfLlMZF5JJGSrV.jpeg",
  },
  {
    turma: "Treinos de Competição",
    mes: "março",
    ano: "2026",
    fotos: [
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marco2026-1.3-45rLPa8lU1G8GdV7NrKhLFPbV27I3t.png",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marco2026-1.2-P9fIyNp7ZyEEP50CMiRpkPNZ9JoRjx.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marco2026-2-hDibJwAK15sbORyleTHhzGX1ucGSyI.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marco2026-3-WC2bdKSgOurGMkBz8b4bTzwzIHxqhz.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marco2026-4-KLmd2B4itBArmFJX3Y4PtaMl8lmpNf.jpeg",
      "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marco2026-6-Sgyyo8lHAcInrcrTY7Oczy1hXHe6nu.jpeg",
    ],
    capa: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/marco2026-1.3-45rLPa8lU1G8GdV7NrKhLFPbV27I3t.png",
  },
  {
    turma: "Escolinha de Iniciação",
    mes: "outubro",
    ano: "2025",
    fotos: [
		"/fotos/EscolinhaIniciacao/outubro2025/outubro2025-5.jpeg"
    ],
    capa: "/fotos/EscolinhaIniciacao/outubro2025/outubro2025-5.jpeg",
  },
  {
    turma: "Escolinha de Iniciação",
    mes: "setembro",
    ano: "2025",
    fotos: [
    		"/fotos/EscolinhaIniciacao/setembro2025/setembro2025-10.jpeg",
			"/fotos/EscolinhaIniciacao/setembro2025/setembro2025-13.jpeg",
			"/fotos/EscolinhaIniciacao/setembro2025/setembro2025-6.jpeg"
	],
    capa: "/fotos/EscolinhaIniciacao/setembro2025/setembro2025-10.jpeg",
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
    <div className="lightbox-overlay" onClick={onClose}>
      <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose}>
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" width="24" height="24">
            <line x1="18" y1="6" x2="6" y2="18"/>
            <line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <div className="lightbox-grid">
          {fotos.map((f, i) => (
            <div
              key={f + i}
              className="lightbox-thumb"
              onClick={() => setAmpliada(i)}
            >
              <Image
                src={f}
                alt={`Foto ${i + 1}`}
                width={200}
                height={200}
                style={{ objectFit: "cover" }}
                unoptimized={f.startsWith("http")}
              />
            </div>
          ))}
        </div>
        {ampliada !== null && (
          <div className="lightbox-full" onClick={() => setAmpliada(null)}>
            <Image
              src={fotos[ampliada]}
              alt="Foto ampliada"
              width={1200}
              height={800}
              style={{ objectFit: "contain", maxWidth: "90vw", maxHeight: "90vh" }}
              unoptimized={fotos[ampliada].startsWith("http")}
            />
          </div>
        )}
      </div>
    </div>
  )
}

const mesesLista = [
  "janeiro", "fevereiro", "março", "abril", "maio", "junho",
  "julho", "agosto", "setembro", "outubro", "novembro", "dezembro",
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

  const formatMes = (mes: string) => {
    return mes.charAt(0).toUpperCase() + mes.slice(1)
  }

  return (
    <div className="page">
      <section className="page-hero">
        <h1 className="page-title">Galeria de Fotos</h1>
        <p className="page-subtitle">
          Momentos registrados dos treinos e eventos do projeto.
        </p>
      </section>

      <div className="container">
        <div className="filters">
          <div className="filter-group">
            <label htmlFor="ano">Ano</label>
            <select
              id="ano"
              value={f.ano}
              onChange={(e) => setF((f0) => ({ ...f0, ano: e.target.value }))}
            >
              <option value="todos">Todos</option>
              {anos.map((ano) => (
                <option key={ano} value={ano}>{ano}</option>
              ))}
            </select>
          </div>
          <div className="filter-group">
            <label htmlFor="mes">Mês</label>
            <select
              id="mes"
              value={f.mes}
              onChange={(e) => setF((f0) => ({ ...f0, mes: e.target.value }))}
            >
              <option value="todos">Todos</option>
              {mesesLista.filter(m => meses.includes(m)).map((mes) => (
                <option key={mes} value={mes}>
                  {formatMes(mes)}
                </option>
              ))}
            </select>
          </div>
          <div className="filter-group">
            <label htmlFor="turma">Turma</label>
            <select
              id="turma"
              value={f.turma}
              onChange={(e) => setF((f0) => ({ ...f0, turma: e.target.value }))}
            >
              <option value="todas">Todas</option>
              {turmas.map((turma) => (
                <option key={turma} value={turma}>{turma}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="albums-grid">
          {albunsFiltrados.length === 0 && (
            <p className="no-results">Nenhum álbum encontrado com os filtros selecionados.</p>
          )}
          {albunsFiltrados.map((album) => (
            <div
              className={`album-card ${album.turma === "Escolinha de Iniciação" ? "album-beginner" : "album-advanced"}`}
              key={album.turma + album.mes + album.ano}
              onClick={() => setModal({ aberto: true, fotos: album.fotos })}
            >
              <div className="album-cover">
                <Image
                  src={album.capa}
                  alt={`Álbum ${album.mes} ${album.ano}`}
                  width={400}
                  height={250}
                  style={{ objectFit: "cover", width: "100%", height: "100%" }}
                  unoptimized={album.capa.startsWith("http")}
                />
                <span className="album-badge">
                  {album.turma === "Escolinha de Iniciação" ? "Iniciação" : "Competição"}
                </span>
              </div>
              <div className="album-info">
                <h3>{formatMes(album.mes)} de {album.ano}</h3>
                <span className="album-count">{album.fotos.length} fotos</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      <LightboxGrid
        fotos={modal.fotos}
        aberto={modal.aberto}
        onClose={() => setModal({ aberto: false, fotos: [] })}
      />
    </div>
  )
}
