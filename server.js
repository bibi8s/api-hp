const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

// BANCO DE DADOS COM VÁRIOS FEITIÇOS
const feiticos = [
  {
    id: 1,
    nome: "Expecto Patronum",
    tipo: "Encantamento",
    efeito: "Conjura um Patrono para afastar Dementadores",
    pronunciacao: "ex-PEC-to pa-TRO-num",
    luz: "Prata",
    dificuldade: "Avançado",
    descricao: "Um dos feitiços mais poderosos e complexos, requer uma lembrança muito feliz para ser conjurado."
  },
  {
    id: 2,
    nome: "Wingardium Leviosa",
    tipo: "Encantamento",
    efeito: "Faz objetos levitarem",
    pronunciacao: "wing-GAR-di-um le-vi-O-sa",
    luz: "Branca",
    dificuldade: "Iniciante",
    descricao: "Um dos primeiros feitiços aprendidos em Hogwarts. É importante a pronúncia correta!"
  },
  {
    id: 3,
    nome: "Expelliarmus",
    tipo: "Feitiço",
    efeito: "Desarma o oponente",
    pronunciacao: "ex-PEL-li-AR-mus",
    luz: "Vermelha",
    dificuldade: "Intermediário", 
    descricao: "Feitiço de desarme muito utilizado em duelos."
  },
  {
    id: 4,
    nome: "Lumos",
    tipo: "Encantamento", 
    efeito: "Cria luz na ponta da varinha",
    pronunciacao: "LU-mos",
    luz: "Branca brilhante",
    dificuldade: "Iniciante",
    descricao: "Feitiço simples para iluminar ambientes escuros."
  },
  {
    id: 5,
    nome: "Avada Kedavra",
    tipo: "Maldição Imperdoável",
    efeito: "Mata instantaneamente",
    pronunciacao: "a-VA-da ke-DAV-ra", 
    luz: "Verde",
    dificuldade: "Avançado",
    descricao: "Uma das três maldições imperdoáveis. Requer grande poder e intenção de matar."
  }
];

// ROTAS DA API

// Pega TODOS os feitiços
app.get('/feiticos', (req, res) => {
  res.json(feiticos);
});

// Pega UM feitiço por ID
app.get('/feitico/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const feitico = feiticos.find(f => f.id === id);
  
  if (feitico) {
    res.json(feitico);
  } else {
    res.status(404).json({ erro: 'Feitiço não encontrado' });
  }
});

// Pega feitiços por TIPO
app.get('/feiticos/tipo/:tipo', (req, res) => {
  const tipo = req.params.tipo.toLowerCase();
  const feiticosFiltrados = feiticos.filter(f => 
    f.tipo.toLowerCase().includes(tipo)
  );
  res.json(feiticosFiltrados);
});

// Busca feitiços por NOME
app.get('/feiticos/busca/:nome', (req, res) => {
  const nomeBuscado = req.params.nome.toLowerCase();
  const feiticosEncontrados = feiticos.filter(f =>
    f.nome.toLowerCase().includes(nomeBuscado)
  );
  res.json(feiticosEncontrados);
});

// Página inicial
app.get('/', (req, res) => {
  res.json({ 
    mensagem: "API Harry Potter Online! 🧙",
    total_feiticos: feiticos.length,
    endpoints: [
      "/feiticos - Todos os feitiços",
      "/feitico/:id - Feitiço específico (1 a 5)",
      "/feiticos/tipo/:tipo - Feitiços por tipo",
      "/feiticos/busca/:nome - Busca por nome"
    ]
  });
});

app.listen(PORT, () => {
  console.log(`🎮 API Harry Potter com ${feiticos.length} feitiços rodando!`);
});
