# Next.js Monorepo

Estudo sobre criar um único repositório com diversos projetos

## Índice

- [Recursos Necessários](#Recursos-Necessários)
- [Arquitetura](#Arquitetura)
- [Estrutura dos Arquivos](#Estrutura-dos-Arquivos)
- [Dependências](#Dependências)
- [Setup](#Setup)
- [Como Utilizar](#Como-Utilizar)
- [Deploy](#Deploy)
- [Funcionalidades](#Funcionalidades)
- [Anotações Úteis](#Anotações-Úteis)

---

## Recursos Necessários

Abaixo, o que você vai precisar para rodar a aplicação no seu computador:

- [Editor de texto](https://code.visualstudio.com/download) (Recomendado: Visual Studio Code)
- [Node.JS](https://nodejs.org) 14+
- [npm](https://www.npmjs.com/get-npm) (Acompanha instalação do Node.js)
- [lerna](https://www.npmjs.com/package/lerna) (global)

---

## Arquitetura

Next.js e React.js

---

## Estrutura dos Arquivos

```
.
├── packages (diretório de projetos)
│   ├── auth (projeto 1)
│   ├── manager (projeto 2)
│   └── shared (recursos compartilhados entre os projetos)
├── lerna.json (configurações do Lerna)
└── tsconfig.json (configurações do TypeScript)

```

---

## Dependências

Não depende de outro projeto ou API

---

## Setup

```bash
# Clonar o projeto por HTTPS no seu computador
git clone https://github.com/thealex87/nextjs-monorepo.git

# OU clonar o projeto por SSH no seu computador
git clone git@github.com:thealex87/nextjs-monorepo.git

# Instalar módulos e referenciar projetos/pacotes
yarn bootstrap
```

---

## Como Utilizar

Iniciando os projetos/pacotes

```bash
yarn start
```

Após rodar o comando acima, subirão as aplicações auth em http://localhost:3001 e manager em http://localhost:3002.

---

## Deploy

```sh
yarn build
```

---

## Funcionalidades

---

## Anotações Úteis

---
