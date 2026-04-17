# 🚀 Frontend - Orkut VNW

Aplicação frontend desenvolvida em **React** que simula uma rede social inspirada no Orkut, permitindo autenticação de usuários e gerenciamento de postagens.

---

## 🛠️ Tecnologias

* ⚛️ React
* ⚡ Vite
* 🌐 Axios
* 🎨 SCSS Modules
* 🔐 JWT (Autenticação)

---

## ✨ Funcionalidades

* 🔐 Cadastro de usuário
* 🔑 Login com autenticação
* 📝 Criar postagens
* 📄 Listar postagens
* ✏️ Editar postagens
* 🗑️ Deletar postagens
* 🔒 Proteção de rotas

---

## 🧠 Aprendizados

Durante o desenvolvimento deste projeto, foram trabalhados conceitos importantes como:

* Integração com API REST
* Manipulação de estado com React
* Uso de interceptors com Axios
* Tratamento de erros (frontend e backend)
* Debugging de aplicações reais
* Consumo e persistência de token JWT

---

## 🔗 API utilizada

```bash
https://node-js-api-orkut-vnw.onrender.com/
```

---

## ▶️ Como rodar o projeto

```bash
# Clone o repositório
git clone https://github.com/alexaniatoma/frontend-api-orkut-vnw.git

# Acesse a pasta
cd frontend-api-orkut-vnw

# Instale as dependências
npm install

# Rode o projeto
npm run dev
```

---

## 📁 Estrutura do projeto

```bash
src/
 ├── components/
 │    └── post/
 ├── pages/
 │    ├── home/
 │    ├── login/
 │    └── register/
 ├── services/
 │    └── api.js
```

---

## 🔐 Autenticação

O token JWT é armazenado no `localStorage` e enviado automaticamente em cada requisição via interceptor do Axios.

---

## ⚠️ Observações

* A API pode levar alguns segundos para responder (deploy gratuito)
* Certifique-se de utilizar as rotas corretas:

  * `/usuarios`
  * `/postagem`

---

## 📚 Créditos

Este projeto foi desenvolvido com base em um projeto original proposto pelo professor no curso da **Vai na Web**.

Foram realizadas melhorias e ajustes, incluindo:

* Correções de bugs
* Ajustes na integração com API
* Implementação e correção de funcionalidades CRUD
* Refatoração de código

---

## 🚀 Melhorias futuras

* ⏳ Loading e feedback visual
* 🔔 Notificações (toast)
* 📱 Responsividade
* 🎨 Melhorias de UI/UX
* 🧪 Testes automatizados

---

## 👩‍💻 Desenvolvido por

**Alexania Toma**

📌 Projeto para fins educacionais e portfólio.


