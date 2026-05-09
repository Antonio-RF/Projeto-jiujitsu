import Image from "next/image"

export default function Historia() {
  return (
    <div className="historia-page page fade-in">
      <section className="historia-hero">
        <h1 className="historia-titulo">A História do Jiu-Jitsu na UFPR</h1>
        <p className="historia-chamada">
          Uma trajetória de tradição, respeito e evolução – da linhagem Gracie,
          via mestre Elcio Figueiredo, ao projeto inovador conduzido pelo Prof.
          Dr. Tácito na UFPR.
        </p>
      </section>

      <div className="historia-mestre-card">
        <Image
          src="/elcio.png"
          alt="Mestre Elcio Figueiredo"
          width={180}
          height={180}
          className="historia-img-mestre"
        />
        <h2 className="historia-mestre-nome">Mestre Elcio Figueiredo</h2>
        <span className="badge-mestre">9º grau • Faixa Vermelha</span>
        <p className="historia-mestre-desc">
          Um dos nomes mais lendários do Jiu-Jitsu brasileiro, aluno direto de
          Rolls Gracie e Carlson Gracie, fundador da tradicional{" "}
          <strong>Integração Jiu-Jitsu</strong> em Santos/SP. Foram anos
          dedicados à formação de atletas e professores com ênfase em respeito e
          lealdade. Nos meses de setembro e novembro em Santos, celebrou-se seus
          80 anos e os 30 anos da escola — um marco para a história do Jiu-Jitsu
          nacional.
        </p>
        <span className="historia-mestre-quote">
          Respeito e Lealdade até o fim! OSS
        </span>
      </div>

      <div className="seta-linhagem">
        <span>↓</span>
      </div>

      <div className="historia-mestre-card">
        <Image
          src="/tacito.jpeg"
          alt="Professor Tácito"
          width={180}
          height={180}
          className="historia-img-mestre"
        />
        <h2 className="historia-mestre-nome">
          Prof. Dr. Tácito Pessoa de Souza Junior
        </h2>
        <span className="badge-prof">
          Fundador do projeto Jiu-Jitsu na Universidade
        </span>
        <span className="badge-mestre2">3º grau • Faixa Preta</span>
        <p className="historia-mestre-desc">
          Aluno do Mestre Elcio, Prof. Tácito é Nutricionista, Doutor e
          Pós-Doutor em Ciências do Esporte, e coordena com visão inclusiva o{" "}
          <b>Projeto Jiu-Jitsu na Universidade</b> desde seu início na UFPR.
          <br />
          Legítimo representante da tradição Integração, expandiu o legado por
          meio da educação, ciência e da prática esportiva responsável, trazendo
          o ensino gratuito e de excelência para a universidade e sociedade.
        </p>
      </div>

      <div className="seta-linhagem">
        <span>↓</span>
      </div>

      <section className="historia-projeto-ufpr">
        <h2 className="historia-projeto-titulo">
          <span role="img" aria-label="oss">
            🥋
          </span>{" "}
          O nascimento do projeto na UFPR
        </h2>
        <p className="historia-projeto-texto">
          Com raízes fincadas em décadas de tradição, o{" "}
          <b>Projeto Jiu-Jitsu na Universidade</b> foi criado para democratizar
          o acesso à arte suave. Idealizado e conduzido por Tácito Junior ―
          Professor Associado e pesquisador do Departamento de Educação
          Física/UFPR ― o projeto rapidamente se tornou referência.
        </p>
        <ul className="historia-projeto-caracteristicas">
          <li>✔️ Aberto à comunidade interna e externa</li>
          <li>✔️ Respeita todos os níveis – do iniciante ao avançado</li>
          <li>
            ✔️ Formou dezenas de alunos, monitores e impactou positivamente
            centenas de vidas
          </li>
          <li>
            ✔️ Enaltece valores: respeito, inclusão, disciplina e superação
            coletiva
          </li>
        </ul>
        <p className="historia-projeto-texto">
          Cada treino é herança de uma linhagem marcada por{" "}
          <b>seriedade, amizade e ética</b> — um espaço onde o Jiu-Jitsu vai
          muito além da luta: é transformação, ciência e vida!
        </p>
      </section>

      <section className="historia-mestre-legado">
        <blockquote className="historia-quote-grande">
          {`"O verdadeiro legado não está apenas nas vitórias no tatame, mas em cada vida transformada pelo esporte, pelo respeito e pelo conhecimento que compartilhamos."`}
          <br />
          <span>- Prof. Dr. Tácito Pessoa de Souza Junior</span>
        </blockquote>
      </section>
    </div>
  )
}
