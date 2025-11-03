import React from "react";

export default function Contato() {
  return (
    <div className="page fade-in text-center">
      <h2>✉️ Contato</h2>
      <p>Siga o projeto nas redes sociais:</p>
      <ul className="redes">
        <li>
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            📸 Instagram
          </a>
        </li>
        <li>
          <a href="https://www.facebook.com/" target="_blank" rel="noreferrer">
            👍 Facebook
          </a>
        </li>
      </ul>
      <p>
        Ou venha treinar pessoalmente no ginásio da{" "}
        <strong>UFPR – Campus Botânico</strong>.
      </p>
    </div>
  );
}
