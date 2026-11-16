// ENDPOINT DO FORMSPREE CONFIGURADO PARA A EQUIPE 404
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
let faqContainer;
let emptyState;
let searchInput;
let searchBtn;
let counterBadge;
let resultsCount;
let lastFocusedElement = null;

document.addEventListener('DOMContentLoaded', () => {
  faqContainer = document.getElementById('faq-container');
  emptyState = document.getElementById('empty-state');
  searchInput = document.getElementById('search-input');
  searchBtn = document.getElementById('search-btn');
  counterBadge = document.getElementById('faq-counter-badge');
  resultsCount = document.getElementById('results-count');

  initAccessibilityControls();
  initMobileMenu();
  initFuseSearch();
  setupEventListeners();
  initScrollAnimations();
  renderFaqs(faqsData);
  refreshIcons();
  setupValidationModal();
});

function initMobileMenu() {
  const menuBtn = document.getElementById('mobile-menu-btn');
  const mobileNav = document.getElementById('mobile-nav');
  if (!menuBtn || !mobileNav) return;

  const setMenuOpen = (open, restoreFocus = false) => {
    mobileNav.classList.toggle('hidden', !open);
    menuBtn.setAttribute('aria-expanded', String(open));
    menuBtn.setAttribute('aria-label', open ? 'Fechar menu de navegação' : 'Abrir menu de navegação');
    if (!open && restoreFocus) {
      menuBtn.focus();
    }
  };

  menuBtn.addEventListener('click', (e) => {
    e.stopPropagation();
    const isOpen = !mobileNav.classList.contains('hidden');
    setMenuOpen(!isOpen);
  });

  mobileNav.querySelectorAll('.mobile-nav-link').forEach(link => {
    link.addEventListener('click', () => setMenuOpen(false));
  });

  document.addEventListener('click', (e) => {
    if (mobileNav.classList.contains('hidden')) return;
    if (!mobileNav.contains(e.target) && e.target !== menuBtn && !menuBtn.contains(e.target)) {
      setMenuOpen(false);
    }
  });
}

function initAccessibilityControls() {
  const root = document.documentElement;
  const toggleBtn = document.getElementById('accessibility-toggle-btn');
  const panel = document.getElementById('accessibility-panel');
  const closePanelBtn = document.getElementById('accessibility-close-btn');
  const contrastBtn = document.getElementById('toggle-contrast');
  const decreaseBtn = document.getElementById('font-decrease');
  const resetBtn = document.getElementById('font-reset');
  const increaseBtn = document.getElementById('font-increase');

  const setPanelOpen = (open, restoreFocus = false) => {
    if (!panel || !toggleBtn) return;
    panel.classList.toggle('hidden', !open);
    toggleBtn.setAttribute('aria-expanded', String(open));
    if (!open && restoreFocus) {
      toggleBtn.focus();
    }
  };

  if (toggleBtn && panel) {
    toggleBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      const isOpen = !panel.classList.contains('hidden');
      setPanelOpen(!isOpen);
    });
  }

  if (closePanelBtn) {
    closePanelBtn.addEventListener('click', () => setPanelOpen(false, true));
  }

  document.querySelectorAll('.accessibility-jump').forEach(link => {
    link.addEventListener('click', () => setPanelOpen(false));
  });

  document.addEventListener('click', (e) => {
    if (!panel || panel.classList.contains('hidden')) return;
    if (!panel.contains(e.target) && e.target !== toggleBtn && !toggleBtn.contains(e.target)) {
      setPanelOpen(false);
    }
  });

  const savedContrast = localStorage.getItem('cia_high_contrast');
  const prefersMoreContrast = window.matchMedia && window.matchMedia('(prefers-contrast: more)').matches;
  const isHighContrast = savedContrast !== null ? savedContrast === 'true' : prefersMoreContrast;

  const applyContrast = (enabled) => {
    root.classList.toggle('high-contrast', enabled);
    if (contrastBtn) {
      contrastBtn.setAttribute('aria-pressed', String(enabled));
      const labelSpan = contrastBtn.querySelector('span');
      if (labelSpan) {
        labelSpan.textContent = enabled ? 'Desativar Alto Contraste' : 'Ativar Alto Contraste';
      }
    }
    localStorage.setItem('cia_high_contrast', String(enabled));
  };

  applyContrast(isHighContrast);

  if (contrastBtn) {
    contrastBtn.addEventListener('click', () => {
      applyContrast(!root.classList.contains('high-contrast'));
    });
  }

  let fontScale = parseFloat(localStorage.getItem('cia_font_scale')) || 1;
  const MIN_SCALE = 0.85;
  const MAX_SCALE = 1.4;
  const STEP = 0.1;

  const applyFontScale = (scale) => {
    fontScale = Math.min(MAX_SCALE, Math.max(MIN_SCALE, Number(scale.toFixed(2))));
    root.style.setProperty('--font-scale', String(fontScale));
    localStorage.setItem('cia_font_scale', String(fontScale));
  };

  applyFontScale(fontScale);

  if (decreaseBtn) decreaseBtn.addEventListener('click', () => applyFontScale(fontScale - STEP));
  if (resetBtn) resetBtn.addEventListener('click', () => applyFontScale(1));
  if (increaseBtn) increaseBtn.addEventListener('click', () => applyFontScale(fontScale + STEP));
}

