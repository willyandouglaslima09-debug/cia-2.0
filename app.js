const FORMSPREE_ENDPOINT = "https://formspree.io/f/xvkklanp";

let faqsData = [
  {
    "id": "fin-001",
    "category": "financeiro",
    "title": "Como emitir a segunda via do boleto?",
    "tags": ["boleto", "pagamento", "mensalidade", "financeiro", "2 via"],
    "steps": [
      "Este FAQ oferece orientações, mas não emite boletos nem acessa sua situação financeira.",
      "Para obter a segunda via, acesse o Portal Acadêmico da UBEC no link abaixo ou procure o atendimento financeiro presencial."
    ],
    "important_note": "Boletos vencidos há mais de 30 dias devem ser renegociados presencialmente no CIA.",
    "action_link": {
      "text": "Acessar Portal do Aluno",
      "url": "https://portalacademico.ubec.edu.br/FrameHTML/Web/App/Edu/PortalEducacional/login/"
    }
  },
  {
    "id": "fin-002",
    "category": "financeiro",
    "title": "Quais são as formas de pagamento aceitas?",
    "tags": ["pagamento", "pix", "cartão", "boleto", "mensalidade"],
    "steps": [
      "A UniCatólica aceita pagamentos via Boleto Bancário e PIX.",
      "Pagamentos via PIX são processados instantaneamente no sistema.",
      "Para pagamento com cartão de crédito (renegociações), é necessário comparecer presencialmente ao CIA."
    ]
  },
  {
    "id": "acad-001",
    "category": "academico",
    "title": "Como solicitar uma declaração de matrícula?",
    "tags": ["declaração", "matrícula", "comprovante", "atestado", "acadêmico"],
    "steps": [
      "Acesse a Secretaria Virtual no Portal Acadêmico UniCatólica.",
      "Selecione a opção 'Emitir Documentos' no menu principal.",
      "Clique em 'Declaração de Matrícula Simples'. O documento em PDF com validação digital via QR Code será gerado na hora."
    ],
    "important_note": "A declaração digital tem autenticidade garantida e dispensa carimbo ou assinatura presencial."
  },
  {
    "id": "acad-002",
    "category": "academico",
    "title": "Onde consultar meu histórico escolar?",
    "tags": ["histórico", "notas", "disciplinas", "acadêmico", "créditos"],
    "steps": [
      "Entre no Portal do Aluno com suas credenciais institucionais.",
      "Clique no menu 'Vida Acadêmica' e selecione 'Histórico Escolar Completo'.",
      "Visualize ou faça o download do documento."
    ],
    "important_note": "Históricos oficiais para transferência externa devem ser solicitados via requerimento.",
    "action_link": {
      "text": "Consultar Histórico",
      "url": "https://portalacademico.ubec.edu.br/FrameHTML/Web/App/Edu/PortalEducacional/login/"
    }
  },
  {
    "id": "acad-003",
    "category": "academico",
    "title": "Como consultar minhas faltas e frequências?",
    "tags": ["faltas", "frequência", "presença", "notas", "acadêmico"],
    "steps": [
      "Acesse o Portal do Aluno com suas credenciais.",
      "Vá até o menu 'Vida Acadêmica' e clique na opção 'Frequência / Notas'.",
      "Selecione a disciplina desejada para verificar o percentual de presenças e o limite permitido de faltas."
    ]
  },
  {
    "id": "acad-004",
    "category": "academico",
    "title": "Como fazer minha rematrícula?",
    "tags": ["rematrícula", "renovação", "matrícula", "período", "acadêmico"],
    "steps": [
      "A rematrícula é feita online através do Portal do Aluno no período indicado no Calendário Acadêmico.",
      "Verifique se você possui pendências financeiras ou na biblioteca que possam bloquear a renovação.",
      "Acesse a opção 'Rematrícula', escolha as disciplinas da grade do semestre e confirme o pedido."
    ]
  },
  {
    "id": "acad-005",
    "category": "academico",
    "title": "Como iniciar o estágio obrigatório?",
    "tags": ["estágio", "obrigatório", "coordenação", "contrato", "termo"],
    "steps": [
      "Consulte a matriz curricular do seu curso para confirmar se está no período estipulado para o estágio.",
      "Retire o Termo de Compromisso de Estágio (TCE) com a Coordenação de Curso ou no setor de Estágios.",
      "Entregue o documento devidamente assinado pela empresa concedente antes de iniciar as atividades."
    ]
  },
  {
    "id": "acad-006",
    "category": "academico",
    "title": "Como validar atividades complementares?",
    "tags": ["atividades", "complementares", "certificados", "horas", "créditos"],
    "steps": [
      "Acesse o Portal do Aluno no menu 'Atividades Complementares'.",
      "Cadastre o certificado obtido (cursos, eventos, semanas acadêmicas, monitorias ou trabalhos voluntários).",
      "Anexe a cópia digitalizada do certificado em PDF para avaliação e validação da carga horária pela coordenação."
    ]
  },
  {
    "id": "acad-007",
    "category": "academico",
    "title": "Onde encontrar o calendário acadêmico?",
    "tags": ["calendário", "prazos", "datas", "provas", "feriados", "acadêmico"],
    "steps": [
      "O calendário oficial está disponível para download público diretamente em formato PDF.",
      "Você também pode baixá-lo pelo Portal do Aluno na seção de avisos e documentos institucionais."
    ],
    "action_link": {
      "text": "Baixar Calendário Acadêmico (PDF)",
      "url": "https://to.catolica.edu.br/portal/wp-content/uploads/2026/01/unicatolica-calendario-academico-2026-2-semestre-rev.pdf"
    }
  },
  {
    "id": "acad-008",
    "category": "academico",
    "title": "Como funciona o regime de dependência (DP)?",
    "tags": ["dp", "dependência", "reprovação", "disciplina"],
    "steps": [
      "Se você reprovou em uma disciplina, deverá cursá-la em regime de dependência.",
      "As DPs podem ser ofertadas na modalidade presencial ou EAD, dependendo da matriz curricular.",
      "A matrícula em DP é feita no período indicado no Calendário Acadêmico, através do Portal do Aluno."
    ]
  },
  {
    "id": "req-001",
    "category": "requerimentos",
    "title": "Como acompanhar uma solicitação ou requerimento?",
    "tags": ["solicitação", "acompanhar", "requerimento", "status", "protocolo"],
    "steps": [
      "Acesse a aba 'Requerimentos' no seu Portal Acadêmico.",
      "Clique em 'Acompanhar Requerimentos' para visualizar a lista de solicitações abertas.",
      "Verifique o status do protocolo (Em análise, Deferido ou Indeferido) e as observações do setor responsável."
    ]
  },
  {
    "id": "req-002",
    "category": "requerimentos",
    "title": "Como tirar dúvidas sobre requerimentos?",
    "tags": ["requerimento", "aproveitamento", "trancamento", "transferência"],
    "steps": [
      "Acesse a aba 'Requerimentos' no seu Portal Acadêmico.",
      "Escolha o tipo de solicitação (Aproveitamento, Trancamento ou Transferência).",
      "Preencha a justificativa, anexe os documentos comprobatórios e confirme o envio."
    ],
    "important_note": "Fique atento ao Calendário Acadêmico oficial para não perder os prazos regimentais."
  },
  {
    "id": "req-003",
    "category": "requerimentos",
    "title": "Qual o prazo para análise de dispensa de disciplinas?",
    "tags": ["dispensa", "aproveitamento", "prazo", "requerimento"],
    "steps": [
      "O prazo padrão para análise de requerimentos de aproveitamento de estudos é de até 15 dias úteis.",
      "Acompanhe o status da sua solicitação diretamente na aba 'Requerimentos' do Portal do Aluno."
    ]
  },
  {
    "id": "bol-001",
    "category": "bolsas",
    "title": "Como saber mais sobre bolsas e benefícios?",
    "tags": ["prouni", "fies", "bolsas", "desconto", "auxilio"],
    "steps": [
      "Consulte as informações oficiais e editais de bolsas sociais no portal da UniCatólica.",
      "Verifique os prazos e submeta a documentação comprobatória na plataforma indicada."
    ],
    "important_note": "A renovação do ProUni e o aditamento do FIES exigem validação periódica junto à CPSA.",
    "action_link": {
      "text": "Ver Bolsas e Benefícios",
      "url": "https://to.catolica.edu.br/portal/cursos/bolsas-financiamento-e-convenios/bolsa-social/"
    }
  },
  {
    "id": "cont-001",
    "category": "academico",
    "title": "Quais são os canais oficiais de atendimento?",
    "tags": ["whatsapp", "atendimento", "telefone", "contato", "cia"],
    "steps": [
      "WhatsApp Oficial: (63) 3221-2100.",
      "Atendimento Presencial: Câmpus II - Av. Teotônio Segurado, Quadra 1402 Sul, Palmas - TO.",
      "Portal Institucional: to.catolica.edu.br/portal/estudante/"
    ],
    "important_note": "Para atendimento presencial, traga sempre um documento oficial com foto e seu RA.",
    "action_link": {
      "text": "Falar no WhatsApp",
      "url": "https://api.whatsapp.com/send/?phone=556332212100&text&type=phone_number&app_absent=0"
    }
  }
];

