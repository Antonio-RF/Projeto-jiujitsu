
import Image from "next/image";

const professores = [
  {
    nome: "Prof. Dr. Tácito Pessoa de Souza Junior",
    cargo: "Coordenador e Professor",
    faixa: "Preta 4º Grau",
    corFaixa: "#1a1a1a",
    corGrau: "#FFD700", // dourado para os graus
    foto: "/tacito.png",
    descricao:
      "Doutor e Mestre em Ciências do Esporte pela UNICAMP e Pós-Doutor em Exercise Science pela Appalachian State University (EUA). Professor Associado do Departamento de Educação Física da UFPR e docente permanente do Programa de Pós-Graduação (Mestrado e Doutorado) em Educação Física. Pesquisador nas áreas de Bioquímica do Exercício, Suplementação Nutricional e Treinamento de Força, com colaborações internacionais com universidades dos EUA e Canadá. Idealizador e coordenador do projeto \"Jiu-Jitsu na Universidade\" desde sua criação, há mais de 14 anos.",
  },
  {
    nome: "Bernardo Nunes Paixão",
    cargo: "Professor — Turma de Iniciação",
    faixa: "Marrom",
    corFaixa: "#5C3317",
    corGrau: null,
    foto: "/bernardo.png",
    descricao:
      "Aluno formado dentro do próprio projeto, Bernardo está há mais de 4 anos no Jiu-Jitsu na Universidade. Sua dedicação e evolução técnica o levaram a assumir um papel de liderança já na faixa roxa, quando começou a auxiliar nas aulas da turma de iniciação. Hoje, como faixa marrom, é referência de comprometimento e exemplo vivo de que o projeto transforma vidas — de aluno a professor.",
  },
];

// Componente de badge da faixa
function FaixaBadge({ faixa, corFaixa, corGrau }: { faixa: string; corFaixa: string; corGrau: string | null }) {
  return (
    <div className="flex items-center gap-2 mb-4">
      {/* Representação visual da faixa */}
      <div
        className="relative h-3 w-20 rounded-sm shadow-inner"
        style={{ backgroundColor: corFaixa, border: "1px solid rgba(255,255,255,0.15)" }}
      >
        {/* Ponta vermelha/branca + grau (para faixa preta) */}
        {corGrau && (
          <div
            className="absolute right-0 top-0 h-full w-5 rounded-r-sm flex items-center justify-center"
            style={{ backgroundColor: "#c0392b" }}
          >
            <div
              className="h-2 w-0.5 rounded-full"
              style={{ backgroundColor: corGrau }}
            />
          </div>
        )}
      </div>
      <span
        className="text-xs font-bold uppercase tracking-widest px-2 py-0.5 rounded"
        style={{
          backgroundColor: corFaixa,
          color: corFaixa === "#1a1a1a" ? "#FFD700" : "#fff",
          border: "1px solid rgba(255,255,255,0.2)",
          fontSize: "0.65rem",
        }}
      >
        {faixa}
      </span>
    </div>
  );
}

export default function Professores() {
  return (
    <section
      id="professores"
      className="relative py-20 overflow-hidden"
      style={{
        background: "linear-gradient(180deg, #0f0f0f 0%, #1a1008 50%, #0f0f0f 100%)",
      }}
    >
      {/* Linhas decorativas de fundo */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            "repeating-linear-gradient(90deg, #c8a84b 0px, #c8a84b 1px, transparent 1px, transparent 80px)",
        }}
      />

      <div className="relative max-w-6xl mx-auto px-4">
        {/* Cabeçalho da seção */}
        <div className="text-center mb-16">
          <p
            className="text-xs font-bold uppercase tracking-[0.4em] mb-3"
            style={{ color: "#c8a84b" }}
          >
            Equipe
          </p>
          <h2
            className="text-4xl md:text-5xl font-black uppercase mb-4"
            style={{
              color: "#fff",
              fontFamily: "Georgia, 'Times New Roman', serif",
              letterSpacing: "-0.01em",
            }}
          >
            Nossos Professores
          </h2>
          <div
            className="mx-auto mt-4 h-px w-24"
            style={{ background: "linear-gradient(90deg, transparent, #c8a84b, transparent)" }}
          />
        </div>

        {/* Cards dos professores */}
        <div className="flex flex-col md:flex-row gap-10 justify-center items-stretch">
          {professores.map((prof, idx) => (
            <div
              key={idx}
              className="relative flex flex-col items-center md:items-start md:flex-row gap-0 flex-1 max-w-xl"
              style={{
                background: "linear-gradient(135deg, rgba(255,255,255,0.04) 0%, rgba(200,168,75,0.06) 100%)",
                border: "1px solid rgba(200,168,75,0.2)",
                borderRadius: "2px",
                overflow: "hidden",
              }}
            >
              {/* Barra lateral dourada */}
              <div
                className="hidden md:block absolute left-0 top-0 bottom-0 w-1"
                style={{ background: "linear-gradient(180deg, #c8a84b, #8b6914)" }}
              />

              {/* Foto do professor — estatueta com fundo transparente */}
              <div
                className="relative flex-shrink-0 flex items-end justify-center pt-6 md:pt-0"
                style={{ width: "180px", minHeight: "240px" }}
              >
                {/* Sombra projetada embaixo da estatueta */}
                <div
                  className="absolute bottom-0 left-1/2 -translate-x-1/2 w-24 h-4 rounded-full"
                  style={{
                    background: "radial-gradient(ellipse, rgba(200,168,75,0.3) 0%, transparent 70%)",
                    filter: "blur(6px)",
                  }}
                />
                <Image
                  src={prof.foto}
                  alt={`Foto de ${prof.nome}`}
                  width={160}
                  height={230}
                  className="object-contain object-bottom drop-shadow-2xl"
                  style={{ maxHeight: "240px", width: "auto" }}
                />
              </div>

              {/* Conteúdo de texto */}
              <div className="flex-1 p-6 md:pl-4 md:pr-6">
                <FaixaBadge
                  faixa={prof.faixa}
                  corFaixa={prof.corFaixa}
                  corGrau={prof.corGrau}
                />

                <h3
                  className="font-black text-lg leading-tight mb-1"
                  style={{
                    color: "#fff",
                    fontFamily: "Georgia, 'Times New Roman', serif",
                  }}
                >
                  {prof.nome}
                </h3>

                <p
                  className="text-xs font-bold uppercase tracking-widest mb-4"
                  style={{ color: "#c8a84b" }}
                >
                  {prof.cargo}
                </p>

                <p
                  className="text-sm leading-relaxed"
                  style={{ color: "rgba(255,255,255,0.65)" }}
                >
                  {prof.descricao}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
