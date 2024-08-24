const data = {
  Stella: [
    {
      question: 'Qual a capital do Brasil?',
      options: ['Rio de Janeiro', 'São Paulo', 'Brasília', 'Salvador'],
      answer: 'Brasília',
    },
    {
      question: 'Quais são os estados do Sudeste?',
      options: [
        'Piauí, Santa Catarina, São Paulo, Minas Gerais',
        'São Paulo, Minas Gerais, Espírito Santo, Rio de Janeiro',
        'Rio de Janeiro, São Paulo, Bahia, Espírito Santo',
        'São Paulo, Rio de Janeiro, Bahia, Minas Gerais',
      ],
      answer: 'São Paulo, Minas Gerais, Espírito Santo, Rio de Janeiro',
    },
    {
      question: 'Qual a capital do estado de Minas Gerais?',
      options: ['Belo Horizonte', 'Salvador', 'Fortaleza', 'Vitória'],
      answer: 'Belo Horizonte',
    },
    {
      question: 'Quais são as regiões do Brasil?',
      options: [
        'Norte, Sul, Sudeste, Leste, Oeste',
        'Norte, Nordeste, Sudeste, Sul, Centro-Oeste',
        'Norte, Nordeste, Sudeste, Sul, Centro-Leste',
        'Norte, Sudeste, Sul, Centro-Sul, Oeste',
      ],
      answer: 'Norte, Nordeste, Sudeste, Sul, Centro-Oeste',
    },
    {
      question: 'Qual a capital do estado do Paraná?',
      options: ['Curitiba', 'Florianópolis', 'Porto Alegre', 'Campo Grande'],
      answer: 'Curitiba',
    },
    {
      question: 'Qual a capital do estado de Pernambuco?',
      options: ['Recife', 'João Pessoa', 'Natal', 'Maceió'],
      answer: 'Recife',
    },
    {
      question: 'Qual a capital do estado do Rio Grande do Sul?',
      options: ['Porto Alegre', 'Curitiba', 'Florianópolis', 'Pelotas'],
      answer: 'Porto Alegre',
    },
    {
      question: 'Qual é a capital do estado do Ceará?',
      options: ['Fortaleza', 'Natal', 'São Luís', 'Teresina'],
      answer: 'Fortaleza',
    },
    {
      question: 'Quais estados fazem parte da região Centro-Oeste?',
      options: [
        'Mato Grosso, Mato Grosso do Sul, Goiás, Distrito Federal',
        'Mato Grosso, Mato Grosso do Sul, Goiás, Tocantins',
        'Mato Grosso, Mato Grosso do Sul, Goiás, Pará',
        'Mato Grosso, Mato Grosso do Sul, Goiás, Maranhão',
      ],
      answer: 'Mato Grosso, Mato Grosso do Sul, Goiás, Distrito Federal',
    },
    {
      question: 'Qual é a capital do estado de Santa Catarina?',
      options: ['Florianópolis', 'Porto Alegre', 'Curitiba', 'Blumenau'],
      answer: 'Florianópolis',
    },
    {
      question: 'Qual a capital do estado da Bahia?',
      options: ['Salvador', 'Aracaju', 'Recife', 'Maceió'],
      answer: 'Salvador',
    },
    {
      question: 'Quais estados fazem parte da região Sul?',
      options: [
        'Rio Grande do Sul, Paraná, Santa Catarina',
        'Paraná, São Paulo, Santa Catarina',
        'Rio Grande do Sul, Paraná, Mato Grosso do Sul',
        'Santa Catarina, Rio Grande do Sul, Espírito Santo',
      ],
      answer: 'Rio Grande do Sul, Paraná, Santa Catarina',
    },
    {
      question: 'Qual a capital do estado do Pará?',
      options: ['Belém', 'Manaus', 'Macapá', 'Boa Vista'],
      answer: 'Belém',
    },
    {
      question: 'Qual é a capital do estado de Goiás?',
      options: ['Goiânia', 'Brasília', 'Cuiabá', 'Campo Grande'],
      answer: 'Goiânia',
    },
    {
      question: 'Qual a capital do estado do Maranhão?',
      options: ['São Luís', 'Teresina', 'Fortaleza', 'Natal'],
      answer: 'São Luís',
    },
    {
      question: 'Qual a capital do estado do Tocantins?',
      options: ['Palmas', 'Araguaína', 'Belém', 'Manaus'],
      answer: 'Palmas',
    },
    {
      question: 'Qual a capital do estado de Sergipe?',
      options: ['Aracaju', 'Maceió', 'João Pessoa', 'Recife'],
      answer: 'Aracaju',
    },
    {
      question: 'Qual é a capital do estado de Roraima?',
      options: ['Boa Vista', 'Macapá', 'Manaus', 'Belém'],
      answer: 'Boa Vista',
    },
    {
      question: 'Qual é a população aproximada do Brasil em 2024?',
      options: [
        '150 milhões de habitantes',
        '190 milhões de habitantes',
        '215 milhões de habitantes',
        '230 milhões de habitantes',
      ],
      answer: '215 milhões de habitantes',
    },
    {
      question: 'Qual é o país mais populoso do mundo em 2024?',
      options: ['Estados Unidos', 'Índia', 'China', 'Indonésia'],
      answer: 'Índia',
    },
    {
      question: 'Qual é a população aproximada da cidade de São Paulo em 2024?',
      options: [
        '8 milhões de habitantes',
        '12 milhões de habitantes',
        '15 milhões de habitantes',
        '18 milhões de habitantes',
      ],
      answer: '12 milhões de habitantes',
    },
    {
      question:
        'O Brasil é o Xº país mais extenso do mundo em termos de território. Qual é essa posição?',
      options: ['2º', '3º', '4º', '5º'],
      answer: '5º',
    },
    {
      question: 'Qual é o maior estado do Brasil em termos de território?',
      options: ['Amazonas', 'Mato Grosso', 'Pará', 'Minas Gerais'],
      answer: 'Amazonas',
    },
    {
      question: 'Qual é o maior país do mundo em termos de território?',
      options: ['Estados Unidos', 'China', 'Rússia', 'Canadá'],
      answer: 'Rússia',
    },
    {
      question: 'Qual é a cidade mais populosa do Brasil?',
      options: ['Rio de Janeiro', 'Brasília', 'São Paulo', 'Salvador'],
      answer: 'São Paulo',
    },
    {
      question: 'Em qual continente está localizado o Deserto do Saara?',
      options: ['Ásia', 'América do Sul', 'África', 'Oceania'],
      answer: 'África',
    },
    {
      question: 'A Alemanha fica em qual continente?',
      options: ['América do Norte', 'Ásia', 'Europa', 'África'],
      answer: 'Europa',
    },
  ],
  Stefany: [
    {
      question:
        'A bordo das aeronaves, os equipamentos que auxiliam, além dos extintores, em situação de incêndio são:',
      options: [
        'machadinha, garrafa de oxigênio com máscara oro-nasal, CAF, luvas de kevlar',
        'garrafa de oxigênio com máscara full-face, megafone, roupa de amianto, CAF',
        'machadinha, CAF, luvas de amianto, óculos contra fumaça',
        'óculos contra fumaça, luvas de Kevlar, smoke detector, roupa de amianto',
      ],
      answer: 'machadinha, CAF, luvas de amianto, óculos contra fumaça',
    },
    {
      question:
        'Durante uma evacuação de emergência o comissário percebe fogo do lado externo da aeronave, o mesmo deverá:',
      options: [
        'colocar a fita vermelha indicando que aquela saída não deverá ser aberta',
        'redirecionar os paxs para outra saída e ir ajudar outro comissário junto à sua saída',
        'orientar os paxs para que utilizem as saídas sobre as asas',
        'permanecer junto a saída e direcionar os pax para outra saída',
      ],
      answer: 'permanecer junto a saída e direcionar os pax para outra saída',
    },
    {
      question:
        'No check pré-voo os comissários deverão observar que a posição do manômetro do extintor de halon esteja na posição:',
      options: ['1400 PSI', '1600 PSI', 'faixa verde', 'faixa azul'],
      answer: 'faixa verde',
    },
    {
      "question": "No cheque pré-voo do extintor de gás freon verifica-se:",
      "options": [
        "lacre e validade",
        "manômetro, lacre e validade",
        "porta corta-fogo fechada",
        "lacre e manômetro faixa verde"
      ],
      "answer": "porta corta-fogo fechada"
    },
    {
      question:
        'Em locais com fumaça ou gases, os itens necessários para o combate a focos de incêndio, além do extintor adequado e luvas de amianto, são:',
      options: [
        'máscara full-face ou sistema fixo de oxigênio',
        'sistema fixo de oxigênio e óculos contra fumaça',
        'cilindro de oxigênio com máscara oro-nasal e C.A.F.',
        'cilindro de oxigênio com máscara full-face e C.A.F.',
      ],
      answer: 'cilindro de oxigênio com máscara full-face e C.A.F.',
    },
    {
      question: 'Os extintores de gás freon estão localizados em compartimentos:',
      options: [
        'sobre a pia dos lavatórios, nas Galley e no compartimento de carga',
        'sob a pia dos lavatórios, nas Galley e na cabine de comando',
        'sob a pia dos lavatórios, nos motores e em aeronaves maiores, no compartimento de carga',
        'sobre a pia dos lavatórios, nos motores e em aeronaves maiores, no compartimento de carga',
      ],
      answer:
        'sob a pia dos lavatórios, nos motores e em aeronaves maiores, no compartimento de carga',
    },
    {
      question: 'Os equipamentos de combate ao fogo existentes no cockpit são:',
      options: [
        'óculos para fumaça, luvas de amianto, extintor de pó-químico, garrafa de O2 acoplada à máscara full-face',
        'garrafa de O2, máscaras full-face ou CAF, extintor Halon, óculos para fumaça e luvas de amianto',
        'machadinha, luvas e roupa de amianto, CAF, extintor de CO2 e óculos para fumaça',
        'extintor de freon portátil, máscara full-face acoplada à garrafa de O2, machadinha e óculos para fumaça',
      ],
      answer:
        'garrafa de O2, máscaras full-face ou CAF, extintor Halon, óculos para fumaça e luvas de amianto',
    },
    {
      question: 'As luvas de amianto servem para:',
      options: [
        'pegar as comidas do forno',
        'carregar térmicas quentes',
        'colocar as comidas e colocá-las nos trolleys',
        'proteção das mãos em situações de combate a incêndio a bordo',
      ],
      answer: 'proteção das mãos em situações de combate a incêndio a bordo',
    },
    {
      question:
        'São considerados líquidos voláteis e devem ser retirados do pax quando encontrados:',
      options: [
        'álcool – benzina – éter – acetona',
        'acetona – éter – benzina – óleo',
        'acetona – éter – benzina – linhaça',
        'álcool – óleo – éter',
      ],
      answer: 'álcool – benzina – éter – acetona',
    },
    {
      question: 'Na cabine de passageiros, o extintor de gás freon localiza-se:',
      options: [
        'embaixo da pia dos lavatórios',
        'acima da pia dos lavatórios',
        'em estações de comissários',
        'nas Galleys',
      ],
      answer: 'embaixo da pia dos lavatórios',
    },
    {
      question: 'São exemplos de materiais combustíveis pertencentes à classe B:',
      options: [
        'madeira, tecido e papel',
        'madeira, alumínio e gasolina',
        'magnésio, zinco e alumínio',
        'gasolina, álcool e querosene',
      ],
      answer: 'gasolina, álcool e querosene',
    },
    {
      question:
        'Observa-se por trás das térmicas da Galley o desprendimento de fumaça. Caso tal ocorrência evolua para um incêndio esse será de classe:',
      options: ['A', 'B', 'C', 'D'],
      answer: 'C',
    },
    {
      question: 'As formas de extinção de fogo são:',
      options: [
        'retirada do material, resfriamento, abafamento',
        'resfriamento, aquecimento, abafamento, extinção química',
        'abafamento, retirada do material combustível, encharcamento',
        'isolamento, extinção química, abafamento, aquecimento',
      ],
      answer: 'retirada do material, resfriamento, abafamento',
    },
    {
      question: 'Uma das causas mais comuns de incêndio em uma aeronave está relacionada a:',
      options: [
        'curtos circuitos devido a materiais elétricos e eletrônicos',
        'derramamento de combustível',
        'tanques da aeronave cheios',
        'pintura da aeronave ser feita com material combustível',
      ],
      answer: 'curtos circuitos devido a materiais elétricos e eletrônicos',
    },
    {
      question: 'O extintor de água é indicado para a classe de incêndio:',
      options: ['B', 'D', 'A', 'C'],
      answer: 'A',
    },
    {
      question:
        'A combustão resultante da fermentação natural de materiais orgânicos que com o calor proporcional atingem o ponto de ignição é a:',
      options: ['ativa', 'lenta', 'espontânea', 'rápida'],
      answer: 'espontânea',
    },
    {
      question: 'A propagação do calor pode ocorrer por:',
      options: [
        'condução – convecção – irradiação',
        'condução – explosão – energia eletrostática',
        'reação em cadeia – combustão – explosão',
        'energia eletrostática – combustão – irradiação',
      ],
      answer: 'condução – convecção – irradiação',
    },
    {
      question:
        'No caso de incêndio, retirando-se o material combustível, o fogo extinguirá pelo método de:',
      options: ['Abafamento', 'Resfriamento', 'Isolamento', 'Sufocamento'],
      answer: 'Isolamento',
    },
  ],
}

export default data