function initScrollAnimations() {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.1 });
  
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

function initFuseSearch() {
  if (typeof Fuse === 'undefined') return;
  const options = {
    includeScore: true,
    threshold: 0.4,
    ignoreLocation: true,
    keys: [
      { name: 'title', weight: 0.5 },
      { name: 'tags', weight: 0.3 },
      { name: 'steps', weight: 0.2 },
      { name: 'category', weight: 0.1 }
    ]
  };
  fuseInstance = new Fuse(faqsData, options);
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
    const stepsHtml = faq.steps.map(step => `<p class="text-base sm:text-lg text-figma-slate leading-relaxed">• ${step}</p>`).join('');
    const headerId = `faq-header-${faq.id}`;
    const contentId = `faq-content-${faq.id}`;

    itemEl.innerHTML = `
      <h3>
        <button type="button" id="${headerId}" aria-expanded="false" aria-controls="${contentId}" class="accordion-header w-full text-left font-semibold text-figma-slate hover:text-figma-blue flex justify-between items-center transition-colors cursor-pointer py-1">
          <span class="font-bold text-figma-slate text-xl sm:text-2xl pointer-events-none">${faq.title}</span>
          <span class="accordion-icon text-2xl font-mono text-figma-blue font-bold ml-4 pointer-events-none shrink-0" aria-hidden="true">+</span>
        </button>
      </h3>
      
      <div id="${contentId}" role="region" aria-labelledby="${headerId}" class="accordion-content hidden">
        <div class="pt-4 space-y-4 max-w-2xl">
          ${stepsHtml}
          ${faq.important_note ? `
            <div class="p-3 bg-figma-cardLight/50 border-l-4 border-figma-blue text-base text-figma-slate rounded-r">
              <strong>Atenção:</strong> ${faq.important_note}
            </div>
          ` : ''}
          <div class="pt-3 flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-sm">
            ${faq.action_link ? `
              <a href="${faq.action_link.url}" target="_blank" rel="noopener" class="inline-flex items-center gap-1.5 font-bold text-figma-blue hover:text-figma-slate transition-colors text-base">
                ${faq.action_link.text} <i data-lucide="arrow-up-right" class="w-4 h-4" aria-hidden="true"></i>
              </a>
            ` : '<div></div>'}
            
            <div class="feedback-box flex items-center gap-2 text-sm text-figma-border">
              ${savedVote ? `
                <span class="text-figma-blue font-semibold">Obrigado pelo seu feedback!</span>
              ` : `
                <span>Esta resposta ajudou?</span>
                <button type="button" class="feedback-btn px-3 py-1 rounded bg-figma-cardLight/60 hover:bg-figma-cardLight font-bold text-figma-slate transition-colors" data-vote="sim" data-id="${faq.id}">
                  👍 Sim
                </button>
                <button type="button" class="feedback-btn px-3 py-1 rounded bg-figma-cardLight/60 hover:bg-figma-cardLight font-bold text-figma-slate transition-colors" data-vote="nao" data-id="${faq.id}">
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

  renderFaqs(results);
}

