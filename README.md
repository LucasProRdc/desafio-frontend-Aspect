# Frontend - Desafio Aspect

Este é o frontend do desafio técnico, desenvolvido com **React**. O projeto consome a API construída com **NestJS** e exibe as informações de exames, datas disponíveis e permite agendar consultas.

## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/) (opcional, se usado)
- [Tailwind CSS](https://tailwindcss.com/)
- [Axios](https://axios-http.com/)
- [Context API](https://reactjs.org/docs/context.html) (gerenciamento de estado global)

## 📦 Funcionalidades

- Listagem de exames
- Seleção de exame e datas disponíveis
- Agendamento de consultas
- Reset de estado
- Consumo de API REST

## 🛠️ Como rodar o projeto

1. Clone o repositório

bash
git clone https://github.com/SEU_USUARIO/SEU_REPO_FRONTEND.git
cd nome-da-pasta-do-frontend

2. Instale as dependências

npm install
# ou
yarn

3. Configure a URL da API
No arquivo src/lib/axios.ts (ou equivalente), certifique-se de apontar para a URL correta da sua API:

export const api = axios.create({
  baseURL: 'http://localhost:3000',
});

4. Inicie o projeto

npm run dev
# ou
yarn dev

5. Acesse no navegador
Abra http://localhost:5173 (ou a porta definida pelo Vite/React) para visualizar a aplicação.

