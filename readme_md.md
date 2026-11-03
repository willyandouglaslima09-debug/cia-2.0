# 🎓 CIA 2.0 — Central de Informações Acadêmicas (UniCatólica)

[![Status](https://img.shields.io/badge/Status-MVP%20Final-blue.svg)](https://portal-cia.vercel.app)
[![License](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)
[![Vercel](https://img.shields.io/badge/Deploy-Vercel-black.svg?logo=vercel)](https://vercel.com)

O **CIA 2.0** é um portal institucional de autoatendimento e FAQ acadêmico interativo desenvolvido para o **Centro Universitário Católica do Tocantins (UniCatólica)**. O objetivo principal do projeto é simplificar o acesso a informações essenciais sobre vida acadêmica, finanças, documentos e bolsas de estudo, promovendo maior autonomia aos estudantes e otimizando o fluxo de atendimento dos setores da instituição.

---

## 🚀 Funcionalidades Principais

- 🔍 **Busca Inteligente com Busca Fuzzy (Fuse.js):** Pesquisa rápida e tolerante a pequenos erros de digitação em todas as perguntas e respostas.
- ⚡ **Atalhos e Filtros Dinâmicos:** Filtros por categorias (Acadêmico, Financeiro, Requerimentos, Bolsas e Benefícios) e atalhos rápidos para dúvidas frequentes.
- ⌨️ **Acessibilidade por Navegação em Teclado:** Suporte ao atalho global `Ctrl + K` para focar diretamente na barra de pesquisa.
- 🎨 **Design Moderno e Responsivo:** Layout adaptável construído com **Tailwind CSS** e tipografia estilizada com **Clash Display**.
- 💬 **Formulário de Contato e Canais Oficiais:** Direcionamento rápido para WhatsApp institucional, localização do Câmpus II e formulários de suporte por setor.
- 🔒 **Conformidade com a LGPD:** Plataforma de autoatendimento estritamente anônima, sem armazenamento de dados pessoais, RA ou senhas.

---

## 🛠️ Tecnologias Utilizadas

- **HTML5 & CSS3** (Estruturação semântica e acessibilidade)
- **[Tailwind CSS](https://tailwindcss.com/)** (Estilização via CDN com suporte a temas e utilitários)
- **JavaScript (ES6+)** (Lógica de interação e manipulação do DOM)
- **[Fuse.js](https://www.fusejs.io/)** (Mecanismo de busca fuzzy leve)
- **[Lucide Icons](https://lucide.dev/)** (Conjunto moderno e leve de ícones)
- **[Fontshare / Clash Display](https://www.fontshare.com/fonts/clash-display)** (Tipografia institucional)

---

## 📁 Estrutura do Projeto

```text
cia-2.0/
├── index.html        # Estrutura principal do portal
├── src/
│   ├── app.js        # Lógica da aplicação, integração com Fuse.js e FAQs
│   └── styles.css     # Estilos personalizados adicionais
└── img/              # Ativos de imagem e elementos visuais
```

---

## 💻 Como Executar Localmente

Como o projeto é construído com tecnologias web estáticas, não é necessário instalar dependências pesadas de Node.js.

1. **Clone este repositório:**
   ```bash
   git clone https://github.com/willyandouglaslima09-debug/cia-2.0.git
   ```

2. **Navegue até o diretório do projeto:**
   ```bash
   cd cia-2.0
   ```

3. **Abra o arquivo `index.html`:**
   - Dê um duplo clique no arquivo `index.html` para abrir diretamente no seu navegador de preferência.
   - Ou utilize a extensão **Live Server** no Visual Studio Code para um ambiente de desenvolvimento local com *hot-reload*.

---

## 🌐 Deploy (Publicação)

O projeto está configurado para deploy contínuo na plataforma **Vercel** através da integração com o GitHub:

1. Todo `git push` realizado na branch `main` dispara automaticamente um novo build e publicação na Vercel.
2. Link do ambiente de produção: [https://cia-20.vercel.app](https://cia-20.vercel.app) *(ou o domínio configurado na sua conta)*.

---

## 👥 Equipe de Desenvolvimento

Este projeto é um MVP (Produto Mínimo Viável) idealizado e desenvolvido durante o 2º Período do Curso de **Engenharia de Software** da UniCatólica.

- **Equipe:** Equipe 404
- **Instituição:** Centro Universitário Católica do Tocantins (UniCatólica) — Câmpus II (Palmas - TO)
- **Ano:** 2026

---

## 📄 Licença

Este projeto é de uso educacional e institucional. Todos os direitos reservados ao Centro Universitário Católica do Tocantins.