function setupEventListeners() {
  if (searchInput) searchInput.addEventListener('input', filterFaqs);
  if (searchBtn) searchBtn.addEventListener('click', filterFaqs);

  // Form de Envio por E-mail do Setor (registra no Formspree e abre mailto)
  const supportForm = document.getElementById('support-email-form');
  if (supportForm) {
    supportForm.addEventListener('submit', function(e) {
      e.preventDefault();
      const sectorEmail = document.getElementById('support-sector').value;
      const message = document.getElementById('support-message').value;

      if (!sectorEmail) {
        alert('Por favor, selecione um setor.');
        return;
      }

      sendDataToFormspree({
        tipo: "Dúvida/Problema Enviado",
        setor: sectorEmail,
        mensagem: message
      });

      const subject = encodeURIComponent("Dúvida do Aluno - CIA 2.0");
      const body = encodeURIComponent(message);
      window.location.href = `mailto:${sectorEmail}?subject=${subject}&body=${body}`;
    });
  }

  document.addEventListener('keydown', (e) => {
    const activeTag = document.activeElement ? document.activeElement.tagName : '';
    const isTyping = ['INPUT', 'TEXTAREA', 'SELECT'].includes(activeTag);

    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (searchInput) searchInput.focus();
      return;
    }

    if (e.key === '/' && !isTyping) {
      e.preventDefault();
      if (searchInput) searchInput.focus();
      return;
    }

    if (e.key === 'Escape') {
      const mobileNav = document.getElementById('mobile-nav');
      const mobileMenuBtn = document.getElementById('mobile-menu-btn');
      if (mobileNav && !mobileNav.classList.contains('hidden')) {
        mobileNav.classList.add('hidden');
        if (mobileMenuBtn) {
          mobileMenuBtn.setAttribute('aria-expanded', 'false');
          mobileMenuBtn.setAttribute('aria-label', 'Abrir menu de navegação');
          mobileMenuBtn.focus();
        }
        return;
      }
      const accPanel = document.getElementById('accessibility-panel');
      const accToggle = document.getElementById('accessibility-toggle-btn');
      if (accPanel && !accPanel.classList.contains('hidden')) {
        accPanel.classList.add('hidden');
        if (accToggle) {
          accToggle.setAttribute('aria-expanded', 'false');
          accToggle.focus();
        }
        return;
      }
      const modal = document.getElementById('validation-modal');
      if (modal && !modal.classList.contains('hidden')) {
        closeValidationModal();
        return;
      }
      if (document.activeElement === searchInput && searchInput.value) {
        searchInput.value = '';
        filterFaqs();
      }
    }
  });

  if (faqContainer) {
    faqContainer.addEventListener('keydown', (e) => {
      const header = e.target.closest('.accordion-header');
      if (!header) return;

      const headers = Array.from(faqContainer.querySelectorAll('.accordion-header'));
      const currentIndex = headers.indexOf(header);
      if (currentIndex === -1) return;

      let nextIndex = null;
      if (e.key === 'ArrowDown') nextIndex = (currentIndex + 1) % headers.length;
      else if (e.key === 'ArrowUp') nextIndex = (currentIndex - 1 + headers.length) % headers.length;
      else if (e.key === 'Home') nextIndex = 0;
      else if (e.key === 'End') nextIndex = headers.length - 1;

      if (nextIndex !== null) {
        e.preventDefault();
        headers[nextIndex].focus();
      }
    });

    faqContainer.addEventListener('click', (e) => {
      const header = e.target.closest('.accordion-header');
      if (header) {
        e.preventDefault();
        
        const item = header.closest('.accordion-item');
        const content = item.querySelector('.accordion-content');
        const icon = header.querySelector('.accordion-icon');
        const isCurrentlyOpen = !content.classList.contains('hidden');

        document.querySelectorAll('.accordion-content').forEach(c => c.classList.add('hidden'));
        document.querySelectorAll('.accordion-header').forEach(h => h.setAttribute('aria-expanded', 'false'));
        document.querySelectorAll('.accordion-icon').forEach(ic => ic.textContent = '+');

        if (!isCurrentlyOpen) {
          content.classList.remove('hidden');
          header.setAttribute('aria-expanded', 'true');
          icon.textContent = '—';
        }
        return;
      }

      // CAPTURA DO VOTO INDIVIDUAL E ENVIO AO FORMSPREE
      const feedbackBtn = e.target.closest('.feedback-btn');
      if (feedbackBtn) {
        const faqId = feedbackBtn.dataset.id;
        const vote = feedbackBtn.dataset.vote;
        const box = feedbackBtn.closest('.feedback-box');
        
        localStorage.setItem(`cia_feedback_${faqId}`, vote);
        if (box) {
          box.innerHTML = `<span class="text-figma-blue font-semibold">Obrigado pelo seu feedback!</span>`;
        }

        sendDataToFormspree({
          tipo: "Voto FAQ Individual",
          faq_id: faqId,
          voto: vote
        });

        setTimeout(() => {
          openValidationModal();
        }, 800);
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

function closeValidationModal() {
  const modal = document.getElementById('validation-modal');
  if (!modal) return;
  modal.classList.add('hidden');
  if (lastFocusedElement && typeof lastFocusedElement.focus === 'function') {
    lastFocusedElement.focus();
    lastFocusedElement = null;
  }
}

function setupValidationModal() {
  const modal = document.getElementById('validation-modal');
  const closeBtn = document.getElementById('close-modal-btn');
  const form = document.getElementById('mvp-validation-form');

  if (closeBtn && modal) {
    closeBtn.addEventListener('click', closeValidationModal);
  }

  if (modal) {
    modal.addEventListener('keydown', (e) => {
      if (e.key !== 'Tab') return;
      const focusable = Array.from(
        modal.querySelectorAll('button:not([disabled]), input:not([disabled]), select:not([disabled]), textarea:not([disabled]), a[href]')
      ).filter(el => el.offsetParent !== null);
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    });
  }

  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const formData = new FormData(form);
      const data = {
        tipo: "Pesquisa Completa MVP",
        resolveu_duvida: formData.get('resolveu'),
        nota_facilidade: formData.get('facilidade'),
        reutilizaria: formData.get('reutilizaria'),
        comentario: formData.get('comentario')
      };

      sendDataToFormspree(data);

      document.getElementById('mvp-validation-form').classList.add('hidden');
      document.getElementById('modal-success-msg').classList.remove('hidden');

      setTimeout(() => {
        closeValidationModal();
      }, 2500);
    });
  }
}

function openValidationModal() {
  const modal = document.getElementById('validation-modal');
  const jaRespondeu = localStorage.getItem('cia_mvp_pesquisa_respondida');
  
  if (modal && !jaRespondeu) {
    lastFocusedElement = document.activeElement;
    modal.classList.remove('hidden');
    localStorage.setItem('cia_mvp_pesquisa_respondida', 'true');
    const closeBtn = document.getElementById('close-modal-btn');
    if (closeBtn) closeBtn.focus();
  }
}

// ENVIO DE DADOS PARA O SEU ENDPOINT DO FORMSPREE
function sendDataToFormspree(payload) {
  fetch(FORMSPREE_ENDPOINT, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json'
    },
    body: JSON.stringify(payload)
  }).catch(err => console.log('Erro ao enviar métrica:', err));
}

function setActiveFilterTab(category) {
  activeFilter = category;
  document.querySelectorAll('.filter-tab').forEach(tab => {
    const isActive = tab.dataset.filter === category;
    tab.classList.toggle('active', isActive);
    tab.setAttribute('aria-pressed', String(isActive));
  });
  filterFaqs();
}

function refreshIcons() {
  if (window.lucide) {
    lucide.createIcons();
  }
}