let fuseInstance = null;
let activeFilter = 'all';
let faqContainer, emptyState, searchInput, searchBtn, counterBadge, resultsCount;
let lastLoggedEmptyQuery = '';

document.addEventListener('DOMContentLoaded', () => {
  faqContainer = document.getElementById('faq-container');
  emptyState = document.getElementById('empty-state');
  searchInput = document.getElementById('search-input');
  searchBtn = document.getElementById('search-btn');
  counterBadge = document.getElementById('faq-counter-badge');
  resultsCount = document.getElementById('results-count');

  initFuseSearch();
  setupEventListeners();
  setupFormattingAssistant();
  setupValidationModal();
  renderFaqs(faqsData);
  refreshIcons();
});

function initFuseSearch() {
  if (typeof Fuse === 'undefined') return;
  fuseInstance = new Fuse(faqsData, {
    includeScore: true,
    threshold: 0.4,
    ignoreLocation: true,
    keys: [
      { name: 'title', weight: 0.5 },
      { name: 'tags', weight: 0.3 },
      { name: 'steps', weight: 0.2 },
      { name: 'category', weight: 0.1 }
    ]
  });
}

function renderFaqs(items) {
  if (!faqContainer) return;
  faqContainer.innerHTML = '';

  if (!items || items.length === 0) {
    if (emptyState) emptyState.classList.remove('hidden');
    if (counterBadge) counterBadge.textContent = '0 PERGUNTAS';
    if (resultsCount) resultsCount.textContent = 'Nenhuma pergunta encontrada';
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');
  if (counterBadge) counterBadge.textContent = `${items.length} ${items.length === 1 ? 'PERGUNTA' : 'PERGUNTAS'}`;
  if (resultsCount) resultsCount.textContent = `Exibindo ${items.length} de ${faqsData.length} perguntas`;

  items.forEach((faq) => {
    const itemEl = document.createElement('div');
    itemEl.className = `accordion-item py-4 border-b border-figma-cardLight/60`;
    itemEl.dataset.id = faq.id;

    const savedVote = localStorage.getItem(`cia_feedback_${faq.id}`);
    const stepsHtml = faq.steps.map(step => `<p class="text-base text-figma-slate leading-relaxed">• ${step}</p>`).join('');

    itemEl.innerHTML = `
      <button type="button" class="accordion-header w-full text-left font-semibold text-figma-slate hover:text-figma-blue flex justify-between items-center transition-colors cursor-pointer">
        <h3 class="font-bold text-figma-slate text-lg sm:text-xl pointer-events-none">${faq.title}</h3>
        <span class="accordion-icon text-2xl font-mono text-figma-blue font-bold ml-4 pointer-events-none">+</span>
      </button>
      
      <div class="accordion-content hidden">
        <div class="pt-4 space-y-4 max-w-2xl">
          ${stepsHtml}
          ${faq.important_note ? `
            <div class="p-3 bg-figma-cardLight/50 border-l-4 border-figma-blue text-sm text-figma-slate rounded-r">
              <strong>Atenção:</strong> ${faq.important_note}
            </div>
          ` : ''}
          <div class="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs">
            ${faq.action_link ? `
              <a href="${faq.action_link.url}" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 font-bold text-figma-blue hover:text-figma-slate transition-colors text-sm">
                ${faq.action_link.text} <i data-lucide="arrow-up-right" class="w-4 h-4"></i>
              </a>
            ` : '<div></div>'}
            
            <div class="feedback-box flex items-center gap-2 text-xs text-figma-border">
              ${savedVote ? `
                <span class="text-figma-blue font-semibold">Obrigado pelo seu feedback!</span>
              ` : `
                <span>Esta resposta ajudou?</span>
                <button type="button" class="feedback-btn px-2.5 py-1 rounded bg-figma-cardLight/60 hover:bg-figma-cardLight font-bold text-figma-slate transition-colors" data-vote="sim" data-id="${faq.id}" data-title="${faq.title}">
                  👍 Sim
                </button>
                <button type="button" class="feedback-btn px-2.5 py-1 rounded bg-figma-cardLight/60 hover:bg-figma-cardLight font-bold text-figma-slate transition-colors" data-vote="nao" data-id="${faq.id}" data-title="${faq.title}">
                  👎 Não
                </button>
              `}
            </div>
          </div>
        </div>
      </div>
    `;

    faqContainer.appendChild(itemEl);
  });

  refreshIcons();
}

function filterFaqs() {
  const query = searchInput ? searchInput.value.trim() : '';
  let results = faqsData;

  if (query.length > 0 && fuseInstance) {
    const fuseRes = fuseInstance.search(query);
    results = fuseRes.map(r => r.item);
  }

  if (activeFilter !== 'all') {
    results = results.filter(item => item.category === activeFilter);
  }

  // Captura termo sem resultado (Gap) para telemetria ao vivo
  if (query.length >= 4 && results.length === 0 && query.toLowerCase() !== lastLoggedEmptyQuery) {
    lastLoggedEmptyQuery = query.toLowerCase();
    logTelemetryEvent({
      tipo: "Busca Sem Resultado (Gap)",
      descricao: `Termo buscado: "${query}"`,
      setor: "Secretaria Acadêmica",
      resolveu: "Não",
      nota: "3.0",
      reutilizaria: "Talvez"
    });
  }

  renderFaqs(results);
}

function setupEventListeners() {
  if (searchInput) searchInput.addEventListener('input', filterFaqs);
  if (searchBtn) searchBtn.addEventListener('click', filterFaqs);

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (searchInput) searchInput.focus();
    }
  });

  if (faqContainer) {
    faqContainer.addEventListener('click', (e) => {
      const header = e.target.closest('.accordion-header');
      if (header) {
        e.preventDefault();
        const item = header.closest('.accordion-item');
        const content = item.querySelector('.accordion-content');
        const icon = header.querySelector('.accordion-icon');
        const isCurrentlyOpen = !content.classList.contains('hidden');

        document.querySelectorAll('.accordion-content').forEach(c => c.classList.add('hidden'));
        document.querySelectorAll('.accordion-icon').forEach(ic => ic.textContent = '+');

        if (!isCurrentlyOpen) {
          content.classList.remove('hidden');
          icon.textContent = '—';
        }
        return;
      }

      const feedbackBtn = e.target.closest('.feedback-btn');
      if (feedbackBtn) {
        const faqId = feedbackBtn.dataset.id;
        const faqTitle = feedbackBtn.dataset.title;
        const vote = feedbackBtn.dataset.vote;
        const box = feedbackBtn.closest('.feedback-box');
        
        localStorage.setItem(`cia_feedback_${faqId}`, vote);
        if (box) {
          box.innerHTML = `<span class="text-figma-blue font-semibold">Obrigado pelo seu feedback!</span>`;
        }

        logTelemetryEvent({
          tipo: "Voto FAQ Individual",
          descricao: `Voto (${vote.toUpperCase()}): ${faqTitle}`,
          setor: faqId.startsWith('fin') ? 'Setor Financeiro' : (faqId.startsWith('bol') ? 'Bolsas & FIES / CPSA' : 'Secretaria Acadêmica'),
          resolveu: vote === 'sim' ? 'Sim' : 'Não',
          nota: vote === 'sim' ? '5.0' : '3.0',
          reutilizaria: 'Com certeza'
        });

        setTimeout(() => {
          openValidationModal();
        }, 700);
      }
    });
  }

  document.querySelectorAll('.tag-pill').forEach(pill => {
    pill.addEventListener('click', () => {
      if (searchInput) {
        searchInput.value = pill.dataset.tag;
        filterFaqs();
      }
      const faqsEl = document.getElementById('faqs');
      if (faqsEl) faqsEl.scrollIntoView({ behavior: 'smooth' });
    });
  });

  document.querySelectorAll('.category-card').forEach(card => {
    card.addEventListener('click', () => {
      setActiveFilterTab(card.dataset.category);
      const faqsEl = document.getElementById('faqs');
      if (faqsEl) faqsEl.scrollIntoView({ behavior: 'smooth' });
    });
  });

  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.addEventListener('click', () => {
      setActiveFilterTab(tab.dataset.filter);
    });
  });
}

