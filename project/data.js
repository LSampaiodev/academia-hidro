// Shared data for both site variations
window.SITE_DATA = {
  brand: {
    name: 'Hidro & Movimento',
    tagline: 'Academia · Natação · Hidroginástica',
    sinceYear: 1998,
    rating: 4.6,
    reviews: 160,
    address: 'R. Joaquim de Paula Souza, 1033 — Jardim Proença, Campinas/SP',
    cep: '13100-422',
    phone: '(19) 3252-1986',
    whatsapp: '(19) 9 9999-1986',
    hours: 'Seg–Sex 06h–22h · Sáb 08h–13h',
  },

  modalities: [
    { id: 'natacao-adulta', name: 'Natação Adulta', icon: '~', desc: 'Aulas em níveis (iniciante, intermediário, avançado), turmas reduzidas, foco técnico e condicionamento.', age: '15+ anos', duration: '50 min' },
    { id: 'natacao-infantil', name: 'Natação Infantil', icon: '*', desc: 'Adaptação ao meio líquido, ludicidade e progressão pedagógica acompanhada por professoras especializadas.', age: '3–14 anos', duration: '45 min' },
    { id: 'pilates-aquatico', name: 'Pilates Aquático', icon: '◊', desc: 'Trabalho de força, mobilidade e respiração na água aquecida — baixo impacto, alta consciência corporal.', age: '16+ anos', duration: '50 min' },
    { id: 'funcional', name: 'Funcional', icon: '+', desc: 'Treino em circuito com pesos, bandas e peso do corpo. Foco em condicionamento e mobilidade.', age: '14+ anos', duration: '50 min' },
    { id: 'musculacao', name: 'Musculação', icon: '#', desc: 'Sala equipada, planilha personalizada com avaliação física e acompanhamento do professor em tempo integral.', age: '14+ anos', duration: 'livre' },
  ],

  // schedule rows: {modality, day, times[]}
  schedule: [
    { mod: 'natacao-adulta', day: 'seg', times: ['06:00', '07:00', '08:00', '18:00', '19:00', '20:00'] },
    { mod: 'natacao-adulta', day: 'ter', times: ['06:00', '07:00', '18:00', '19:00', '20:00'] },
    { mod: 'natacao-adulta', day: 'qua', times: ['06:00', '07:00', '08:00', '18:00', '19:00', '20:00'] },
    { mod: 'natacao-adulta', day: 'qui', times: ['06:00', '07:00', '18:00', '19:00', '20:00'] },
    { mod: 'natacao-adulta', day: 'sex', times: ['06:00', '07:00', '08:00', '18:00', '19:00'] },
    { mod: 'natacao-adulta', day: 'sab', times: ['08:00', '09:00', '10:00'] },

    { mod: 'natacao-infantil', day: 'seg', times: ['15:00', '16:00', '17:00', '18:00'] },
    { mod: 'natacao-infantil', day: 'ter', times: ['14:00', '15:00', '16:00', '17:00'] },
    { mod: 'natacao-infantil', day: 'qua', times: ['15:00', '16:00', '17:00', '18:00'] },
    { mod: 'natacao-infantil', day: 'qui', times: ['14:00', '15:00', '16:00', '17:00'] },
    { mod: 'natacao-infantil', day: 'sex', times: ['15:00', '16:00', '17:00'] },
    { mod: 'natacao-infantil', day: 'sab', times: ['09:00', '10:00', '11:00'] },

    { mod: 'pilates-aquatico', day: 'seg', times: ['09:00', '10:00', '19:00'] },
    { mod: 'pilates-aquatico', day: 'qua', times: ['09:00', '10:00', '19:00'] },
    { mod: 'pilates-aquatico', day: 'sex', times: ['09:00', '10:00'] },

    { mod: 'funcional', day: 'seg', times: ['07:00', '08:00', '18:00', '19:00'] },
    { mod: 'funcional', day: 'ter', times: ['07:00', '18:00', '19:00'] },
    { mod: 'funcional', day: 'qua', times: ['07:00', '08:00', '18:00', '19:00'] },
    { mod: 'funcional', day: 'qui', times: ['07:00', '18:00', '19:00'] },
    { mod: 'funcional', day: 'sex', times: ['07:00', '18:00'] },
    { mod: 'funcional', day: 'sab', times: ['09:00', '10:00'] },

    { mod: 'musculacao', day: 'seg', times: ['06:00–22:00'] },
    { mod: 'musculacao', day: 'ter', times: ['06:00–22:00'] },
    { mod: 'musculacao', day: 'qua', times: ['06:00–22:00'] },
    { mod: 'musculacao', day: 'qui', times: ['06:00–22:00'] },
    { mod: 'musculacao', day: 'sex', times: ['06:00–22:00'] },
    { mod: 'musculacao', day: 'sab', times: ['08:00–13:00'] },
  ],

  plans: [
    {
      id: 'unica',
      name: 'Plano Único',
      price: 189,
      cadence: 'mês',
      desc: 'Uma modalidade, 2x por semana. Ideal para começar.',
      perks: ['1 modalidade', '2x por semana', 'Avaliação física inicial', 'Acesso aos vestiários'],
      featured: false,
    },
    {
      id: 'combinado',
      name: 'Plano Combinado',
      price: 269,
      cadence: 'mês',
      desc: 'Combine natação ou hidro com musculação ou funcional.',
      perks: ['2 modalidades', '3x por semana', 'Avaliação física trimestral', 'Acesso aos vestiários', 'Toalha cortesia'],
      featured: true,
    },
    {
      id: 'livre',
      name: 'Plano Livre',
      price: 349,
      cadence: 'mês',
      desc: 'Todas as modalidades, todos os dias. Para quem mora aqui.',
      perks: ['Todas as modalidades', 'Acesso ilimitado', 'Avaliação física mensal', 'Toalha cortesia', 'Convidado 1x/mês'],
      featured: false,
    },
  ],

  reviews: [
    { name: 'Gabriela Leoni', rating: 5, text: 'Atendimento incrível, a academia super acolhedora e familiar. Professores bem qualificados e solícitos.', when: '6 meses atrás' },
    { name: 'Fernando Gomes', rating: 5, text: 'Academia de bairro, menos movimentada que as grandes franquias — fator essencial pra mim. Os instrutores ajudam de verdade, não ficam só olhando.', when: '2 anos atrás' },
    { name: 'Jussara Yara', rating: 4, text: 'Meu filho fez aula experimental, a professora é muito boa e paciente. Turma em quantidade adequada — me senti acolhida.', when: '6 meses atrás' },
  ],

  faq: [
    { q: 'Como funciona a aula experimental?', a: 'É gratuita e sem compromisso. Você agenda pelo formulário ou WhatsApp, traz traje de banho e toalha — o resto a gente fornece.' },
    { q: 'Vocês têm estacionamento?', a: 'Vagas rotativas na rua e convênio com estacionamento próximo a 50m da academia.' },
    { q: 'A piscina é aquecida?', a: 'Sim — temperatura controlada entre 29 e 31°C o ano inteiro, com sistema de tratamento sem cloro residual forte.' },
    { q: 'Posso pausar o plano?', a: 'Sim, até 30 dias por ano sem custo, mediante aviso prévio de 5 dias.' },
    { q: 'Tem desconto família?', a: 'Sim — 10% de desconto a partir do segundo membro da mesma residência.' },
  ],

  days: [
    { id: 'seg', label: 'Seg' },
    { id: 'ter', label: 'Ter' },
    { id: 'qua', label: 'Qua' },
    { id: 'qui', label: 'Qui' },
    { id: 'sex', label: 'Sex' },
    { id: 'sab', label: 'Sáb' },
  ],
};
