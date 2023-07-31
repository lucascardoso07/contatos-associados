# Aplicação de Cadastro e Gerenciamento de Cadastro

Este projeto é uma aplicação de cadastro e gerenciamento de cadastro, desenvolvida utilizando as seguintes tecnologias:

## Front-end

- React
- React Router Dom
- React Hooks Form
- Axios
- TypeScript

## Back-end

- NestJS
- Prisma

## Como executar o projeto

1. Certifique-se de ter o Node.js e o npm instalados em sua máquina.

2. Clone este repositório para sua máquina local:

```bash
git clone https://github.com/lucascardoso07/contatos-associados
```
3. Navegue para o diretório do projeto:
```bash
cd frontend
```
4. Instale as dependências do projeto:
```bash
npm install
```
5.Inicie o servidor de desenvolvimento para o front-end:
```bash
npm start
```
6.Em outro terminal, navegue para o diretório da parte do back-end:
```bash
cd backend
```
7.Instale as dependências do back-end:
```bash
npm install
```
8.Inicie o servidor de desenvolvimento para o back-end:
```bash
npm run start:dev
```
## Rotas da aplicação

### Usuários

- **POST /user** - Cria um novo usuário.
- **GET /user** - Obtém a lista de todos os usuários cadastrados.
- **GET /user/{id}** - Obtém informações de um usuário específico pelo seu ID.
- **PATCH /user/{id}** - Atualiza informações de um usuário específico pelo seu ID.
- **DELETE /user/{id}** - Remove um usuário específico pelo seu ID.

### Contatos

- **POST /contact** - Cria um novo contato.
- **GET /contact** - Obtém a lista de todos os contatos cadastrados.
- **GET /contact/{id}** - Obtém informações de um contato específico pelo seu ID.
- **PATCH /contact/{id}** - Atualiza informações de um contato específico pelo seu ID.
- **DELETE /contact/{id}** - Remove um contato específico pelo seu ID.

### Login

- **POST /login** - Realiza o login do usuário na aplicação.

## Link da API

A Doc da API do projeto está disponível em: `http://localhost:3000/api`.


## Observações

Certifique-se de que o servidor do back-end esteja em execução antes de tentar acessar a aplicação. Para isso, verifique o terminal onde você iniciou o servidor do back-end e verifique se não há erros na inicialização.

Este projeto é apenas uma demonstração de uma aplicação básica de cadastro e gerenciamento de cadastros. Sinta-se à vontade para expandi-lo e adicionar recursos adicionais conforme necessário.

Se tiver alguma dúvida ou encontrar algum problema, sinta-se à vontade para abrir uma issue no repositório ou entrar em contato comigo.

Aproveite a aplicação e bons estudos!


