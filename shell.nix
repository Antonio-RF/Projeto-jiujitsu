{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  buildInputs = [
    pkgs.nodejs_20
    pkgs.git
  ];

  shellHook = ''
    mkdir -p /tmp/react-tmp
    export TMPDIR=/tmp/react-tmp
    echo "🚀 Ambiente React pronto!"
    echo "Node.js versão: $(node -v)"
    echo "npm versão: $(npm -v)"
    echo ""
    echo "Para iniciar o projeto, rode:"
    echo "  npm install"
    echo "  npm start"
  '';
}

