🎓 CIA 2.0 - Central de Informações Acadêmicas (FAQ UniCatólica)

MVP de Autoatendimento Acadêmico e Financeiro

Projeto desenvolvido pela Equipe 404 — 2º Período do Curso de Engenharia de Software do Centro Universitário Católica do Tocantins (UniCatólica).

📌 Sobre o Projeto

O CIA 2.0 é um Produto Mínimo Viável (MVP) concebido para atuar como um portal informativo dinâmico, centralizado e intuitivo. O objetivo principal é otimizar a jornada dos estudantes da UniCatólica na resolução de dúvidas frequentes sobre processos acadêmicos, financeiros, solicitações de documentos e programas de bolsas, reduzindo a necessidade de atendimento presencial no balcão da Central de Informações Acadêmicas (CIA).

🚀 Principais Funcionalidades

Busca Tolerante a Falhas: Motor de pesquisa integrado via Fuse.js, permitindo encontrar respostas mesmo com pequenas variações de digitação.

Navegação por Categorias: Filtros dinâmicos por Acadêmico, Financeiro, Requerimentos e Bolsas e Benefícios.

Interface Responsiva & Acessível: Layout desenvolvido em Tailwind CSS, otimizado para dispositivos móveis com suporte a atalhos de teclado (Ctrl + K).

Votação por Pergunta (👍 / 👎): Mecanismo direto de avaliação da utilidade de cada resposta.

Modal de Validação de MVP: Pop-up automatizado de pesquisa de satisfação para coleta de métricas de resolução, facilidade de uso e intenção de reutilização.

Captura de Dados via Formspree: Telemetria anônima conectada a endpoint via API para consolidação de relatórios em tempo real.

Encaminhamento Direto de Suporte: Formulário que pré-preenche mensagens via protocolo mailto: para os e-mails institucionais dos setores responsáveis.

🛠️ Tecnologias Utilizadas

HTML5 & CSS3: Estruturação semântica e estilização customizada.

Tailwind CSS (CDN): Framework utilitário para design responsivo e componentes modernos.

JavaScript (ES6+): Lógica dinâmica, controle do acordeão, manipulação do DOM e eventos.

Fuse.js (v6.6.2): Biblioteca de busca fuzzy client-side.

Lucide Icons: Conjunto de ícones vetoriais leves e consistentes.

Formspree API (xvkklanp): Serviço de backend serverless para recepção e organização das métricas de validação em planilhas (CSV/Excel).

📂 Estrutura do Repositório

cia-2.0/
├── index.html          # Estrutura principal da página e componentes (Header, Hero, FAQs, Modais, Footer)
├── src/
│   ├── app.js          # Lógica JavaScript, dados dos FAQs, motor de busca e integrações API
│   └── styles.css      # Estilizações complementares e animações de entrada
├── img/                # Ativos visuais e ilustrações do portal
└── README.md           # Documentação oficial do projeto


📊 Estratégia de Validação do MVP

Conforme o plano de validação de campo no Câmpus II da UniCatólica, a ferramenta é disponibilizada via QR Code para estudantes na fila de atendimento presencial. As métricas coletadas incluem:

Taxa de Resolução: Medida pela votação direta nas respostas e confirmação no formulário modal.

Facilidade de Uso: Avaliação em escala de 1 a 5 estrelas reportada pelos usuários.

Intenção de Reutilização: Verificação da adesão do aluno à ferramenta antes de recorrer ao balcão físico.

Todos os eventos de votação e submissões da pesquisa são transmitidos diretamente para o painel analítico do Formspree, viabilizando a exportação de dados estruturados para análise técnica.

⚙️ Como Executar o Projeto Localmente

Clonar o Repositório:

git clone https://github.com/willyandouglaslima09-debug/cia-2.0.git


Acessar o Diretório:

cd cia-2.0


Executar o Portal:

Como o projeto é construído em arquitetura estrita de Front-End Client-Side, basta abrir o arquivo index.html em qualquer navegador web moderno.

Recomendado utilizar a extensão Live Server no VS Code para recarregamento automático durante o desenvolvimento.

👥 Equipe 404 (Engenharia de Software)

Gabriel Oliveira Vidal

João Vittor de Sousa Cortes

Karen Lorena Kuhn Silva

Pedro Henrique dos Santos Dultra

Pedro Henrique Braga Oliveira

Willian Douglas Lima Ribeiro Pugas

📜 Licença e LGPD

Este projeto é desenvolvido para fins acadêmicos. O portal opera em conformidade com a LGPD de forma anônima, sem solicitar ou armazenar senhas, RAs ou Informações Pessoais Identificáveis (PII).

© 2026 Centro Universitário Católica do Tocantins (UniCatólica). Todos os direitos reservados.
