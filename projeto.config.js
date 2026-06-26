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
    subtitulo: 'Do primeiro contato no WhatsApp até o fechamento — qualificação automática por IA, CRM personalizado e follow-up sem perder nenhum lead.',
  },

  // ── Tabs ──────────────────────────────────────────────────
  tabs: [
    { id: 'hoje', label: 'Hoje (as is)', num: '01', desc: 'Processo atual — leads chegando sem triagem, follow-up manual e perda silenciosa de oportunidades' },
    { id: 'sistema', label: 'O Sistema (to be)', num: '02', desc: 'Agente de IA + CRM personalizado — qualificação automática, distribuição ao vendedor e funil completo' },
    { id: 'fluxo', label: 'Fluxograma', num: '03', desc: 'Fluxo visual do processo — do lead no WhatsApp até o fechamento da venda' },
    { id: 'spec', label: 'Referência Técnica', num: '04', desc: 'Telas, campos, regras de negócio e integrações — referência interna para o time de desenvolvimento' },
    { id: 'crono', label: 'Cronograma', num: '05', desc: '8 semanas de desenvolvimento + 21 dias de Hyper Care — go-live previsto para 12/08/2026' },
    { id: 'design', label: 'Design System', num: '06', desc: 'Identidade visual, componentes e padrões visuais do sistema VinPlast' },
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
      { title: 'Vendedor faz a qualificação', desc: 'Liga ou manda mensagem para entender o perfil: consumidor final ou revendedor, produto de interesse, quantidade estimada. Se for revendedor, descarta.' },
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
        'O fluxo começa no WhatsApp — seja por formulário do Google ou por contato direto. O Agente atende imediatamente, se apresenta de forma natural (sem revelar que é IA, a não ser que seja perguntado), e conduz uma conversa para entender o perfil do contato: consumidor final ou revendedor, produto de interesse, quantidade estimada. Se for revendedor, o Agente informa gentilmente que a VinPlast não atende revenda e encerra. Se for consumidor final com valor estimado abaixo de R$ 2.000, direciona para o e-commerce. Se for qualificado, consulta o CNPJ no Serasa, monta o resumo do lead e notifica o vendedor no WhatsApp com 5 minutos para assumir o atendimento.',
        'No CRM, cada lead tem uma ficha com todo o histórico — desde a primeira mensagem do Agente até a proposta enviada pelo vendedor. O funil mostra em que etapa está cada oportunidade, quanto tempo está parada e qual vendedor é responsável. O dashboard de performance dá a Vinícius a visão que ele não tem hoje: quantos leads chegaram, quantos foram qualificados, de onde vieram, qual é a taxa de conversão por vendedor e como está o progresso em relação à meta.',
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
          'Apresentação natural — nome definido pelo Vinícius, tom informal com emojis',
          'Qualificação: identificação de consumidor final vs. revendedor vs. fornecedor',
          'Bifurcação por ticket estimado: abaixo de R$ 2.000 → e-commerce; acima → vendedor',
          'Coleta de dados: nome, e-mail, telefone, CNPJ e produto de interesse',
          'Consulta de score Serasa por CNPJ — informativo para o vendedor',
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
              'O Agente é a nova porta de entrada da VinPlast. Quando um lead preenche o formulário no site ou manda mensagem diretamente no WhatsApp, o Agente responde em segundos — a qualquer hora, qualquer dia. Ele se apresenta pelo nome definido pela empresa (masculino, sem "virtual" ou "IA"), conduz a conversa de forma natural e informal, com emojis, para entender quem é esse contato e o que ele precisa.',
              'A qualificação segue as regras de negócio da VinPlast. O Agente identifica se o contato é consumidor final, revendedor ou fornecedor tentando vender algo. Revendedores são descartados com uma resposta gentil — a VinPlast não tem tabela de preços para revenda. Fornecedores que chegam pedindo espaço também são descartados. Consumidor final com valor estimado abaixo de R$ 2.000 é direcionado para o e-commerce, sem intervenção humana. Quem está acima de R$ 2.000 e é qualificado segue para o vendedor.',
              'Antes de notificar o vendedor, o Agente consulta o CNPJ do lead no Serasa e prepara um resumo com nome, produto de interesse, quantidade estimada, valor aproximado e score de crédito. Esse resumo chega ao vendedor pelo WhatsApp com um prazo de 5 minutos para responder. Se não responder em 5 minutos, o lead é repassado ao outro vendedor. O CRM registra tudo automaticamente — sem entrada manual.',
            ],
            blocos: [
              {
                tipo: 'dashboard',
                titulo: 'Jornada do lead com o Agente',
                cards: [
                  { title: '1. Recepção imediata', desc: 'Lead chega pelo WhatsApp (formulário do Google ou contato direto). Agente responde em segundos com saudação + apresentação', action: 'Disponível 24h/7 dias' },
                  { title: '2. Qualificação', desc: 'Agente conduz perguntas naturais: produto, quantidade, perfil (consumidor final ou empresa?), CNPJ', action: 'Tom informal com emojis' },
                  { title: '3. Triagem por perfil', desc: 'Revendedor → resposta gentil de descarte. Fornecedor → descarte. CPF/baixo ticket → e-commerce. CNPJ qualificado → prossegue.', action: 'Regras automáticas' },
                  { title: '4. Consulta Serasa', desc: 'CNPJ qualificado é consultado automaticamente. Score, limite de crédito e alertas chegam junto do resumo ao vendedor', action: 'Informativo para o vendedor' },
                  { title: '5. Distribuição ao vendedor', desc: 'Notificação no WhatsApp do vendedor com resumo completo do lead. Prazo de 5 minutos para responder', action: 'Round-robin entre vendedores' },
                  { title: '6. Escalação inteligente', desc: 'Se vendedor não responde em 5 min → passa ao outro. Reclamação → escala direto para Vinícius. Pedido de humano → transfere imediatamente', action: 'Zero lead perdido por silêncio' },
                ],
              },
              {
                tipo: 'comparacao',
                titulo: 'Antes vs. Depois',
                antes: [
                  'Vinícius filtra e repassa cada lead manualmente',
                  'Primeiro contato pode demorar horas',
                  'Sem consulta de crédito antes do orçamento',
                ],
                depois: [
                  'Agente filtra, qualifica e distribui automaticamente',
                  'Primeiro contato em segundos — 24h/dia',
                  'Score Serasa já na mão do vendedor antes da ligação',
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
          'Cadastro automático do lead pela IA — sem digitação manual',
          'Funil de vendas visual: Novo → Qualificado → Em Atendimento → Proposta Enviada → Follow-up → Fechado/Perdido',
          'Ficha do lead: histórico completo de conversas, dados do Serasa, propostas anexadas (PDF do Bling)',
          'Painel do vendedor: vê apenas os próprios leads; Admin (Vinícius) vê todos',
          'Dashboard de performance: leads/dia, taxa de qualificação, conversão por vendedor, valor em propostas, meta vs. realizado',
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
              'O CRM Labrego substitui o RD Station e o controle manual que existe hoje. Cada lead que chega — pelo formulário do Google, pelo WhatsApp ou registrado manualmente pelo vendedor para ligações diretas — tem sua ficha criada automaticamente pelo Agente, com nome, contato, CNPJ, produto de interesse, score Serasa e todo o histórico de conversas. O vendedor abre a ficha e já tem o contexto completo antes de ligar.',
              'O funil visual mostra em que etapa está cada oportunidade, há quanto tempo está parada e qual vendedor é responsável. O Vinícius enxerga tudo — todos os vendedores, todas as etapas. Cada vendedor enxerga apenas os próprios leads. As propostas geradas no Bling podem ser anexadas à ficha do cliente para que o Agente possa referenciar o número e o conteúdo nas cadências de follow-up.',
              'O dashboard de performance responde às perguntas que a agência de tráfego faz hoje sem resposta: quantos leads chegaram, quantos foram qualificados, qual é a taxa de conversão por vendedor, de onde vieram os que fecharam, qual é o ticket médio e como está o progresso em relação à meta mensal. A migração da base do RD Station (incluindo os 5.000 contatos e as 625 propostas abertas) é parte do escopo.',
            ],
            blocos: [
              {
                tipo: 'features',
                titulo: 'Funcionalidades do CRM',
                items: [
                  'Funil visual com 7 colunas: Novo · Qualificado · Em Atendimento · Proposta Enviada · Follow-up · Fechado · Perdido',
                  'Ficha do lead: histórico de conversas, Serasa, propostas, anotações, tempo na coluna',
                  'Dashboard: leads/dia, qualificação, conversão por vendedor, valor em propostas, meta vs. realizado',
                  'Controle de acesso: Admin vê tudo; vendedor vê apenas os próprios',
                  'Alerta de proposta respondida: popup para o vendedor ligar imediatamente',
                  'Migração da base do RD Station e da planilha de propostas do Bling',
                  'Captura automática de leads do Google Forms/webhook',
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
          'Reativação de base (3 segmentos): contato sem proposta · proposta sem fechamento · proposta em aberto há mais de 30 dias',
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
              'Quando o vendedor move o lead para "Proposta Enviada" no CRM, o Agente entra na cadência de follow-up. Por padrão, manda mensagem todo dia de manhã enquanto o cliente não responder. O texto referencia o nome do cliente e o número da proposta, é escrito de forma natural e varia a cada envio para não parecer robótico. Quando o cliente responde — mesmo que seja para pedir mais 30 dias — o Agente avisa o vendedor imediatamente e pausa a cadência automática.',
              'Se o cliente pedir para ser contatado numa data futura ("me liga dia 15"), o Agente anota e retoma automaticamente naquele dia, com uma mensagem contextualizando que é o retorno combinado. Se o cliente sinalizar que não tem mais interesse, o Agente tenta captar o motivo (preço, frete, análise, outro fornecedor) e registra no CRM antes de mover o card para "Perdido".',
              'Além do follow-up de propostas ativas, o escopo inclui trabalhar a base histórica de 5.000 contatos em três segmentos distintos: contatos cadastrados sem proposta ("fulano, não nos falamos há um tempo — enviamos nosso catálogo atualizado"); contatos com proposta não fechada por motivo desconhecido; e as 625 propostas abertas desde janeiro, com mensagem referenciando o número da proposta e perguntando sobre o andamento.',
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
        'Agente de Atendimento no WhatsApp — qualificação, triagem, distribuição e follow-up',
        'CRM Labrego personalizado com funil, ficha de lead e dashboard de performance',
        'Integração Serasa — consulta de score por CNPJ (cortesia — tarifa de consulta repassada ao cliente)',
        'Integração Google → CRM (formulário/webhook para captura de leads)',
        'Cadência automática de follow-up para propostas sem resposta',
        'Campanha de reativação da base histórica (3 segmentos)',
        'Migração da base do RD Station para o novo CRM',
        'Acesso responsivo (web + celular)',
        '2 sessões de treinamento gravadas: (1) Operação do Agente; (2) CRM e dashboard',
        '21 dias de Hyper Care com acompanhamento ativo',
      ],
      naoInclui: [
        { item: 'Integração com Bling (orçamento ponta a ponta, estoque, pós-venda)', explicacao: 'O orçamento continua sendo gerado no Bling pelo vendedor. Propostas em PDF podem ser anexadas manualmente à ficha do lead no CRM.' },
        { item: 'Atendimento autônomo para CPF (compra de baixo ticket ponta a ponta)', explicacao: 'CPF com ticket abaixo de R$ 2.000 é direcionado para o e-commerce. Autonomia total para CPF é evolução futura.' },
        { item: 'Segunda empresa / segundo CNPJ (linha do Simples / marketplace)', explicacao: 'Escopo desta fase é a VinPlast. Segunda empresa ou segundo número de WhatsApp é Fase 2.' },
        { item: 'Integração com Instagram, Meta Ads, Shopee, Mercado Livre', explicacao: 'Canais adicionais podem ser integrados via pacote de horas na fase de manutenção.' },
        { item: 'Disparo em massa / e-mail marketing (Twilio ou similar)', explicacao: 'Requer provedor verificado e configuração específica. Item de evolução futura com custo separado de infraestrutura.' },
        { item: 'Relatórios e dashboards customizados além dos painéis padrão', explicacao: 'Os painéis entregues cobrem as métricas mapeadas no briefing. Personalizações adicionais via pacote de horas.' },
      ],
    },
  },

  // ── Tab 4: Referência Técnica ─────────────────────────────
  spec: {
    intro: [
      'Esta é a referência técnica do sistema VinPlast — o contrato campo-a-campo que guia o desenvolvimento sem improviso. Cada tela abaixo detalha objetivo, campos, validações, estados, regras de negócio e integração com o Agente de IA. As regras de qualificação, faixas de score Serasa e critérios de distribuição serão formalizados com o Vinícius nas Semanas 1 e 2 (Mapeamento) e registrados no Documento Técnico definitivo antes do início da implementação.',
      'O sistema tem dois mundos: o painel interno da equipe comercial (CRM — funil, fichas de lead, dashboard, configurações) e o Agente no WhatsApp (qualificação, distribuição, follow-up — sem interface gráfica para o cliente final). A navegação segue o fluxo natural do negócio: o lead chega → o Agente atende e registra → o vendedor abre o CRM, qualifica e movimenta o funil → a IA faz o follow-up automático → Vinícius acompanha pelo dashboard.',
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
          'KPIs principais: Leads recebidos · Qualificados (%) · Em proposta · Fechados · Valor em propostas · Meta vs. realizado por vendedor.',
          'Gráfico de origem: Google Ads · WhatsApp direto · Ligação manual · Reativação de base.',
          'Admin vê todos os vendedores; vendedor vê apenas os próprios dados.',
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
          'Badge de temperatura: Quente (vermelho) · Morno (âmbar) · Frio (azul) — definido pelo Agente com base no comportamento do lead.',
          'Alerta visual quando card está na mesma coluna há mais de X dias (limiar definido por coluna — a definir no mapeamento).',
          'O Agente popula automaticamente "Novo" e move para "Qualificado" quando a triagem é concluída. O vendedor move de "Qualificado" em diante.',
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
          'A conversa completa com o Agente (WhatsApp) fica registrada na linha do tempo da ficha.',
          'O score Serasa e os alertas de crédito ficam visíveis na ficha para o vendedor.',
          'PDF de proposta anexado fica disponível para o Agente referenciar nas cadências de follow-up.',
          'O campo "Próximo contato" sobrescreve a cadência automática — o Agente retoma na data indicada em vez de seguir o follow-up diário.',
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
          { nome: 'Origem', tipo: 'select', obrigatorio: true, validacao: 'Google Ads · WhatsApp direto · Ligação recebida · Indicação · Mercado Livre · Shopee · Outro' },
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
          { nome: 'Nome do Agente', tipo: 'texto', obrigatorio: true, validacao: 'Nome com que o Agente se apresenta ao lead' },
          { nome: 'Tom de voz', tipo: 'select', obrigatorio: true, validacao: 'Informal com emojis · Formal sem emojis (default: Informal com emojis)' },
          { nome: 'Gênero do Agente', tipo: 'select', obrigatorio: true, validacao: 'Masculino · Feminino (default: Masculino)' },
          { nome: 'Revelar que é IA', tipo: 'toggle', obrigatorio: false, validacao: 'On: responde que é IA quando perguntado · Off: não revela (default: Off)' },
          { nome: 'Horário de atendimento humano', tipo: 'time range + dias', obrigatorio: true, validacao: 'Dias da semana + horário de início e término; default: Seg–Sex 08:00–18:00' },
          { nome: 'Ticket mínimo para atendimento humano (R$)', tipo: 'moeda', obrigatorio: true, validacao: 'Leads acima deste valor vão ao vendedor; abaixo → e-commerce. Default: R$ 2.000' },
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
          'As configurações aplicam-se imediatamente após salvamento — sem necessidade de reinicializar o Agente.',
          'As faixas de score Serasa (para definir limite de crédito do lead) são configuradas em uma subseção específica desta tela.',
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
          'O Agente distribui leads em round-robin pelos vendedores com status Ativo.',
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
    intro: 'O projeto tem duração de 8 semanas a partir da assinatura (17/06/2026), seguido de 21 dias de Hyper Care. Go-live previsto para 12/08/2026.',
    fases: [
      {
        num: '01',
        titulo: 'Mapeamento e Documento Técnico',
        semanas: 'Semanas 1 e 2 — até 01/07/2026',
        cor: '#1A4A2A',
        itens: [
          'Onboarding e acesso às informações da VinPlast',
          'Levantamento detalhado das regras de qualificação e roteamento',
          'Definição das faixas de score Serasa e limites de crédito',
          'Mapeamento das mensagens do Agente e da cadência de follow-up',
          'Elaboração do Documento Técnico completo',
          'Validação do Documento Técnico pelo Vinícius (até 5 dias úteis)',
        ],
        entregavel: 'Documento Técnico aprovado — referência para todo o desenvolvimento',
      },
      {
        num: '02',
        titulo: 'Desenvolvimento — Agente + CRM',
        semanas: 'Semanas 3 a 6 — até 29/07/2026',
        cor: '#2E7D32',
        itens: [
          'Implementação do Agente de Atendimento (WhatsApp via Z-API)',
          'Construção do CRM com funil, fichas de lead e dashboard',
          'Integração Google Forms/webhook → CRM',
          'Integração Serasa — consulta de score por CNPJ',
          'Implementação da cadência de follow-up automático',
          'Migração da base do RD Station para o novo CRM',
          'Validações parciais com o Vinícius a cada 2 semanas',
        ],
        entregavel: 'Sistema completo em ambiente de homologação para testes',
      },
      {
        num: '03',
        titulo: 'Testes, Treinamento e Go-live',
        semanas: 'Semanas 7 e 8 — até 12/08/2026',
        cor: '#1B5E20',
        itens: [
          'Ambiente de testes liberado para a equipe VinPlast',
          'Ajustes pós-teste (dentro do escopo)',
          'Sessão de treinamento gravada 1: Operação do Agente',
          'Sessão de treinamento gravada 2: CRM, funil e dashboard',
          'Aprovação do Vinícius para go-live',
          'Ativação em produção — go-live oficial',
        ],
        entregavel: 'Sistema em produção + treinamentos entregues',
      },
      {
        num: '04',
        titulo: 'Hyper Care',
        semanas: '+21 dias após go-live — até 02/09/2026 (previsão)',
        cor: '#388E3C',
        itens: [
          'Acompanhamento ativo e check-ins semanais',
          'Até 8 ajustes técnicos ou 10 horas de trabalho (o que ocorrer primeiro)',
          'Correção ilimitada de bugs',
          'Suporte via WhatsApp e App com SLA de 4h (P1)',
          'Transição para Manutenção Continuada',
        ],
        entregavel: 'Sistema estabilizado + transição para manutenção mensal',
      },
    ],
    marcos: [
      { data: '17/06/2026', titulo: 'Assinatura + sinal (R$ 10.456,99)' },
      { data: '01/07/2026', titulo: 'Documento Técnico aprovado' },
      { data: '29/07/2026', titulo: 'Sistema em homologação' },
      { data: '12/08/2026', titulo: 'Go-live + 2ª parcela (R$ 10.456,99)' },
      { data: '02/09/2026', titulo: 'Encerramento do Hyper Care' },
    ],
  },

  // ── Embeds (iframes para fluxo e design system) ──────────
  fluxograma: { htmlPath: '/02-fluxograma.html' },
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