// =============================================================
// ASSISTENTE DE FORMATAÇÃO DE ATENDIMENTO (CIA 2.1)
// =============================================================
function setupFormattingAssistant() {
  const sectorEl = document.getElementById('assist-sector');
  const problemEl = document.getElementById('assist-problem');
  const nameEl = document.getElementById('assist-name');
  const courseEl = document.getElementById('assist-course');
  const previewEl = document.getElementById('assist-preview');
  const btnCopyWa = document.getElementById('btn-copy-whatsapp');
  const btnEmail = document.getElementById('btn-send-email');

  if (!sectorEl || !previewEl) return;

  function buildFormattedMessage() {
    const [sectorName] = sectorEl.value.split('|');
    const problemText = problemEl.value.trim() || '[Descreva sua dúvida ex: Baixa de boleto PIX]';
    const studentName = nameEl.value.trim() || '[Seu Nome Completo]';
    const courseText = courseEl.value.trim() || '[Seu Curso / Período]';

    return `SOLICITAÇÃO DE ATENDIMENTO – CIA 2.1 (UNICATÓLICA)
--------------------------------------------------
Setor Destino: ${sectorName}
Aluno(a): ${studentName}
Curso/Período: ${courseText}
Assunto: ${problemText}

Mensagem:
Olá equipe UniCatólica! Consultei o portal de autoatendimento CIA 2.1 e preciso de orientação referente ao caso acima.

Atendimento gerado pelo portal CIA 2.1 – Equipe 404`;
  }

  function updatePreview() {
    previewEl.textContent = buildFormattedMessage();
  }

  [sectorEl, problemEl, nameEl, courseEl].forEach(el => {
    if (el) el.addEventListener('input', updatePreview);
  });

  updatePreview();

  if (btnCopyWa) {
    btnCopyWa.addEventListener('click', () => {
      const [sectorName] = sectorEl.value.split('|');
      const problemText = problemEl.value.trim() || 'Atendimento geral via Assistente CIA 2.1';
      const formattedText = buildFormattedMessage();

      navigator.clipboard.writeText(formattedText).catch(() => {});

      const label = document.getElementById('copy-whatsapp-label');
      if (label) {
        label.textContent = 'Copiado! Abrindo WhatsApp...';
        setTimeout(() => { label.textContent = 'Copiar & WhatsApp CIA'; }, 3000);
      }

      logTelemetryEvent({
        tipo: "Dúvida/Problema Enviado",
        descricao: problemText,
        setor: sectorName,
        resolveu: "-",
        nota: "-",
        reutilizaria: "-"
      });

      const waUrl = `https://api.whatsapp.com/send/?phone=556332212100&text=${encodeURIComponent(formattedText)}`;
      window.open(waUrl, '_blank', 'noopener');
    });
  }

  if (btnEmail) {
    btnEmail.addEventListener('click', () => {
      const [sectorName, sectorEmail] = sectorEl.value.split('|');
      const problemText = problemEl.value.trim() || 'Solicitação de Atendimento CIA 2.1';
      const formattedText = buildFormattedMessage();

      logTelemetryEvent({
        tipo: "Dúvida/Problema Enviado",
        descricao: problemText,
        setor: sectorName,
        resolveu: "-",
        nota: "-",
        reutilizaria: "-"
      });

      const subject = encodeURIComponent(`Atendimento CIA 2.1 - ${sectorName}`);
      window.location.href = `mailto:${sectorEmail}?subject=${subject}&body=${encodeURIComponent(formattedText)}`;
    });
  }
}

