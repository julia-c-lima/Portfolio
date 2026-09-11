(function () {
  // O runtime do Claude Design reinjeta os scripts do <helmet> no <head>,
  // então este arquivo pode ser executado duas vezes. Só a primeira conta.
  if (window.__portfolioI18n) return;
  window.__portfolioI18n = true;

  var DICT = {
    // Navegação e geral
    "Sobre": "About",
    "Habilidades": "Skills",
    "Projetos": "Projects",
    "Experiência": "Experience",
    "Contato": "Contact",
    "Vamos conversar": "Let's talk",
    "PORTFÓLIO — 2026": "PORTFOLIO — 2026",
    "Portfólio": "Portfolio",
    "Oi, eu sou a Julia!": "Hi, I'm Julia!",
    "— UX/UI Designer com experiência em UX Research, testes de usabilidade, design responsivo e criação de interfaces acessíveis e escaláveis, unindo pensamento estratégico e foco no usuário.": "— UX/UI Designer experienced in UX Research, usability testing, responsive design and the creation of accessible, scalable interfaces, combining strategic thinking with a user-centred focus.",
    "Ver projetos": "See projects",
    "Quem sou eu": "About me",
    "Quem": "About",
    "sou eu": "me",
    "workshop de IA": "AI workshop",
    "Ajudo empresas a transformar ideias em produtos digitais que fazem sentido no mundo real. Seja desenhando um MVP, refinando uma experiência ou organizando um": "I help companies turn ideas into digital products that make sense in the real world. Whether designing an MVP, refining an experience or organising a",
    ", meu foco é criar soluções úteis e duradouras.": ", my focus is on creating solutions that are useful and built to last.",
    "& formação": "& education",
    "Ferramentas mais": "Most used",
    "utilizadas": "tools",
    "Entrevistas & Personas": "Interviews & Personas",
    "Acessibilidade": "Accessibility",
    "Prototipagem": "Prototyping",
    "Testes de Usabilidade": "Usability Testing",
    "Educação": "Education",
    "Formação": "Academic background",
    "Abr 2026 — atual": "Apr 2026 — present",
    "Formação intensiva em Product Design (UX/UI) focada no ciclo completo de produtos digitais.": "Intensive Product Design (UX/UI) program covering the full digital product cycle.",
    "Tecnólogo em Design Gráfico — concluído.": "Graphic Design technologist degree — completed.",
    "Licenciatura em Ciências Biológicas — concluído.": "Teaching degree in Biological Sciences — completed.",
    "selecionados": "projects",
    "App que desburocratiza a adoção de pets — um ecossistema onde abrigos e adotantes interagem com transparência, do benchmark à alta fidelidade.": "An app that cuts the red tape out of pet adoption — an ecosystem where shelters and adopters interact transparently, from benchmark to high fidelity.",
    "Plataforma de treinamento imersiva e interativa para o setor B2B industrial — interface 3D de alta fidelidade integrada à Unity.": "An immersive, interactive training platform for the industrial B2B sector — a high-fidelity 3D interface integrated with Unity.",
    "Ver projeto": "View project",
    "Ver todos os projetos": "View all projects",
    "profissional": "experience",
    "Ago 2025 — Atual": "Aug 2025 — Present",
    "UX/UI Designer — voluntária": "UX/UI Designer — volunteer",
    "Condução do ciclo de UX/UI Design para a plataforma YARDEX YMS, alcançando 100% de NPS (Net Promoter Score) e nota 9,7/10 de recomendação entre clientes operacionais;": "Led the UX/UI Design cycle for the YARDEX YMS platform, reaching 100% NPS (Net Promoter Score) and a 9.7/10 recommendation score among operational clients;",
    "Condução de pesquisas de UX Research (entrevistas com usuários, mapeamento de jornadas e observação em campo) para entender dores logísticas, resultando em 97,8% de aprovação no atendimento às necessidades do pátio;": "Ran UX Research (user interviews, journey mapping and field observation) to understand logistics pain points, resulting in 97.8% approval for meeting yard operation needs;",
    "Mapeamento de gargalos e redesenho de telas para simplificar processos complexos, obtendo 100% de avaliações positivas de eficiência operacional;": "Mapped bottlenecks and redesigned screens to simplify complex processes, achieving 100% positive ratings on operational efficiency;",
    "Criação de wireframes, protótipos navegáveis e documentação de jornadas no Figma, alinhando requisitos de produto e usabilidade com o time de engenharia.": "Created wireframes, clickable prototypes and journey documentation in Figma, aligning product and usability requirements with the engineering team.",
    "Logística": "Logistics",
    "Abr 2025 — Ago 2025": "Apr 2025 — Aug 2025",
    "Atuação como voluntária no desenvolvimento de um portal de mentorias, participando da evolução do produto junto ao time de produto;": "Volunteered on the development of a mentorship portal, contributing to the product's evolution alongside the product team;",
    "Contribuição diretamente nas atividades de UX Research, apoiando a definição de hipóteses, organização de pesquisas e análise de feedbacks de usuários para identificar melhorias na jornada;": "Contributed directly to UX Research activities, supporting hypothesis definition, research organisation and user feedback analysis to identify journey improvements;",
    "Manutenção e melhorias em telas existentes, ajustando fluxos, hierarquia de informação e elementos visuais para tornar a navegação mais clara;": "Maintained and improved existing screens, adjusting flows, information hierarchy and visual elements to make navigation clearer;",
    "Apoio na evolução do Design System, garantindo consistência entre as interfaces e facilitando a escalabilidade das soluções.": "Supported the evolution of the Design System, ensuring consistency across interfaces and making solutions easier to scale.",
    "Voluntariado": "Volunteering",
    "Jun 2025 — Ago 2025": "Jun 2025 — Aug 2025",
    "Criação de interfaces web e mobile intuitivas e acessíveis, com foco em usabilidade e padrões de acessibilidade;": "Created intuitive, accessible web and mobile interfaces focused on usability and accessibility standards;",
    "Atuação em pesquisas, benchmarking, análise heurística e testes de usabilidade para otimização da experiência;": "Worked on research, benchmarking, heuristic analysis and usability testing to optimise the experience;",
    "Desenvolvimento e manutenção de design systems, além da criação de protótipos navegáveis de alta fidelidade;": "Built and maintained design systems, plus high-fidelity clickable prototypes;",
    "Colaboração em sprints com equipes multidisciplinares, alinhando design e tecnologia.": "Collaborated in sprints with multidisciplinary teams, aligning design and technology.",
    "Desenvolvimento de wireframes, protótipos e fluxos de usuários para soluções logísticas, garantindo interfaces intuitivas que otimizam a gestão e o controle operacional;": "Developed wireframes, prototypes and user flows for logistics solutions, delivering intuitive interfaces that optimise operational management and control;",
    "Colaboração com times de produto e tecnologia para criar experiências eficientes no setor logístico, alinhadas às necessidades dos parceiros;": "Worked with product and technology teams to create efficient experiences in the logistics sector, aligned with partner needs;",
    "Interação contínua com base em feedbacks e dados de uso, documentando jornadas, personas e fluxos para aprimorar a experiência e a eficiência das soluções.": "Iterated continuously based on feedback and usage data, documenting journeys, personas and flows to improve experience and efficiency.",
    "Vamos criar": "Let's create",
    "algo juntos?": "something together?",
    "Estou sempre animada para colaborar em novos projetos inovadores!": "I'm always excited to collaborate on new, innovative projects!",
    "DISPONÍVEL PARA PROJETOS ✦": "AVAILABLE FOR PROJECTS ✦",

    // Páginas de projeto
    "Voltar aos projetos": "Back to projects",
    "Projeto 01 — Adoção de pets": "Project 01 — Pet adoption",
    "Projeto 02 — Treinamento imersivo": "Project 02 — Immersive training",
    "Serviço": "Service",
    "Ferramentas": "Tools",
    "Duração": "Duration",
    "Formato": "Format",
    "Setor": "Sector",
    "16 dias": "16 days",
    "Projeto solo": "Solo project",
    "2 meses": "2 months",
    "Visão do": "Project",
    "projeto": "vision",
    "O PawMatch nasceu da necessidade de desburocratizar o processo de adoção animal. O projeto foca em criar um ecossistema onde abrigos e adotantes podem interagir com transparência. Nosso objetivo é garantir que cada pet encontre o tutor ideal baseado em compatibilidade de estilo de vida e temperamento.": "PawMatch came out of the need to cut the red tape from pet adoption. The project focuses on creating an ecosystem where shelters and adopters can interact transparently. The goal is to make sure every pet finds the right owner based on lifestyle and temperament compatibility.",
    "Uma plataforma de treinamento imersiva e interativa para o setor B2B industrial, desenhada para otimizar o tempo de aprendizado prático e eliminar manuais analógicos complexos.": "An immersive, interactive training platform for the industrial B2B sector, designed to shorten hands-on learning time and replace complex paper manuals.",
    "Problema": "Problem",
    "Solução": "Solution",
    "Os desafios mais comuns ao se adotar um pet:": "The most common challenges when adopting a pet:",
    "Fluxo de adoção burocrático e cansativo;": "A bureaucratic, exhausting adoption flow;",
    "Falta de transparência no histórico do pet;": "Lack of transparency about the pet's history;",
    "Comunicação ineficiente com os abrigos.": "Inefficient communication with shelters.",
    "Soluções para tornar a experiência mais simples e prazerosa:": "Solutions to make the experience simpler and more enjoyable:",
    "Interface centralizada com filtros avançados;": "A centralised interface with advanced filters;",
    "Perfis verificados e centralização de dados;": "Verified profiles and centralised data;",
    "Interface amigável.": "A friendly interface.",
    "Os desafios do treinamento técnico tradicional:": "The challenges of traditional technical training:",
    "Manuais em papel ou PDFs estáticos geram lentidão no aprendizado;": "Paper manuals and static PDFs slow learning down;",
    "Margem para erros operacionais na linha de montagem;": "Room for operational errors on the assembly line;",
    "Custos elevados com treinamento técnico.": "High technical training costs.",
    "Uma interface 3D interativa que torna o aprendizado prático e visual:": "An interactive 3D interface that makes learning hands-on and visual:",
    "Guia visual passo a passo de cada etapa de montagem;": "A step-by-step visual guide for each assembly stage;",
    "Feedback em tempo real durante a operação;": "Real-time feedback during operation;",
    "Simulação imersiva via óculos de realidade virtual.": "Immersive simulation through virtual reality headsets.",
    "Processo de": "Design",
    "design": "process",
    "Desenvolver um app limpo como o PawMatch exigiu uma linha do tempo bem estruturada, desde o conceito inicial até o design final. Cada fase do projeto foi planejada com precisão, garantindo prazos cumpridos e consistência em todos os detalhes.": "Building an app as clean as PawMatch required a well-structured timeline, from the initial concept to the final design. Each phase was planned precisely, keeping deadlines and consistency across every detail.",
    "Dois meses de desenvolvimento, divididos estrategicamente entre a imersão nas regras de negócio da fábrica, testes de arquitetura espacial e a entrega da interface na Unity.": "Two months of development, split strategically between immersion in the factory's business rules, spatial architecture testing and delivering the interface in Unity.",
    "Cronograma": "Timeline",
    "Pesquisa": "Research",
    "Benchmark e Persona (7 dias)": "Benchmark and Persona (7 days)",
    "Fluxo": "Flow",
    "User Flow e Sitemap (2 dias)": "User Flow and Sitemap (2 days)",
    "Alta Fidelidade (5 dias)": "High fidelity (5 days)",
    "Apresentação": "Presentation",
    "Montagem de case (2 dias)": "Case study build (2 days)",
    "Benchmark e Persona (2 semanas)": "Benchmark and Persona (2 weeks)",
    "User Flow e Sitemap (2 semanas)": "User Flow and Sitemap (2 weeks)",
    "Alta fidelidade (2 semanas)": "High fidelity (2 weeks)",
    "Integração 3D com Unity (2 semanas)": "3D integration with Unity (2 weeks)",
    "Ana Silva, 27 anos — Design Gráfico": "Ana Silva, 27 — Graphic Design",
    "Carlos Eduardo, 48 anos — Operador de Linha de Montagem": "Carlos Eduardo, 48 — Assembly Line Operator",
    "Objetivo:": "Goal:",
    "Motivação:": "Motivation:",
    "Desafio:": "Challenge:",
    "adotar um companheiro calmo para seu apartamento, priorizando facilidade no contato com o abrigo.": "to adopt a calm companion for her apartment, prioritising easy contact with the shelter.",
    "causa animal, busca por companhia leal e desejo de transformar a vida de um pet sem lar.": "animal welfare, the search for loyal company and the wish to change the life of a homeless pet.",
    "falta de tempo para visitar vários abrigos e medo de não encontrar alguém com um perfil compatível.": "not enough time to visit several shelters, and the fear of not finding a compatible match.",
    "realizar a montagem de motores e componentes automotivos complexos com máxima precisão, agilidade e sem cometer erros operacionais.": "to assemble engines and complex automotive components with maximum precision and speed, without operational errors.",
    "dominar rapidamente os novos processos e tecnologias da fábrica para garantir eficiência, manter um bom desempenho na produção e crescer profissionalmente dentro da montadora.": "to quickly master the factory's new processes and technologies, keeping production performance high and growing professionally within the company.",
    "aprender e memorizar sequências de montagem cheias de detalhes técnicos utilizando apenas manuais de instrução estáticos (papel ou PDFs longos), que geram dúvidas e lentidão durante o trabalho real.": "learning and memorising assembly sequences full of technical detail using only static instruction manuals (paper or long PDFs), which create doubt and slow down real work.",
    "Mapa de empatia": "Empathy map",
    "Mentalidade:": "Mindset:",
    "valoriza transparência. Se sente frustrada com sites de adoção antigos e confusos.": "values transparency. Gets frustrated with old, confusing adoption websites.",
    "observa detalhes visuais. Compara o app com redes sociais modernas pela facilidade.": "notices visual detail. Compares the app to modern social networks in terms of ease.",
    "explora fotos com calma. Prefere agendar visitas pelo chat do que ligar.": "browses photos slowly. Prefers booking visits by chat rather than calling.",
    "Fluxo do usuário": "User flow",
    "Detalhes Pet": "Pet details",
    "Formulário": "Form",
    "Finalização": "Wrap-up",
    "Sucesso": "Success",
    "Acesso": "Access",
    "Maquinário": "Machinery",
    "Módulo": "Module",
    "Módulo 3D": "3D Module",
    "Etapas": "Steps",
    "Suporte": "Support",
    "Concluído": "Completed",
    "Tipografia & cores": "Typography & colour",
    "Ao criar o PawMatch, priorizamos a simplicidade e elegância. Optamos por uma tipografia amigável e uma paleta de cores que transmite calma, sofisticação e clareza visual.": "In PawMatch, simplicity and elegance came first: a friendly typeface and a colour palette that conveys calm, sophistication and visual clarity.",
    "Escolhas tipográficas para leitura rápida de dados técnicos e uma paleta de baixa saturação, focada no conforto visual em turnos longos de trabalho.": "Type choices made for quickly reading technical data, with a low-saturation palette focused on visual comfort across long shifts.",
    "— títulos e call-to-action": "— headings and call-to-action",
    "Lato Regular — corpo de texto e descrições": "Lato Regular — body copy and descriptions",
    "Montserrat Regular — corpo de texto e descrições": "Montserrat Regular — body copy and descriptions",
    "Telas do": "App",
    "app": "screens",
    "Explore as principais telas que compõem o PawMatch, cada uma foi projetada com foco em clareza, simplicidade e navegação fluida.": "The main screens that make up PawMatch, each designed for clarity, simplicity and smooth navigation.",
    "Interfaces em": "Interfaces in",
    "funcionamento": "action",
    "As interfaces de alta fidelidade do sistema em funcionamento, evidenciando o contraste entre os componentes de controle, a assistência por chat e o foco absoluto no maquinário interativo.": "The system's high-fidelity interfaces in action, showing the contrast between control components, chat assistance and the absolute focus on the interactive machinery.",
    "Obrigada!": "Thank you!",
    "O PawMatch é muito mais do que um estudo de caso para mim; ele representa o meu primeiro projeto oficial como Designer UX/UI. Cada tela, cada decisão de cor e cada fluxo foi uma oportunidade de aprendizado e descoberta.": "PawMatch is much more than a case study to me; it was my first official project as a UI/UX Designer. Every screen, colour decision and flow was a chance to learn and discover.",
    "No Spirals entendi, na prática, que o trabalho não é deixar a tela bonita, e sim tirar peso da rotina de quem está no chão de fábrica. Cada fluxo e cada escolha visual nasceu de uma pergunta simples: isso facilita o trabalho dessa pessoa? O resultado foi algo raro em treinamento técnico: autonomia para quem opera, sem precisar de um manual ao lado.": "Spirals is where I learned, in practice, that the job is not to make the screen pretty but to take weight off the routine of the people on the factory floor. Every flow and visual choice came from one simple question: does this make their work easier? The result was something rare in technical training: autonomy for the operator, with no manual on the side.",
    "Próximo projeto": "Next project",
    "Todos os projetos": "All projects",
    "Início": "Home",

    // Atributos, títulos e metadados
    "Abrir menu": "Open menu",
    "Fechar menu": "Close menu",
    "Navegação principal": "Main navigation",
    "Ver projeto PawMatch": "View PawMatch project",
    "Ver projeto Spirals": "View Spirals project",
    "Baixar currículo (PDF)": "Download résumé (PDF)",
    "Julia apresentando em um workshop de IA": "Julia presenting at an AI workshop",
    "Telas do app PawMatch em mockups de celular": "PawMatch app screens in phone mockups",
    "Interface do Spirals exibida em um monitor sobre uma mesa": "The Spirals interface on a desktop monitor",
    "Capa do projeto PawMatch": "PawMatch project cover",
    "Principais telas do PawMatch: splash, onboarding, login, home, detalhes do pet, chat e formulário de adoção": "Main PawMatch screens: splash, onboarding, login, home, pet details, chat and adoption form",
    "Tela do Spirals — módulo 3D com o maquinário em destaque": "Spirals screen — 3D module with the machinery in focus",
    "Tela do Spirals — assistência por chat": "Spirals screen — chat assistance",
    "Tela do Spirals — etapas de montagem": "Spirals screen — assembly steps",
    "Tela do Spirals — detalhe do passo a passo": "Spirals screen — step-by-step detail",
    "Julia Lima — UX/UI Designer": "Julia Lima — UX/UI Designer",
    "PawMatch — Case de UX/UI · Julia Lima": "PawMatch — UX/UI Case Study · Julia Lima",
    "Spirals — Case de UX/UI · Julia Lima": "Spirals — UX/UI Case Study · Julia Lima",
    "Portfólio de Julia Lima, UX/UI Designer: UX Research, testes de usabilidade, design systems e interfaces acessíveis. Cases PawMatch e Spirals.": "Portfolio of Julia Lima, UX/UI Designer: UX Research, usability testing, design systems and accessible interfaces. Case studies: PawMatch and Spirals.",
    "Case PawMatch: app que desburocratiza a adoção de pets. Research, persona, fluxo, UI e telas — projeto de UX/UI por Julia Lima.": "PawMatch case study: an app that cuts the red tape out of pet adoption. Research, persona, flow, UI and screens — a UX/UI project by Julia Lima.",
    "Case Spirals: plataforma de treinamento imersivo 3D para a indústria, integrada à Unity. Research, persona, fluxo e interfaces — projeto de UX/UI por Julia Lima.": "Spirals case study: an immersive 3D training platform for industry, integrated with Unity. Research, persona, flow and interfaces — a UX/UI project by Julia Lima."
  };

  // Overrides por contexto (mesmo texto, tradução diferente)
  var CTX = [
    { sel: '#projetos h2', pt: 'Projetos', en: 'Selected' },
    { sel: '#experiencia h2', pt: 'Experiência', en: 'Professional' },
    { sel: '#sobre h2', pt: 'Quem', en: 'About' }
  ];

  // Atributos traduzidos além do texto visível
  var ATTRS = ['aria-label', 'alt', 'title', 'content'];

  var KEY = 'portfolio-lang';
  var ORIG = new WeakMap();      // nó de texto -> texto original (PT)
  var REVERSE = {};              // en -> pt, para desfazer traduções em atributos
  for (var k in DICT) if (Object.prototype.hasOwnProperty.call(DICT, k) && !(DICT[k] in REVERSE)) REVERSE[DICT[k]] = k;
  var observer = null;
  var veil = null;

  function readStored() {
    try { return localStorage.getItem(KEY) === 'en' ? 'en' : 'pt'; } catch (e) { return 'pt'; }
  }
  function writeStored(code) {
    try { localStorage.setItem(KEY, code); } catch (e) {}
  }

  var lang = readStored();

  // Evita um "flash" em português para quem já escolheu inglês: esconde a
  // página até a primeira tradução do conteúdo renderizado.
  if (lang === 'en') {
    veil = document.createElement('style');
    veil.setAttribute('data-i18n-veil', '');
    veil.textContent = 'body{visibility:hidden}';
    (document.head || document.documentElement).appendChild(veil);
    setTimeout(dropVeil, 2500); // segurança: nunca deixa a página invisível
  }
  function dropVeil() {
    if (veil && veil.parentNode) veil.parentNode.removeChild(veil);
    veil = null;
  }

  function translate(pt, node) {
    if (node) {
      for (var i = 0; i < CTX.length; i++) {
        var c = CTX[i];
        if (pt === c.pt && node.closest && node.closest(c.sel)) return c.en;
      }
    }
    return DICT[pt];
  }

  function applyText(c) {
    var base = ORIG.has(c) ? ORIG.get(c) : c.textContent;
    var m = base.match(/^(\s*)([\s\S]*?)(\s*)$/);
    if (!m || !m[2]) return;
    var want = base;
    if (lang === 'en') {
      var hit = translate(m[2], c.parentElement);
      if (hit) want = m[1] + hit + m[3];
    }
    if (c.textContent !== want) {
      if (!ORIG.has(c)) ORIG.set(c, base);
      c.textContent = want;
    }
  }

  // Atributos podem ser reescritos pelo runtime (ex.: aria-label do menu muda
  // com o estado), então não guardamos o original: traduzimos pelo valor atual.
  function applyAttrs(el) {
    for (var i = 0; i < ATTRS.length; i++) {
      var a = ATTRS[i];
      if (!el.hasAttribute(a)) continue;
      var cur = el.getAttribute(a);
      var want = lang === 'en' ? DICT[cur] : REVERSE[cur];
      if (want && want !== cur) el.setAttribute(a, want);
    }
  }

  function walk(node) {
    for (var i = 0; i < node.childNodes.length; i++) {
      var c = node.childNodes[i];
      if (c.nodeType === 3) {
        applyText(c);
      } else if (c.nodeType === 1) {
        if (c.hasAttribute('data-i18n-ui')) continue;
        if (c.tagName === 'SCRIPT' || c.tagName === 'STYLE' || c.tagName === 'X-DC') continue;
        applyAttrs(c);
        walk(c);
      }
    }
  }

  function applyHead() {
    var t = document.querySelector('title');
    if (t && t.firstChild) applyText(t.firstChild);
    var metas = document.head.querySelectorAll('meta[name="description"],meta[property="og:title"],meta[property="og:description"]');
    for (var i = 0; i < metas.length; i++) applyAttrs(metas[i]);
  }

  function paintToggle() {
    var pt = document.querySelector('[data-i18n-ui] [data-lang="pt"]');
    var en = document.querySelector('[data-i18n-ui] [data-lang="en"]');
    var pill = document.querySelector('[data-i18n-ui] [data-i18n-pill]');
    if (!pt || !en) return;
    [[pt, 'pt'], [en, 'en']].forEach(function (pair) {
      var on = pair[1] === lang;
      pair[0].style.color = on ? '#FAF8F5' : '#1A1A1A';
      pair[0].setAttribute('aria-pressed', String(on));
    });
    if (pill) pill.style.transform = lang === 'en' ? 'translateX(100%)' : 'translateX(0)';
  }

  function apply() {
    if (observer) observer.disconnect();
    var root = document.getElementById('dc-root');
    walk(root || document.body);
    applyHead();
    document.documentElement.setAttribute('lang', lang === 'en' ? 'en' : 'pt-BR');
    paintToggle();
    if (root && root.childNodes.length) dropVeil();
    if (observer) {
      observer.takeRecords();
      observer.observe(document.body, { childList: true, subtree: true, characterData: true, attributes: true, attributeFilter: ['aria-label', 'alt', 'title'] });
    }
  }

  function makeToggle() {
    var wrap = document.createElement('div');
    wrap.setAttribute('data-i18n-ui', '');
    wrap.setAttribute('role', 'group');
    wrap.setAttribute('aria-label', 'Idioma / Language');
    wrap.style.cssText = 'position:relative;display:inline-flex;gap:0;padding:4px;border-radius:999px;border:1px solid rgba(26,26,26,.2);background:rgba(250,248,245,.9)';
    var pill = document.createElement('span');
    pill.setAttribute('data-i18n-pill', '');
    pill.setAttribute('aria-hidden', 'true');
    pill.style.cssText = 'position:absolute;top:4px;left:4px;width:calc(50% - 4px);height:calc(100% - 8px);border-radius:999px;background:#6B1F24;transition:transform .38s cubic-bezier(.2,.6,.2,1);pointer-events:none';
    wrap.appendChild(pill);
    ['pt', 'en'].forEach(function (code) {
      var b = document.createElement('button');
      b.setAttribute('data-lang', code);
      b.type = 'button';
      b.textContent = code.toUpperCase();
      b.setAttribute('lang', code === 'pt' ? 'pt-BR' : 'en');
      b.setAttribute('aria-label', code === 'pt' ? 'Ver em português' : 'View in English');
      b.style.cssText = 'min-width:40px;min-height:34px;border:0;border-radius:999px;cursor:pointer;font:600 11px/1 Inter,sans-serif;letter-spacing:.18em;text-transform:uppercase;background:transparent;color:#1A1A1A;position:relative;z-index:1;transition:color .3s';
      b.addEventListener('click', function () {
        if (lang === code) return;
        lang = code;
        writeStored(code);
        apply();
      });
      wrap.appendChild(b);
    });
    return wrap;
  }

  // Coloca o toggle no header renderizado ([data-i18n-slot] dentro de #dc-root).
  // Nunca dentro do template cru (<x-dc>), senão o runtime copiaria os botões
  // sem os handlers. Sem slot na página, cai para um botão flutuante.
  function placeToggle() {
    var root = document.getElementById('dc-root');
    if (!root || !root.childNodes.length) return;
    var ui = document.querySelector('[data-i18n-ui]');
    var slot = root.querySelector('[data-i18n-slot]');
    if (slot) {
      if (ui && ui.parentNode === slot) return;
      if (ui) ui.parentNode.removeChild(ui);
      ui = makeToggle();
      slot.appendChild(ui);
    } else {
      if (ui && ui.parentNode === document.body) return;
      if (ui) ui.parentNode.removeChild(ui);
      ui = makeToggle();
      ui.style.position = 'fixed';
      ui.style.right = 'clamp(16px,3vw,32px)';
      ui.style.bottom = 'clamp(16px,3vw,32px)';
      ui.style.zIndex = '80';
      ui.style.boxShadow = '0 8px 24px rgba(26,26,26,.14)';
      document.body.appendChild(ui);
    }
    paintToggle();
  }

  function start() {
    var t;
    observer = new MutationObserver(function () {
      clearTimeout(t);
      t = setTimeout(function () { placeToggle(); apply(); }, 60);
    });
    placeToggle();
    apply();
  }

  if (document.readyState === 'loading') document.addEventListener('DOMContentLoaded', start);
  else start();
})();
