const data = [
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
      'Norte, Sudeste, Sul, Centro-Sul, Oeste'
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
      'Mato Grosso, Mato Grosso do Sul, Goiás, Maranhão'
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
      'Santa Catarina, Rio Grande do Sul, Espírito Santo'
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
      '230 milhões de habitantes'
    ],
    answer: '215 milhões de habitantes',
  },
  {
    question: 'Qual é o país mais populoso do mundo em 2024?',
    options: [
      'Estados Unidos',
      'Índia',
      'China',
      'Indonésia'
    ],
    answer: 'Índia',
  },
  {
    question: 'Qual é a população aproximada da cidade de São Paulo em 2024?',
    options: [
      '8 milhões de habitantes',
      '12 milhões de habitantes',
      '15 milhões de habitantes',
      '18 milhões de habitantes'
    ],
    answer: '12 milhões de habitantes',
  },
  {
    question: 'O Brasil é o Xº país mais extenso do mundo em termos de território. Qual é essa posição?',
    options: [
      '2º',
      '3º',
      '4º',
      '5º'
    ],
    answer: '5º',
  },
  {
    question: 'Qual é o maior estado do Brasil em termos de território?',
    options: [
      'Amazonas',
      'Mato Grosso',
      'Pará',
      'Minas Gerais'
    ],
    answer: 'Amazonas',
  },
  {
    question: 'Qual é o maior país do mundo em termos de território?',
    options: [
      'Estados Unidos',
      'China',
      'Rússia',
      'Canadá'
    ],
    answer: 'Rússia',
  },
  {
    question: 'Qual é a cidade mais populosa do Brasil?',
    options: [
      'Rio de Janeiro',
      'Brasília',
      'São Paulo',
      'Salvador'
    ],
    answer: 'São Paulo',
  },
  {
    question: 'Em qual continente está localizado o Deserto do Saara?',
    options: [
      'Ásia',
      'América do Sul',
      'África',
      'Oceania'
    ],
    answer: 'África',
  },
  {
    question: 'A Alemanha fica em qual continente?',
    options: [
      'América do Norte',
      'Ásia',
      'Europa',
      'África'
    ],
    answer: 'Europa',
  }
]

export default data