// =============================================================
// MODAL DE VALIDAÇÃO & TELEMETRIA AO VIVO (FORMSPREE + LOCALSTORAGE)
// =============================================================
function setupValidationModal() {
  const modal = document.getElementById('validation-modal');
  const closeBtn = document.getElementById('close-modal-btn');
  const form = document.getElementById('mvp-validation-form');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
  }

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(form);
      const comentario = (formData.get('comentario') || '').trim();

      logTelemetryEvent({
        tipo: "Pesquisa Completa MVP",
        descricao: comentario || "Avaliação de usabilidade concluída pelo aluno",
        setor: "Secretaria Acadêmica",
        resolveu: formData.get('resolveu'),
        nota: Number(formData.get('facilidade')).toFixed(1),
        reutilizaria: formData.get('reutilizaria')
      });

      form.classList.add('hidden');
      document.getElementById('modal-success-msg').classList.remove('hidden');
      setTimeout(() => modal.classList.add('hidden'), 2200);
    });
  }
}

function openValidationModal() {
  const modal = document.getElementById('validation-modal');
  const jaRespondeu = localStorage.getItem('cia_mvp_pesquisa_respondida');
  if (modal && !jaRespondeu) {
    modal.classList.remove('hidden');
    localStorage.setItem('cia_mvp_pesquisa_respondida', 'true');
  }
}

function logTelemetryEvent(eventObj) {
  // 1. Grava no LocalStorage para aparecer instantaneamente no Dashboard Ao Vivo
  const liveEvents = JSON.parse(localStorage.getItem('cia_live_telemetry') || '[]');
  liveEvents.unshift({
    origem: 'Ao Vivo',
    tipo: eventObj.tipo,
    descricao: eventObj.descricao,
    setor: eventObj.setor,
    resolveu: eventObj.resolveu,
    nota: eventObj.nota,
    reutilizaria: eventObj.reutilizaria,
    timestamp: new Date().toISOString()
  });
  localStorage.setItem('cia_live_telemetry', JSON.stringify(liveEvents));

  // 2. Dispara para o endpoint real do Formspree
  fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(eventObj)
  }).catch(() => {});
}

function setActiveFilterTab(category) {
  activeFilter = category;
  document.querySelectorAll('.filter-tab').forEach(tab => {
    tab.classList.toggle('active', tab.dataset.filter === category);
  });
  filterFaqs();
}

function refreshIcons() {
  if (window.lucide) lucide.createIcons();
}
