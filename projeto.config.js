// ============================================================
// CONFIGURACAO DO PROJETO — Agente de Atendimento + CRM
// VinPlast — Vin Plastic Comercio de Produtos Plásticos LTDA
// ============================================================

export default {
  // ── Meta ───────────────────────────────────────────────────
  projeto: 'Agente de Atendimento + CRM VinPlast',
  cliente: 'VinPlast',
  data: '25 de junho de 2026',
  versao: 'v1.0',

  // ── Brand ─────────────────────────────────────────────────
  brand: {
    logo: '/logo-labrego.png',
    clientLogo: '/logo-vinplast.webp',
    cores: { principal: '#1A4A2A', vibrante: '#4CAF50', escuro: '#0D2B15' },
  },

  // ── Pagina de resumo ──────────────────────────────────────
  resumo: {
    titulo: 'Como Vai Funcionar o Sistema VinPlast',
    subtitulo: 'Do primeiro contato no WhatsApp até o fechamento — Lumi qualifica automaticamente, CRM personalizado com dashboard por vendedor e follow-up sem perder nenhum lead.',
  },

  // ── Tabs ──────────────────────────────────────────────────
  tabs: [
    { id: 'hoje', label: 'Hoje (as is)', num: '01', desc: 'Processo atual — leads chegando sem triagem, follow-up manual e perda silenciosa de oportunidades' },
    { id: 'sistema', label: 'O Sistema (to be)', num: '02', desc: 'Agente de IA + CRM personalizado — qualificação automática, distribuição ao vendedor e funil completo' },
    { id: 'fluxo', label: 'Fluxograma', num: '03', desc: 'Fluxo visual do processo — do lead no WhatsApp até o fechamento da venda' },
    { id: 'spec', label: 'Referência Técnica', num: '04', desc: 'Telas, campos, regras de negócio e integrações — referência interna para o time de desenvolvimento' },
    { id: 'crono', label: 'Cronograma', num: '05', desc: '8 semanas de desenvolvimento + 21 dias de Hyper Care — go-live previsto para 15/08/2026' },
    { id: 'mockups', label: 'Mockups', num: '06', desc: 'Protótipos de alta fidelidade de todas as telas do sistema — desktop e mobile' },
    { id: 'design', label: 'Design System', num: '07', desc: 'Identidade visual, componentes e padrões visuais do sistema VinPlast' },
  ],

  // ── Tab 1: Hoje (as-is) ──────────────────────────────────
  hoje: {
    heroTitle: 'Como funciona hoje',
    heroDescription: 'Processo mapeado na reunião de briefing de 24/06/2026. O gargalo principal: ~20 leads por dia chegando sem triagem automática, follow-up 100% manual e sem visibilidade do funil.',

    intro: [
      'A VinPlast distribui produtos plásticos — conexões, tubulações, acessórios e insumos industriais — para consumidores finais e empresas em todo o Brasil. O investimento em Google Ads chega a R$ 16.000 por mês e gera em torno de 20 a 40 leads diários, mas quase todo esse volume passa por um único funil: o WhatsApp. São três números de WhatsApp diferentes, cada um operado individualmente por cada atendente, sem centralização de conversas nem visibilidade coletiva do que acontece com os leads.',
      'O processo começa quando o lead preenche um formulário no site e o dado vai para o RD Station. De lá, Vinícius — o proprietário — repassa manualmente para o vendedor disponível, que faz a abordagem inicial, qualifica o cliente e monta o orçamento no Bling. O problema começa exatamente aí: com 20 leads chegando por dia, o vendedor consegue atender de 10 a 15 com qualidade. Os demais ficam esperando — e enquanto esperam, estão cotando com três, quatro outros fornecedores. Quem responder primeiro tem vantagem real.',
      'A situação se agrava no follow-up. Depois que a proposta é enviada, o acompanhamento é feito à mão, sem sistema, sem alerta, sem cadência definida. Daqui a duas semanas, o vendedor já não lembra para quem mandou proposta. A VinPlast tem 625 propostas em aberto desde janeiro de 2026 e uma base de quase 5.000 contatos — mas sem ferramentas para trabalhar ativamente esse ativo. O resultado é uma taxa de conversão aquém do potencial, mesmo com o investimento pesado em tráfego.',
    ],
    ferramentasIntro: 'O processo atual está fragmentado em cinco ferramentas que não se comunicam. Cada uma guarda uma parte do processo, e cabe à equipe (especialmente ao próprio Vinícius) juntar as pontas manualmente. Abaixo, o papel de cada ferramenta e o problema que ela cria.',
    problemasIntro: 'Da fragmentação e da operação manual surgem quatro dores concretas no dia a dia — todas com custo mensurável de oportunidade e de tempo do dono da empresa.',
    jornadaIntro: 'Do clique no anúncio até a proposta enviada, o lead percorre hoje seis etapas. As que mais travam são a triagem manual pelo Vinícius e a falta de follow-up automatizado depois que a proposta sai.',

    metricas: [
      { num: '20–40', label: 'leads por dia (Google Ads)' },
      { num: 'R$ 16k', label: 'investimento/mês em tráfego' },
      { num: '625', label: 'propostas abertas desde jan/26' },
      { num: '5.000', label: 'contatos na base sem reativação' },
    ],

    ferramentas: [
      { abbr: 'WA', color: '#25D366', name: 'WhatsApp (3 números)', desc: 'Canal principal de atendimento. Três números diferentes, cada um no aparelho do atendente. Sem centralização, sem histórico compartilhado, sem visibilidade do funil.' },
      { abbr: 'RD', color: '#E8432C', name: 'RD Station', desc: 'Recebe leads do formulário do site e armazena contatos. Usado apenas como ponte de cadastro — sem funil, sem follow-up, sem métricas reais de conversão.' },
      { abbr: 'BL', color: '#1565C0', name: 'Bling (ERP)', desc: 'Onde os orçamentos/propostas são gerados e os pedidos fechados. Gera PDF da proposta. Tem exportação de planilha de produtos e estoque. Não integra com o processo de atendimento.' },
      { abbr: '@', color: '#3E6B8B', name: 'E-mail', desc: 'Canal secundário para clientes corporativos e envio de documentos. Não centralizado com o WhatsApp.' },
      { abbr: 'ML', color: '#FFF200', name: 'Mercado Livre / Shopee', desc: 'Canais de venda online com gestão própria (anúncios, reputação, tempo de resposta). Não integrados ao processo de atendimento principal.' },
    ],

    problemas: [
      { title: 'Atendimento lento — perda para concorrência', desc: 'O lead que vem do Google cotou com 3 a 5 concorrentes ao mesmo tempo. Quem responde primeiro tem vantagem. Com o processo atual, o primeiro contato pode demorar horas — e o cliente já fechou com outro.', icon: 'clock' },
      { title: 'Follow-up 100% manual — propostas esquecidas', desc: 'Com 20 leads por dia, o vendedor acumula 100 follow-ups pendentes em uma semana. Sem sistema, o acompanhamento fica na memória. As 625 propostas abertas desde janeiro comprovam o tamanho da perda.', icon: 'x-circle' },
      { title: 'Triagem manual gasta tempo do dono', desc: 'Vinícius revisa cada lead do RD Station e repassa para o vendedor. Isso o prende numa operação que deveria ser automática, impedindo foco estratégico.', icon: 'alert-triangle' },
      { title: 'Zero visibilidade do funil', desc: 'Não existe relatório que diga quantos leads chegaram, quantos foram qualificados, qual é a taxa de conversão por vendedor ou de onde vêm os clientes que fecham. A agência de tráfego pergunta — e não há resposta.', icon: 'user-minus' },
    ],

    jornada: [
      { title: 'Lead preenche formulário no site', desc: 'O formulário captura nome, telefone, e-mail e CNPJ e envia para o RD Station. O lead também pode chegar diretamente pelo WhatsApp.' },
      { title: 'Vinícius repassa para o vendedor', desc: 'Vinícius recebe o lead no RD Station, avalia se é qualificado e repassa manualmente o número para o vendedor. Gargalo diário que consome horas do dono.' },
      { title: 'Vendedor faz a qualificação', desc: 'Liga ou manda mensagem para entender o perfil: consumidor final, revendedor, fornecedor ou prestador de serviço, produto de interesse, quantidade estimada. Processo manual sem critérios padronizados.' },
      { title: 'Consulta e montagem do orçamento no Bling', desc: 'Com o lead qualificado, o vendedor consulta preço, prazo e estoque no Bling e monta a proposta. Às vezes precisa esperar a análise de crédito do Danilo (sócio) para dar prazo de pagamento.' },
      { title: 'Proposta enviada pelo WhatsApp', desc: 'PDF gerado no Bling enviado pelo WhatsApp do vendedor. A partir daí, o follow-up é manual e depende da memória do vendedor.' },
      { title: 'Follow-up eventual — ou silêncio', desc: 'Sem sistema de alerta, o acompanhamento acontece quando o vendedor lembra. Leads quentes esfriam. Propostas ficam abertas por meses sem retorno.' },
    ],

    resumoFinal: 'O problema central não é falta de leads — é velocidade e organização. Com R$ 16k/mês em anúncios gerando 20 a 40 leads/dia, a VinPlast tem matéria-prima de sobra. O que falta é uma estrutura que responda em segundos, qualifique sem esforço manual e acompanhe cada proposta até o fechamento.',
  },

  // ── Tab 2: O Sistema (to-be) ─────────────────────────────
  sistema: {
    visaoGeral: {
      titulo: 'O que estamos construindo',
      descricao: 'Um Agente de Atendimento com IA integrado a um CRM personalizado — atende leads em segundos, qualifica automaticamente, distribui para o vendedor certo e mantém o follow-up ativo até o fechamento.',
      intro: [
        'O sistema VinPlast tem dois componentes que trabalham juntos. O primeiro é o Agente de Atendimento — uma inteligência artificial que responde ao lead no WhatsApp em segundos, conduz a qualificação por perguntas naturais e categoriza o contato antes que qualquer vendedor precise tocar nele. O segundo é o CRM, um painel sob medida onde tudo fica registrado: cada lead, cada proposta, cada follow-up, com visibilidade total para Vinícius e para os vendedores.',
        'O fluxo começa no WhatsApp — seja por formulário do Google ou por contato direto. A Lumi (agente de atendimento feminina) responde imediatamente, se apresenta de forma natural (sem revelar que é IA, a não ser que seja perguntado), e conduz uma conversa para entender o perfil do contato: consumidor final, revendedor, fornecedor, prestador de serviço ou saque/reclamação. Fornecedores tentando vender são descartados gentilmente. Prestadores de serviço (transportadoras, financeiras, etc.) são direcionados para comercial@vinas.com.br. Saques e reclamações vão para saque@plasice.com.br. Consumidores finais com valor estimado abaixo de R$ 2.000 são direcionados ao e-commerce. Revendedores são sempre atendidos com venda à vista, independente do ticket — não são descartados nem filtrados por valor. Para qualificados, a Lumi consulta o CNPJ no Serasa (score + prática de mercado), coleta o subgrupo do cliente (indústria, indústria alimentícia, hospital, condomínio, hotéis), verifica se é cliente novo ou recorrente, pergunta sobre transportadora e se já cotou com concorrente, e monta o resumo do lead. A notificação chega ao vendedor no WhatsApp com 5 minutos para assumir o atendimento.',
        'No CRM, cada lead tem uma ficha com todo o histórico — desde a primeira mensagem da Lumi até a proposta enviada pelo vendedor. O funil mostra em que etapa está cada oportunidade, quanto tempo está parada e qual vendedor é responsável. O dashboard de performance dá a Vinícius a visão que ele não tem hoje: quantos leads chegaram, quantos foram qualificados, de onde vieram (Google, e-mail marketing, Instagram, WhatsApp direto), qual é o valor em propostas abertas, a taxa de conversão por vendedor e como está o progresso em relação à meta mensal de cada vendedor e da equipe.',
      ],
    },

    overviewCards: [
      { title: 'Agente de Atendimento (WhatsApp)', desc: 'Responde em segundos, qualifica o lead, consulta Serasa e distribui ao vendedor — 24h/dia, 7 dias/semana', sectionId: 'sec-modulo-01' },
      { title: 'CRM Labrego Personalizado', desc: 'Funil visual com histórico completo, priorização de leads quentes e dashboards de performance por vendedor', sectionId: 'sec-modulo-02' },
      { title: 'Follow-up Automático', desc: 'Cadência diária de acompanhamento até o cliente responder — com agendamento de retorno e aviso ao vendedor', sectionId: 'sec-modulo-03' },
    ],

    modulos: [
      {
        num: '01',
        titulo: 'Agente de Atendimento Inteligente (WhatsApp)',
        cor: '#1A4A2A',
        percent: '50%',
        descricao: 'Porta de entrada dos leads: atendimento imediato, qualificação automática, triagem por perfil e distribuição ao vendedor em até 5 minutos.',
        sectionId: 'sec-modulo-01',
        items: [
          'Resposta imediata ao lead (segundos, 24h/dia, 7 dias/semana)',
          'Apresentação natural — nome Lumi (feminino), tom informal com emojis',
          'Qualificação: identificação de consumidor final, revendedor, fornecedor, prestador de serviço ou saque/reclamação',
          'Subgrupos de consumidor final: indústria, indústria alimentícia, hospital, condomínio, hotéis — para segmentação de marketing',
          'Revendedor com ticket acima de R$ 5.000 → vendedor (3 primeiros pedidos à vista); abaixo → consumidor final',
          'Consumidor final com ticket abaixo de R$ 2.000 → e-commerce; acima → vendedor',
          'Prestador de serviço (transportadoras, financeiras) → e-mail comercial@vinas.com.br',
          'Saque/reclamação → e-mail saque@plasice.com.br',
          'Coleta de dados: nome, e-mail, telefone, CPF/CNPJ, produto, quantidade, se tem transportadora, se já cotou com concorrente',
          'Consulta Serasa por CNPJ — score + prática de mercado (à vista ou a prazo). CPF = sempre à vista',
          'Envio de catálogo de produtos (PDF) quando solicitado pelo lead',
          'Identificação de cliente novo vs. recorrente (tag para métricas)',
          'Distribuição ao vendedor via WhatsApp com resumo do lead (prazo: 5 minutos)',
          'Escalação para Vinícius em caso de reclamação',
          'Encaminhamento para humano quando o cliente solicitar',
          'Atendimento fora do horário comercial: conduz a qualificação, avisa que o vendedor retorna no próximo dia útil',
        ],
        secoes: [
          {
            id: 'sec-modulo-01',
            tag: 'Agente de Atendimento',
            heroNum: '01',
            heroTitle: 'Do lead ao vendedor em menos de 5 minutos',
            heroDescription: 'O Agente responde em segundos, qualifica, consulta o Serasa e notifica o vendedor — sem que Vinícius precise intervir',
            intro: [
              'A Lumi é a nova porta de entrada da VinPlast. Quando um lead preenche o formulário no site ou manda mensagem diretamente no WhatsApp, a Lumi responde em segundos — a qualquer hora, qualquer dia. Ela se apresenta pelo nome, de forma natural e informal, com emojis, para entender quem é esse contato e o que ele precisa. Se o lead perguntar, responde que é uma assistente virtual — caso contrário, mantém a conversa fluida sem mencionar IA.',
              'A qualificação segue as regras de negócio da VinPlast. A Lumi identifica se o contato é consumidor final, revendedor, fornecedor, prestador de serviço ou saque/reclamação. Fornecedores tentando vender algo são descartados gentilmente. Prestadores de serviço (transportadoras, financeiras, empresas oferecendo serviços) são direcionados para comercial@vinas.com.br. Saques e reclamações vão para saque@plasice.com.br. Consumidores finais são classificados por subgrupo — indústria, indústria alimentícia, hospital, condomínio, hotéis — para posterior segmentação de marketing. Ticket abaixo de R$ 2.000 vai para o e-commerce. Revendedores são sempre atendidos com venda à vista, independente do valor do ticket — não são descartados nem filtrados por valor mínimo.',
              'Antes de notificar o vendedor, a Lumi consulta o CNPJ no Serasa — buscando não apenas o score numérico, mas também a prática de mercado (se a empresa opera à vista, a prazo, com garantias). Se o score estiver abaixo de 560 mas a prática de mercado indicar vendas a prazo, o lead pode ser faturado. CPF é sempre à vista, inclusive revenda por CPF. A Lumi também pergunta se o lead já cotou com algum concorrente e se tem transportadora própria ou precisa de cotação de frete. O resumo chega ao vendedor pelo WhatsApp com 5 minutos para responder. Se não responder, o lead é repassado ao outro vendedor. O CRM registra tudo automaticamente — sem entrada manual.',
            ],
            blocos: [
              {
                tipo: 'dashboard',
                titulo: 'Jornada do lead com o Agente',
                cards: [
                  { title: '1. Recepção imediata', desc: 'Lead chega pelo WhatsApp (formulário do Google ou contato direto). Lumi responde em segundos com saudação + apresentação', action: 'Disponível 24h/7 dias' },
                  { title: '2. Identificação de perfil', desc: 'Lumi identifica: consumidor final, revendedor, fornecedor, prestador de serviço ou saque/reclamação. Coleta CPF/CNPJ e subgrupo (indústria, alimentícia, hospital, condomínio, hotéis)', action: 'Triagem inteligente' },
                  { title: '3. Roteamento por tipo', desc: 'Fornecedor → descarte gentil. Prestador de serviço → comercial@vinas.com.br. Saque → saque@plasice.com.br. Revendedor > R$5k → vendedor (à vista). < R$2k → e-commerce', action: 'Regras automáticas' },
                  { title: '4. Coleta de dados', desc: 'Produto, quantidade, se tem transportadora, se já cotou com concorrente, demanda imediata ou projeto futuro. Verifica se é cliente novo ou recorrente', action: 'Dados para proposta assertiva' },
                  { title: '5. Consulta Serasa', desc: 'CNPJ consultado automaticamente. Score + prática de mercado (à vista/a prazo). CPF = sempre à vista. Pode enviar catálogo de produtos quando solicitado', action: 'Informativo para o vendedor' },
                  { title: '6. Distribuição ao vendedor', desc: 'Notificação no WhatsApp com resumo completo do lead. Prazo de 5 minutos para responder', action: 'Round-robin entre vendedores' },
                  { title: '7. Escalação inteligente', desc: 'Se vendedor não responde em 5 min → passa ao outro. Reclamação → escala direto para Vinícius. Pedido de humano → transfere imediatamente', action: 'Zero lead perdido por silêncio' },
                ],
              },
              {
                tipo: 'comparacao',
                titulo: 'Antes vs. Depois',
                antes: [
                  'Vinícius filtra e repassa cada lead manualmente',
                  'Primeiro contato pode demorar horas',
                  'Sem consulta de crédito antes do orçamento',
                  'Revendedor descartado sem avaliação',
                ],
                depois: [
                  'Lumi filtra, qualifica e distribui automaticamente',
                  'Primeiro contato em segundos — 24h/dia',
                  'Score Serasa + prática de mercado já na mão do vendedor',
                  'Revendedor qualificado por ticket — acima de R$ 5k segue para venda',
                ],
              },
            ],
          },
        ],
      },
      {
        num: '02',
        titulo: 'CRM Labrego Personalizado',
        cor: '#2E7D32',
        percent: '35%',
        descricao: 'Funil visual sob medida com todo o histórico de conversas, distribuição por fila, dashboards de performance e migração da base atual (RD Station).',
        sectionId: 'sec-modulo-02',
        items: [
          'Cadastro automático do lead pela Lumi — sem digitação manual',
          'Funil de vendas visual: Novo → Qualificado → Em Atendimento → Proposta Enviada → Follow-up → Fechado/Perdido',
          'Ficha do lead: histórico completo de conversas, dados do Serasa (score + prática de mercado), propostas anexadas (PDF do Bling)',
          'Tag cliente novo vs. recorrente — para métricas de aquisição',
          'Painel do vendedor: vê apenas os próprios leads, followups do dia, propostas em aberta, taxa de conversão e meta; Admin (Vinícius) vê todos',
          'Dashboard de performance: leads/dia, taxa de qualificação, conversão por vendedor, valor em propostas abertas, meta vs. realizado por vendedor, origem dos leads (Google, e-mail marketing, Instagram, WhatsApp direto)',
          'Meta mensal por vendedor e meta geral da equipe no dashboard',
          'Migração da base do RD Station (contatos, histórico de propostas)',
          'Captura dos leads do Google (formulário/webhook) diretamente para o CRM',
          'Acesso responsivo (web + celular)',
        ],
        secoes: [
          {
            id: 'sec-modulo-02',
            tag: 'CRM Personalizado',
            heroNum: '02',
            heroTitle: 'Visibilidade total do funil — do lead ao fechamento',
            heroDescription: 'Tudo registrado automaticamente pelo Agente. Vendedor foca em vender; Vinícius acompanha o funil em tempo real',
            intro: [
              'O CRM Labrego substitui o RD Station e o controle manual que existe hoje. Cada lead que chega — pelo formulário do Google, pelo WhatsApp ou registrado manualmente pelo vendedor para ligações diretas — tem sua ficha criada automaticamente pela Lumi, com nome, contato, CNPJ, produto de interesse, score Serasa + prática de mercado, subgrupo (indústria, alimentícia, hospital, etc.), tag de cliente novo ou recorrente, e todo o histórico de conversas. O vendedor abre a ficha e já tem o contexto completo antes de ligar.',
              'O funil visual mostra em que etapa está cada oportunidade, há quanto tempo está parada e qual vendedor é responsável. O Vinícius enxerga tudo — todos os vendedores, todas as etapas, valor total em propostas abertas e meta da equipe. Cada vendedor enxerga apenas os próprios leads, seus followups do dia, propostas em aberta e sua meta individual. As propostas geradas no Bling podem ser anexadas à ficha do cliente para que a Lumi possa referenciar o número e o conteúdo nas cadências de follow-up.',
              'O dashboard de performance responde às perguntas que a agência de tráfego faz hoje sem resposta: quantos leads chegaram, quantos foram qualificados, qual é a taxa de conversão por vendedor, de onde vieram os que fecharam (Google, e-mail marketing, Instagram, WhatsApp direto), qual é o ticket médio, qual é o valor total em propostas abertas e como está o progresso em relação à meta mensal de cada vendedor. A migração da base do RD Station (incluindo os 5.000 contatos e as 625 propostas abertas) é parte do escopo.',
            ],
            blocos: [
              {
                tipo: 'features',
                titulo: 'Funcionalidades do CRM',
                items: [
                  'Funil visual com 7 colunas: Novo · Qualificado · Em Atendimento · Proposta Enviada · Follow-up · Fechado · Perdido',
                  'Ficha do lead: histórico de conversas, Serasa (score + prática de mercado), propostas, anotações, tempo na coluna, subgrupo e tag novo/recorrente',
                  'Dashboard geral: leads/dia, qualificação, conversão por vendedor, valor em propostas abertas, meta vs. realizado, origem dos leads',
                  'Dashboard do vendedor: seus leads, followups do dia, propostas em aberta, taxa de conversão, meta individual e alertas',
                  'Controle de acesso: Admin vê tudo; vendedor vê apenas os próprios',
                  'Alerta de proposta respondida: popup para o vendedor ligar imediatamente',
                  'Migração da base do RD Station e da planilha de propostas do Bling',
                  'Captura automática de leads do Google Forms/webhook',
                  'Perguntas frequentes respondidas pela Lumi: localização, se vendem para todo o Brasil, se são fabricantes, como funciona retirada no local',
                  'Acesso via web e celular (responsivo)',
                ],
              },
            ],
          },
        ],
      },
      {
        num: '03',
        titulo: 'Follow-up Automático e Reativação de Base',
        cor: '#1B5E20',
        percent: '15%',
        descricao: 'Cadência automática de acompanhamento para propostas sem resposta + campanha de reativação dos 5.000 contatos da base histórica.',
        sectionId: 'sec-modulo-03',
        items: [
          'Follow-up diário para propostas sem resposta (horário configurável — padrão: manhã)',
          'Reconhecimento de resposta do cliente: aviso imediato ao vendedor responsável',
          'Agendamento de retorno: se cliente pede para contatar daqui X dias, a IA agenda e retoma',
          'Encerramento automático: se cliente confirma descarte, registra motivo e move para "Perdido"',
          'Reativação de base: projeto paralelo com agente separado (número de WhatsApp e personalidade diferentes), importação da base de clientes (nome, telefone, e-mail, cidade, estado)',
          'Mensagens personalizadas por segmento e por contexto (nome, produto, número da proposta)',
        ],
        secoes: [
          {
            id: 'sec-modulo-03',
            tag: 'Follow-up e Reativação',
            heroNum: '03',
            heroTitle: 'Nenhuma proposta esquecida',
            heroDescription: 'Cadência diária automática com reconhecimento de resposta — e campanha para trabalhar os 5.000 contatos da base histórica',
            intro: [
              'Quando o vendedor move o lead para "Proposta Enviada" no CRM, a Lumi entra na cadência de follow-up. Por padrão, manda mensagem no dia seguinte e continua diariamente enquanto o cliente não responder. O texto referencia o nome do cliente e o número da proposta, é escrito de forma natural e varia a cada envio para não parecer robótico. Quando o cliente responde — mesmo que seja para pedir mais 30 dias — a Lumi avisa o vendedor imediatamente e pausa a cadência automática.',
              'Se o cliente pedir para ser contatado numa data futura ("me liga dia 15"), a Lumi anota e retoma automaticamente naquele dia, com uma mensagem contextualizando que é o retorno combinado. Se o cliente sinalizar que não tem mais interesse, a Lumi tenta captar o motivo (preço, frete, análise, outro fornecedor) e registra no CRM antes de mover o card para "Perdido".',
              'A reativação da base histórica (5.000 contatos e 625 propostas abertas) será tratada como projeto paralelo com agente separado — número de WhatsApp diferente, identidade e personalidade próprias. A plataforma de disparo (ex.: Tuího) será definida separadamente por exigir configuração específica para conformidade com as políticas do Meta. A importação da base de clientes (nome, telefone, e-mail, cidade, estado) do RD Station é parte do escopo principal.',
            ],
            blocos: [
              {
                tipo: 'features',
                titulo: 'Como funciona o follow-up',
                items: [
                  'Trigger: vendedor move o lead para "Proposta Enviada" no CRM',
                  'Cadência: mensagem diária no horário configurado (padrão: manhã, configurável)',
                  'Reconhecimento: Agente detecta resposta → avisa vendedor → para cadência automática',
                  'Agendamento: cliente pede retorno em X dias → IA agenda e retoma na data',
                  'Encerramento: cliente descarta → IA capta motivo → registra e move para Perdido',
                  'Reativação de base: 3 segmentos com mensagens personalizadas por contexto',
                ],
              },
            ],
          },
        ],
      },
    ],

    escopo: {
      inclui: [
        'Agente de Atendimento Lumi (feminino) no WhatsApp — qualificação, triagem por 5 perfis, distribuição e follow-up',
        'CRM Labrego personalizado com funil, ficha de lead, dashboard geral e dashboard do vendedor',
        'Integração Serasa — consulta de score + prática de mercado por CNPJ (cortesia — tarifa de consulta repassada ao cliente)',
        'Integração Google → CRM (formulário/webhook para captura de leads)',
        'Cadência automática de follow-up para propostas sem resposta',
        'Migração da base do RD Station para o novo CRM',
        'Envio automático de catálogo de produtos (PDF) quando solicitado pelo lead',
        'Perguntas frequentes respondidas pela Lumi (localização, cobertura nacional, fabricante, retirada)',
        'Meta mensal por vendedor e meta geral da equipe',
        'Acesso responsivo (web + celular)',
        '2 sessões de treinamento gravadas: (1) Operação da Lumi; (2) CRM e dashboard',
        '21 dias de Hyper Care com acompanhamento ativo',
      ],
      naoInclui: [
        { item: 'Integração com Bling (orçamento ponta a ponta, estoque, pós-venda)', explicacao: 'O orçamento continua sendo gerado no Bling pelo vendedor. Propostas em PDF podem ser anexadas manualmente à ficha do lead no CRM.' },
        { item: 'Reativação de base (agente separado)', explicacao: 'Projeto paralelo com número de WhatsApp e identidade próprios. Plataforma de disparo (Tuího) a definir. Escopo e custo tratados separadamente.' },
        { item: 'Segunda empresa / segundo CNPJ (linha do Simples / marketplace)', explicacao: 'Escopo desta fase é a VinPlast. Segunda empresa ou segundo número de WhatsApp é Fase 2.' },
        { item: 'Integração com Instagram, Meta Ads, Shopee, Mercado Livre', explicacao: 'Canais adicionais podem ser integrados via pacote de horas na fase de manutenção.' },
        { item: 'Disparo em massa / e-mail marketing (Tuího ou similar)', explicacao: 'Requer provedor verificado e configuração específica para conformidade Meta. Projeto paralelo.' },
        { item: 'Relatórios e dashboards customizados além dos painéis padrão', explicacao: 'Os painéis entregues cobrem as métricas mapeadas no briefing e na reunião de aprovação. Personalizações adicionais via pacote de horas.' },
      ],
    },
  },

  // ── Tab 4: Referência Técnica ─────────────────────────────
  spec: {
    intro: [
      'Esta é a referência técnica do sistema VinPlast — o contrato campo-a-campo que guia o desenvolvimento sem improviso. Cada tela abaixo detalha objetivo, campos, validações, estados, regras de negócio e integração com a Lumi (agente de atendimento). As regras de qualificação, faixas de score Serasa + prática de mercado e critérios de distribuição foram definidos na reunião de aprovação de 02/07/2026 e estão registrados neste documento.',
      'O sistema tem dois mundos: o painel interno da equipe comercial (CRM — funil, fichas de lead, dashboard geral e do vendedor, configurações) e a Lumi no WhatsApp (qualificação, distribuição, follow-up — sem interface gráfica para o cliente final). A navegação segue o fluxo natural do negócio: o lead chega → a Lumi atende e registra → o vendedor abre o CRM, qualifica e movimenta o funil → a IA faz o follow-up automático → Vinícius acompanha pelo dashboard.',
    ],
    telas: [
      {
        nome: 'Dashboard (Painel Geral)',
        rota: '/dashboard',
        objetivo: 'Visão executiva do funil comercial em tempo real — leads por dia, qualificação, performance por vendedor e progresso de meta.',
        papeis: ['Admin (Vinícius)'],
        campos: [
          { nome: 'Período', tipo: 'select / date range', obrigatorio: false, validacao: 'Hoje · Esta semana · Este mês · Intervalo customizado' },
          { nome: 'Vendedor', tipo: 'select', obrigatorio: false, validacao: 'Todos · Vendedor 1 · Vendedor 2 (Admin apenas)' },
        ],
        filtros: [
          { nome: 'Período', comportamento: 'Filtra todos os KPIs e gráficos simultaneamente' },
          { nome: 'Vendedor', comportamento: 'Segmenta os dados por vendedor (Admin apenas)' },
        ],
        tabela: {
          colunas: ['Lead', 'Origem', 'Etapa do funil', 'Vendedor', 'Tempo na etapa', 'Valor estimado'],
          ordenacao: 'Por data de entrada (mais recente primeiro); ordenável por etapa e valor',
          paginacao: '20 por página',
          acoesLinha: ['Abrir ficha do lead'],
        },
        acoes: [
          { rotulo: 'Filtrar período / vendedor', faz: 'Atualiza todos os KPIs e gráficos', confirmacao: false, feedback: 'Dados atualizados em tempo real' },
        ],
        estados: {
          vazio: 'Sem leads no período: "Nenhum lead neste período. Tente um intervalo diferente."',
          carregando: 'Skeleton dos KPIs e gráficos.',
          erro: '"Não conseguimos carregar o painel." + "Tentar de novo".',
          semPermissao: 'Vendedor é redirecionado para o funil (Kanban) com visão dos próprios leads.',
        },
        regras: [
          'KPIs principais: Leads recebidos · Qualificados (%) · Em proposta · Fechados · Valor em propostas abertas · Meta vs. realizado por vendedor · Tempo médio de resposta · Taxa de conversão.',
          'Gráfico de origem: Google Ads · WhatsApp direto · Ligação manual · E-mail marketing · Instagram.',
          'Admin vê todos os vendedores e meta geral; vendedor vê apenas os próprios dados, seus followups do dia, propostas em aberta e meta individual.',
          'Tag cliente novo vs. recorrente visível nos KPIs para medir aquisição vs. recompra.',
        ],
        dados: {
          origem: 'Coleção leads com eventos de status e timestamps; metas configuradas no painel de Admin',
          persiste: 'Somente leitura (dashboard)',
        },
      },
      {
        nome: 'Funil de Vendas (Kanban)',
        rota: '/funil',
        objetivo: 'Visualização e gestão do pipeline — cada lead é um card movimentável entre as etapas do funil, com tempo de permanência visível.',
        papeis: ['Admin', 'Vendedor'],
        campos: [
          { nome: 'Busca', tipo: 'texto', obrigatorio: false, validacao: 'Livre (nome, empresa, CNPJ, número de proposta); debounce 300ms' },
          { nome: 'Vendedor (filtro)', tipo: 'select', obrigatorio: false, validacao: 'Admin vê todos; vendedor vê apenas os próprios' },
        ],
        filtros: [
          { nome: 'Busca', comportamento: 'Filtra cards por texto; aplica ao digitar' },
          { nome: 'Vendedor', comportamento: 'Admin filtra por vendedor; vendedor não vê este filtro' },
        ],
        tabela: {
          colunas: ['Card: nome do lead + empresa + valor estimado + tempo na coluna + badge de temperatura'],
          ordenacao: 'Por tempo na coluna (mais antigo primeiro, alerta visual após limiar)',
          paginacao: 'Scroll por coluna',
          acoesLinha: ['Abrir ficha', 'Mover para outra etapa (drag-and-drop ou menu)'],
        },
        acoes: [
          { rotulo: 'Mover card', faz: 'Arrasta o card para outra coluna do funil', confirmacao: false, feedback: 'Card atualizado; histórico registrado automaticamente' },
          { rotulo: 'Abrir ficha', faz: 'Abre a ficha completa do lead', confirmacao: false, feedback: 'Navega para /funil/:leadId' },
          { rotulo: 'Novo lead (manual)', faz: 'Abre formulário de cadastro manual (para ligações recebidas)', confirmacao: 'Modal', feedback: 'Lead criado na coluna Novo' },
        ],
        estados: {
          vazio: 'Funil vazio: "Nenhum lead no funil. O Agente populará automaticamente quando os primeiros leads chegarem." + botão "Adicionar lead manualmente".',
          carregando: 'Skeleton das colunas.',
          erro: '"Não foi possível carregar o funil." + "Tentar de novo".',
          semPermissao: 'Vendedor não vê leads de outros vendedores.',
        },
        regras: [
          'Colunas: Novo · Qualificado · Em Atendimento · Proposta Enviada · Follow-up · Fechado · Perdido.',
          'Badge de temperatura: Quente (vermelho) · Morno (âmbar) · Frio (azul) — definido pela Lumi com base no comportamento do lead.',
          'Alerta visual quando card está na mesma coluna há mais de X dias (limiar definido por coluna — a definir no mapeamento).',
          'A Lumi popula automaticamente "Novo" e move para "Qualificado" quando a triagem é concluída. O vendedor move de "Qualificado" em diante.',
        ],
        dados: {
          origem: 'Coleção leads (status, etapa, vendedor, temperatura, timestamps por etapa)',
          persiste: 'Atualiza etapa e registra evento de movimento com autor e timestamp',
        },
      },
      {
        nome: 'Ficha do Lead',
        rota: '/funil/:leadId',
        objetivo: 'Histórico completo do lead — dados de contato, score Serasa, conversa com o Agente, propostas anexadas, anotações do vendedor e linha do tempo de eventos.',
        papeis: ['Admin', 'Vendedor (apenas os próprios)'],
        campos: [
          { nome: 'Anotação do vendedor', tipo: 'textarea', obrigatorio: false, validacao: 'Texto livre; registra autor e timestamp' },
          { nome: 'Proposta (anexar PDF)', tipo: 'upload', obrigatorio: false, validacao: 'PDF exportado do Bling; fica vinculado ao lead para referência do Agente e histórico' },
          { nome: 'Temperatura', tipo: 'select', obrigatorio: false, validacao: 'Quente · Morno · Frio — vendedor pode ajustar' },
          { nome: 'Próximo contato (agendamento)', tipo: 'data + hora', obrigatorio: false, validacao: 'Ícone de calendário; o Agente retoma na data agendada' },
        ],
        acoes: [
          { rotulo: 'Mover etapa', faz: 'Move o lead para outra coluna do funil', confirmacao: false, feedback: 'Toast "Lead movido para {etapa}"' },
          { rotulo: 'Salvar anotação', faz: 'Salva a anotação com autor e timestamp', confirmacao: false, feedback: 'Toast "Anotação salva"' },
          { rotulo: 'Anexar proposta', faz: 'Upload do PDF do Bling vinculado ao lead', confirmacao: false, feedback: 'Sucesso: arquivo listado; erro: "Não foi possível anexar o arquivo"' },
          { rotulo: 'Agendar próximo contato', faz: 'Define data para o Agente retomar o follow-up', confirmacao: false, feedback: 'Toast "Follow-up agendado para {data}"' },
          { rotulo: 'Encerrar lead', faz: 'Move para Fechado ou Perdido com motivo', confirmacao: 'Modal com campo de motivo', feedback: 'Card movido; histórico atualizado' },
        ],
        estados: {
          carregando: 'Skeleton da ficha.',
          erro: '"Não conseguimos carregar o lead." + "Tentar de novo".',
          semPermissao: 'Vendedor não acessa fichas de outros vendedores.',
        },
        regras: [
          'A conversa completa com a Lumi (WhatsApp) fica registrada na linha do tempo da ficha.',
          'O score Serasa + prática de mercado e os alertas de crédito ficam visíveis na ficha para o vendedor.',
          'Subgrupo do cliente (indústria, alimentícia, hospital, condomínio, hotéis) e tag novo/recorrente visíveis na ficha.',
          'Se o lead informou que já cotou com concorrente, essa informação fica na ficha para o vendedor ser mais assertivo na proposta.',
          'PDF de proposta anexado fica disponível para a Lumi referenciar nas cadências de follow-up.',
          'O campo "Próximo contato" sobrescreve a cadência automática — a Lumi retoma na data indicada em vez de seguir o follow-up diário.',
        ],
        dados: {
          origem: 'Doc leads/{leadId} com subcoleções: eventos (timeline), conversas (mensagens do Agente), arquivos (propostas PDF)',
          persiste: 'Atualiza o doc do lead; registra eventos na subcoleção',
        },
      },
      {
        nome: 'Novo Lead (Cadastro Manual)',
        rota: '/funil/novo',
        objetivo: 'Cadastrar leads provenientes de ligações diretas que chegam fora do WhatsApp — para que todo o pipeline seja centralizado no CRM.',
        papeis: ['Admin', 'Vendedor'],
        campos: [
          { nome: 'Nome completo', tipo: 'texto', obrigatorio: true, validacao: 'Mín. 2 caracteres; só letras e espaços' },
          { nome: 'Telefone', tipo: 'telefone com seletor de país', obrigatorio: true, validacao: 'Formato (XX) XXXXX-XXXX; seletor de país (DDI)' },
          { nome: 'E-mail', tipo: 'e-mail', obrigatorio: false, validacao: 'Formato válido com @ e domínio' },
          { nome: 'CNPJ / CPF', tipo: 'texto com máscara', obrigatorio: false, validacao: 'CNPJ: XX.XXX.XXX/XXXX-XX · CPF: XXX.XXX.XXX-XX' },
          { nome: 'Empresa', tipo: 'texto', obrigatorio: false, validacao: 'Razão social ou nome fantasia' },
          { nome: 'Produto de interesse', tipo: 'texto', obrigatorio: false, validacao: 'Livre — o que o lead busca' },
          { nome: 'Quantidade estimada', tipo: 'número', obrigatorio: false, validacao: 'Inteiro positivo; unidade a definir por produto' },
          { nome: 'Valor estimado (R$)', tipo: 'moeda', obrigatorio: false, validacao: 'Formato R$ 1.234,56; inteiro ≥ 0' },
          { nome: 'Tipo de lead', tipo: 'select', obrigatorio: true, validacao: 'Consumidor final · Revendedor · Prestador de serviço · Fornecedor · Saque/Reclamação' },
          { nome: 'Subgrupo', tipo: 'select', obrigatorio: false, validacao: 'Indústria · Indústria alimentícia · Hospital · Condomínio · Hotéis · Outro (para consumidor final)' },
          { nome: 'Origem', tipo: 'select', obrigatorio: true, validacao: 'Google Ads · WhatsApp direto · Ligação recebida · Indicação · E-mail marketing · Instagram · Mercado Livre · Shopee · Outro' },
          { nome: 'Cliente novo ou recorrente', tipo: 'select', obrigatorio: false, validacao: 'Novo · Recorrente (default: Novo)' },
          { nome: 'Já cotou com concorrente?', tipo: 'toggle', obrigatorio: false, validacao: 'On/Off (default: Off)' },
          { nome: 'Tem transportadora?', tipo: 'toggle', obrigatorio: false, validacao: 'On: informar transportadora · Off: cotação de frete necessária' },
          { nome: 'Vendedor responsável', tipo: 'select', obrigatorio: true, validacao: 'Lista de vendedores cadastrados; Admin escolhe qualquer um; vendedor só vê o próprio nome' },
          { nome: 'Temperatura inicial', tipo: 'select', obrigatorio: false, validacao: 'Quente · Morno · Frio (default: Morno)' },
        ],
        acoes: [
          { rotulo: 'Salvar lead', faz: 'Cria o lead no CRM na coluna "Novo"', confirmacao: false, feedback: 'Toast "Lead criado" + navega para a ficha' },
          { rotulo: 'Cancelar', faz: 'Descarta e volta ao funil', confirmacao: 'Modal se houver preenchimento', feedback: 'Volta ao funil' },
        ],
        estados: {
          vazio: 'Formulário limpo.',
          erro: 'Validação: borda vermelha + mensagem inline pt-BR por campo. Gravação: toast "Não foi possível salvar, tente novamente".',
          semPermissao: 'N/A — todos os papéis internos podem criar leads.',
        },
        regras: [
          'CNPJ duplicado é bloqueado com mensagem "Já existe um lead com este CNPJ" — evita cadastro duplo.',
          'Origem "Ligação recebida" dispara campo adicional de anotação sobre a conversa.',
        ],
        dados: {
          origem: 'N/A (criação)',
          persiste: 'Cria doc em leads com status = novo, origem, vendedor, timestamps e author',
        },
      },
      {
        nome: 'Configurações do Agente',
        rota: '/config/agente',
        objetivo: 'Configurar as regras de comportamento do Agente — persona, horários, critérios de qualificação, cadências de follow-up e mensagens-base.',
        papeis: ['Admin (Vinícius)'],
        campos: [
          { nome: 'Nome do Agente', tipo: 'texto', obrigatorio: true, validacao: 'Nome com que a agente se apresenta ao lead (default: Lumi)' },
          { nome: 'Tom de voz', tipo: 'select', obrigatorio: true, validacao: 'Informal com emojis · Formal sem emojis (default: Informal com emojis)' },
          { nome: 'Gênero do Agente', tipo: 'select', obrigatorio: true, validacao: 'Masculino · Feminino (default: Feminino)' },
          { nome: 'Revelar que é IA', tipo: 'toggle', obrigatorio: false, validacao: 'On: responde que é IA quando perguntado · Off: não revela (default: Off)' },
          { nome: 'Horário de atendimento humano', tipo: 'time range + dias', obrigatorio: true, validacao: 'Dias da semana + horário de início e término; default: Seg–Sex 08:00–18:00' },
          { nome: 'Ticket mínimo consumidor final (R$)', tipo: 'moeda', obrigatorio: true, validacao: 'Consumidor final acima deste valor → vendedor; abaixo → e-commerce. Default: R$ 2.000' },
          { nome: 'Nota: revendedor', tipo: 'info', obrigatorio: false, validacao: 'Revendedores são sempre atendidos com venda à vista, sem filtro por ticket mínimo' },
          { nome: 'Prazo para vendedor responder (minutos)', tipo: 'número', obrigatorio: true, validacao: 'Inteiro ≥ 1; default: 5 minutos' },
          { nome: 'Horário do follow-up diário', tipo: 'time', obrigatorio: true, validacao: 'Hora em que o Agente dispara o follow-up de propostas pendentes; default: 09:00' },
          { nome: 'Mensagens de follow-up (templates)', tipo: 'textarea (múltiplos)', obrigatorio: false, validacao: 'Templates com variáveis {{nome}}, {{proposta}}, {{produto}}; Admin edita livremente' },
        ],
        acoes: [
          { rotulo: 'Salvar configurações', faz: 'Atualiza as configurações do Agente em tempo real', confirmacao: 'Modal "Salvar configurações? O Agente aplicará as mudanças imediatamente."', feedback: 'Toast "Configurações salvas"' },
        ],
        estados: {
          carregando: 'Skeleton dos campos.',
          erro: '"Não foi possível salvar as configurações. Tente novamente."',
          semPermissao: 'Apenas Admin acessa. Vendedor é redirecionado com aviso.',
        },
        regras: [
          'As configurações aplicam-se imediatamente após salvamento — sem necessidade de reinicializar a Lumi.',
          'As faixas de score Serasa + prática de mercado (para definir condição de pagamento do lead) são configuradas em uma subseção específica desta tela: score >= 560 → faturamento a prazo; score < 560 com prática de mercado a prazo → faturamento; score < 560 com prática à vista → venda à vista. CPF = sempre à vista.',
          'E-mails de redirecionamento: prestador de serviço → comercial@vinas.com.br; saque → saque@plasice.com.br — configuráveis nesta tela.',
          'Perguntas frequentes (FAQ): respostas sobre localização, cobertura nacional, se são fabricantes e retirada no local — editáveis nesta tela.',
          'Catálogo de produtos (PDF): upload e gestão do catálogo que a Lumi envia quando solicitado.',
        ],
        dados: {
          origem: 'Coleção config_agente (singleton — documento único)',
          persiste: 'Atualiza o doc de configuração; registra autor e timestamp da última alteração',
        },
      },
      {
        nome: 'Vendedores e Usuários',
        rota: '/config/usuarios',
        objetivo: 'Cadastrar e gerenciar os vendedores (usuários do CRM) e seus WhatsApps para distribuição de leads pelo Agente.',
        papeis: ['Admin (Vinícius)'],
        campos: [
          { nome: 'Nome completo', tipo: 'texto', obrigatorio: true, validacao: 'Nome exibido no CRM e nas notificações do Agente' },
          { nome: 'Telefone (WhatsApp)', tipo: 'telefone com seletor de país', obrigatorio: true, validacao: 'Número do WhatsApp para notificação do Agente; formato (XX) XXXXX-XXXX' },
          { nome: 'E-mail (login)', tipo: 'e-mail', obrigatorio: true, validacao: 'E-mail de acesso ao CRM' },
          { nome: 'Papel', tipo: 'select', obrigatorio: true, validacao: 'Admin · Vendedor' },
          { nome: 'Ativo', tipo: 'toggle', obrigatorio: true, validacao: 'On: recebe leads do Agente · Off: temporariamente fora da fila (férias, afastamento)' },
          { nome: 'Meta mensal (R$)', tipo: 'moeda', obrigatorio: false, validacao: 'Meta de vendas do vendedor para o dashboard; formato R$ 1.234,56' },
        ],
        tabela: {
          colunas: ['Nome', 'WhatsApp', 'Papel', 'Leads ativos', 'Status (Ativo/Inativo)', 'Ações'],
          ordenacao: 'Por nome (A–Z)',
          paginacao: 'N/A (poucos usuários)',
          acoesLinha: ['Editar', 'Ativar/Inativar', 'Excluir (com confirmação)'],
        },
        acoes: [
          { rotulo: 'Novo vendedor', faz: 'Abre o formulário de cadastro', confirmacao: 'Modal', feedback: 'Toast "Vendedor cadastrado"' },
          { rotulo: 'Excluir', faz: 'Remove o usuário do sistema', confirmacao: 'Modal "Excluir {nome}? Leads ativos serão redistribuídos."', feedback: 'Toast de confirmação ou erro' },
        ],
        estados: {
          vazio: '"Nenhum vendedor cadastrado ainda." + botão "Novo vendedor".',
          carregando: 'Skeleton da tabela.',
          erro: '"Não foi possível carregar os usuários." + "Tentar de novo".',
          semPermissao: 'Apenas Admin acessa.',
        },
        regras: [
          'A Lumi distribui leads em round-robin pelos vendedores com status Ativo.',
          'Vendedor Inativo sai da fila de distribuição imediatamente — leads pendentes ficam com quem tem menos carga.',
        ],
        dados: {
          origem: 'Coleção usuarios',
          persiste: 'Cria/atualiza/desativa doc em usuarios; altera a fila de distribuição do Agente em tempo real',
        },
      },
    ],
  },

  // ── Tab 5: Cronograma ─────────────────────────────────────
  crono: {
    intro: 'O projeto tem duração de 8 semanas a partir da assinatura (17/06/2026), seguido de 21 dias de Hyper Care. Desenvolvimento começa pelo CRM (a Lumi também usa o CRM como ferramenta). Go-live previsto para 12/08/2026.',
    fases: [
      {
        num: '01',
        titulo: 'Mapeamento e Documento Técnico',
        semanas: 'Semanas 1 e 2 — 17/06 a 02/07/2026',
        cor: '#1A4A2A',
        itens: [
          'Onboarding e acesso às informações da VinPlast',
          'Levantamento detalhado das regras de qualificação e roteamento',
          'Definição das faixas de score Serasa + prática de mercado',
          'Mapeamento das mensagens da Lumi e da cadência de follow-up',
          'Elaboração do Documento Técnico completo',
          'Reunião de aprovação da documentação com Vinícius (02/07/2026)',
        ],
        entregavel: 'Documento Técnico aprovado com ajustes do cliente — referência para todo o desenvolvimento',
      },
      {
        num: '02',
        titulo: 'Desenvolvimento — CRM + Lumi',
        semanas: 'Semanas 3 a 6 — 07/07 a 01/08/2026',
        cor: '#2E7D32',
        itens: [
          'Construção do CRM com funil, fichas de lead, dashboard geral e do vendedor (início: 07/07)',
          'Primeira base para validação do cliente (~15/07)',
          'Integração Google Forms/webhook → CRM',
          'Integração Serasa — consulta de score + prática de mercado por CNPJ',
          'Implementação da Lumi (WhatsApp via Z-API) — nome feminino, qualificação por 5 perfis',
          'Implementação da cadência de follow-up automático',
          'Migração da base do RD Station para o novo CRM',
          'Validações parciais com o Vinícius a cada 2 semanas',
        ],
        entregavel: 'Sistema completo em ambiente de homologação para testes',
      },
      {
        num: '03',
        titulo: 'Testes, Treinamento e Go-live',
        semanas: 'Semanas 7 e 8 — 03/08 a 15/08/2026',
        cor: '#1B5E20',
        itens: [
          'Testes internos pela equipe Labrego (~20/07 em diante)',
          'Acesso ao CRM para equipe VinPlast testar (~27/07)',
          'Lumi entregue para teste (~03-04/08)',
          '12 dias de testes com conversas de exemplo e cenários reais',
          'Ajustes de aprendizagem da Lumi com base no feedback',
          'Sessão de treinamento gravada 1: Operação da Lumi',
          'Sessão de treinamento gravada 2: CRM, funil e dashboard',
          'Aprovação do Vinícius para go-live',
          'Ativação em produção — go-live oficial',
        ],
        entregavel: 'Sistema em produção + treinamentos entregues',
      },
      {
        num: '04',
        titulo: 'Hyper Care',
        semanas: '+21 dias após go-live — até ~05/09/2026 (previsão)',
        cor: '#388E3C',
        itens: [
          'Acompanhamento ativo e check-ins semanais',
          'Até 8 ajustes técnicos ou 10 horas de trabalho (o que ocorrer primeiro)',
          'Correção ilimitada de bugs',
          'Monitoramento em produção — ajustes de aprendizagem da Lumi',
          'Suporte via WhatsApp e App com SLA de 4h (P1)',
          'Transição para Manutenção Continuada',
        ],
        entregavel: 'Sistema estabilizado + transição para manutenção mensal',
      },
    ],
    marcos: [
      { data: '17/06/2026', titulo: 'Assinatura + sinal (R$ 10.456,99)' },
      { data: '02/07/2026', titulo: 'Documentação aprovada pelo cliente' },
      { data: '07/07/2026', titulo: 'Início do desenvolvimento (CRM primeiro)' },
      { data: '15/07/2026', titulo: 'Primeira base CRM para validação' },
      { data: '27/07/2026', titulo: 'Acesso ao CRM para equipe VinPlast' },
      { data: '03/08/2026', titulo: 'Lumi entregue para teste' },
      { data: '15/08/2026', titulo: 'Go-live + 2ª parcela (R$ 10.456,99)' },
      { data: '05/09/2026', titulo: 'Encerramento do Hyper Care' },
    ],
  },

  // ── Embeds (iframes para fluxo e design system) ──────────
  fluxograma: { htmlPath: '/02-fluxograma.html' },
  mockups: { htmlPath: '/mockups/index.html' },
  designSystem: { htmlPath: '/design-system.html' },

  // ── Tab 6: Design System ──────────────────────────────────
  design: {
    intro: 'O sistema VinPlast segue uma identidade visual profissional e limpa, ancorada no verde corporativo da marca. O design prioriza clareza de informação, velocidade de leitura e hierarquia visual forte — atributos essenciais num sistema operacional de vendas usado sob pressão, com 20 a 40 leads por dia.',
    cores: {
      primaria: { hex: '#1A4A2A', nome: 'Verde VinPlast', uso: 'Cor principal da marca — headers, botões primários, sidebar' },
      secundaria: { hex: '#4CAF50', nome: 'Verde Folha', uso: 'Destaques, badges de sucesso, hover states' },
      acento: { hex: '#2E7D32', nome: 'Verde Médio', uso: 'Gradientes, elementos de suporte' },
      escuro: { hex: '#0D2B15', nome: 'Verde Profundo', uso: 'Textos sobre fundo claro, dark mode sidebar' },
      fundo: { hex: '#F7FAF8', nome: 'Fundo Verde Suave', uso: 'Background do app — leve tonalidade verde' },
      card: { hex: '#FFFFFF', nome: 'Branco', uso: 'Cards, modais, superfícies elevadas' },
      borda: { hex: '#C8E6C9', nome: 'Verde Claro', uso: 'Bordas de cards, divisores' },
      muted: { hex: '#546E7A', nome: 'Cinza Azulado', uso: 'Texto secundário, placeholders, labels' },
    },
    fontes: {
      titulo: 'Inter (headings) — peso 600–700',
      corpo: 'Inter (body) — peso 400–500',
      mono: 'JetBrains Mono (dados técnicos, CNPJ, números de proposta)',
    },
    temperaturas: {
      quente: { cor: '#D32F2F', bg: '#FFEBEE', label: 'Quente', desc: 'Lead com alta intenção de compra, respondeu rapidamente' },
      morno: { cor: '#F57C00', bg: '#FFF3E0', label: 'Morno', desc: 'Lead em avaliação, respondendo com algum delay' },
      frio: { cor: '#1565C0', bg: '#E3F2FD', label: 'Frio', desc: 'Lead inativo, aguardando decisão interna' },
    },
  },
}
