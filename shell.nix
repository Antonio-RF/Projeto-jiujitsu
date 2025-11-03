{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  name = "react-dev-shell";

  buildInputs = [
    pkgs.nodejs_20           # Node.js LTS atual
    pkgs.nodePackages.npm    # npm (gerenciador de pacotes)
    pkgs.git                 # para clonar e gerenciar repositórios
  ];

  shellHook = ''
    echo "🚀 Ambiente React pronto!"
    echo "Node.js versão: $(node -v)"
    echo "npm versão: $(npm -v)"
    echo ""
    echo "Para iniciar o projeto, rode:"
    echo "  npm install"
    echo "  npm run dev"
  '';
}
