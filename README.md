# GitFind

GitFind é uma aplicação React para buscar perfis de usuários do GitHub e listar seus repositórios públicos de forma simples e rápida.

## Funcionalidades

- Busca de usuários do GitHub pelo username.
- Exibe informações do perfil: avatar, nome, login e bio.
- Lista todos os repositórios públicos do usuário buscado, mostrando nome e descrição de cada repositório.
- Interface responsiva e amigável.

## Como usar

1. Instale as dependências:
   ```powershell
   npm install
   ```
2. Inicie o projeto:
   ```powershell
   npm start
   ```
3. Acesse [http://localhost:3000](http://localhost:3000) no navegador.

## Estrutura principal do sistema

- **Página principal:** Campo para digitar o username do GitHub e botão "Buscar".
- **Perfil:** Após buscar, exibe avatar, nome, login e bio do usuário.
- **Repositórios:** Lista de repositórios públicos do usuário, com nome e descrição.

## Componentes

- `Header`: Cabeçalho da aplicação.
- `ItemList`: Exibe informações de cada repositório.

## Tecnologias utilizadas

- React
- JavaScript (ES6+)
- CSS

## Observações

- As imagens de avatar e background estão na pasta `src/assets`.
- O sistema consome a API pública do GitHub.
- Não é necessário autenticação para uso básico.

---
Desenvolvido para fins de estudo e demonstração.

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
