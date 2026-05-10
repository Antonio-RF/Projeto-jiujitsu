import Image from "next/image"

export default function Historia() {
  return (
    <div className="page">
      {/* Hero */}
      <section className="page-hero">
        <h1 className="page-title">A Historia do Jiu-Jitsu na UFPR</h1>
        <p className="page-subtitle">
          Uma trajetoria de tradicao, respeito e evolucao - da linhagem Gracie ao projeto na UFPR.
        </p>
      </section>

      <div className="container">
        {/* Timeline */}
        <div className="timeline">
          {/* Mestre Elcio */}
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="person-card">
                <div className="person-image">
                  <Image
                    src="/elcio.png"
                    alt="Mestre Elcio Figueiredo"
                    width={160}
                    height={160}
                  />
                </div>
                <div className="person-info">
                  <span className="person-badge">9o grau - Faixa Vermelha</span>
                  <h2 className="person-name">Mestre Elcio Figueiredo</h2>
                  <p className="person-desc">
                    Um dos nomes mais lendarios do Jiu-Jitsu brasileiro, aluno direto de
                    Rolls Gracie e Carlson Gracie, fundador da tradicional{" "}
                    <strong>Integracao Jiu-Jitsu</strong> em Santos/SP. Foram anos
                    dedicados a formacao de atletas e professores com enfase em respeito e
                    lealdade.
                  </p>
                  <blockquote className="person-quote">
                    {`"Respeito e Lealdade ate o fim! OSS"`}
                  </blockquote>
                </div>
              </div>
            </div>
          </div>

          {/* Prof Tacito */}
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="person-card">
                <div className="person-image">
                  <Image
                    src="/tacito.jpeg"
                    alt="Professor Tacito"
                    width={160}
                    height={160}
                  />
                </div>
                <div className="person-info">
                  <span className="person-badge">4o grau - Faixa Preta</span>
                  <h2 className="person-name">Prof. Dr. Tacito Pessoa de Souza Junior</h2>
                  <span className="person-role">Fundador do projeto Jiu-Jitsu na Universidade</span>
                  <p className="person-desc">
                    Aluno do Mestre Elcio, Prof. Tácito é Nutricionista, Doutor e
                    Pós-Doutor em Ciências do Esporte. Coordena com visão inclusiva o
                    projeto desde seu inicio na UFPR, trazendo ensino gratuito e de
                    excelência para a universidade e sociedade.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Projeto */}
          <div className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="project-card">
                <h2 className="project-title">O Projeto na UFPR</h2>
                <p className="project-desc">
                  Com raizes em décadas de tradição, o <strong>Projeto Jiu-Jitsu na Universidade</strong>{" "}
                  foi criado para democratizar o acesso a arte suave. Idealizado e conduzido por
                  Tácito Junior, o projeto rapidamente se tornou referência.
                </p>
                <ul className="project-features">
                  <li>Aberto a comunidade interna e externa</li>
                  <li>Respeita todos os níveis - do iniciante ao avançado</li>
                  <li>Formou dezenas de alunos e impactou centenas de vidas</li>
                  <li>Valores: respeito, inclusão, disciplina e superação</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Quote Final */}
        <blockquote className="final-quote">
          <p>
            {`"O verdadeiro legado nao está apenas nas vitórias no tatame, mas em cada vida transformada pelo esporte, pelo respeito e pelo conhecimento que compartilhamos."`}
          </p>
          <cite>- Prof. Dr. Tácito Pessoa de Souza Junior</cite>
        </blockquote>
      </div>
    </div>
  )
}
