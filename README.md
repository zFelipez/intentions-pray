# intentions-pray
 
---

# 🙏 Intercession

**Intercession** é uma aplicação web em desenvolvimento para **registro, organização e gerenciamento de intenções de oração**, criada com foco em simplicidade, propósito e uso de tecnologias modernas do ecossistema JavaScript.

O projeto utiliza **Next.js com App Router**, **Server Actions**, **Prisma ORM** e **PostgreSQL**.

Tenho o objetivo de principalmente praticar: Server Actions e Data access Layer no Next.Js 

---

## 🚧 Status do Projeto

O projeto está **em desenvolvimento ativo**.

* A aplicação principal está funcional
* A **área administrativa (ADM)** ainda está **em fase de implementação**
* Funcionalidades e melhorias estão sendo adicionadas de forma contínua

> ⚠️ A área ADM pode sofrer mudanças estruturais e funcionais nas próximas versões.

---

## ✨ Funcionalidades

* 📌 Cadastro de intenções de oração
* 📋 Listagem organizada das intenções
* ❌ Remoção de intenções
* ⚡ Uso de **Server Actions** do Next.js
* 🧩 Componentes reutilizáveis
* 📱 Interface moderna e responsiva

### 🔒 Área Administrativa (ADM)

* Estrutura inicial criada
* Em desenvolvimento 🚧
* Futuras funcionalidades de gerenciamento 

---

## 🛠️ Tecnologias Utilizadas

### Frontend

* **Next.js 16 (App Router)**
* **React 19**
* **TypeScript**
* **Tailwind CSS**
* **React Hook Form**
* **Zod**
* **Sonner (notificações)**

### Backend / Infraestrutura

* **Server Actions**
* **Prisma ORM**
* **PostgreSQL**
* **Node.js**

---

## 📁 Estrutura do Projeto

```txt
app/
 ├── _actions        # Server Actions (criar e remover intenções)
 ├── _components     # Componentes específicos da aplicação
 ├── _data-access   # Camada de acesso a dados
 ├── adm            # Área administrativa (em desenvolvimento)
 ├── layout.tsx
 └── page.tsx

lib/
 ├── prisma.ts      # Cliente Prisma
 └── utils.ts

prisma/
 ├── migrations
 └── schema.prisma
```
 

---

## 🚀 Como rodar o projeto localmente

### 1️⃣ Clone o repositório

```bash
git clone git@github.com:zFelipez/intentions-pray.git
cd intercession
```

### 2️⃣ Instale as dependências

```bash
npm install
```

### 3️⃣ Configure as variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
DATABASE_URL="postgresql://usuario:senha@localhost:5432/intercession"
```

### 4️⃣ Rode as migrations do banco

```bash
npx prisma migrate dev
```

### 5️⃣ Inicie o projeto

```bash
npm run dev
```

A aplicação estará disponível em:
👉 **[http://localhost:3000](http://localhost:3000)**

---

## 📜 Scripts Disponíveis

```bash
npm run dev     # Ambiente de desenvolvimento
npm run build   # Build para produção
npm run start   # Executa o build
npm run lint    # Verificação de código
```

---

## 🎯 Objetivo do Projeto

Este projeto tem como objetivo principal:

* Aprendizado prático com **Next.js moderno**
* Uso real de **Server Actions**
* Integração completa com banco de dados
* Aplicação de boas práticas de arquitetura
* Evolução contínua como desenvolvedor

---

 

---

## 👤 Autor

**Felipe**
Desenvolvedor em evolução 🚀
Projeto criado para prática, aprendizado e propósito.

---
 
