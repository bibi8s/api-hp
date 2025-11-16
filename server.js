const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());

const feitico = {
  id: 1,
  nome: "Expecto Patronum",
  tipo: "Encantamento",
  efeito: "Conjura um Patrono para afastar Dementadores",
  pronunciacao: "ex-PEC-to pa-TRO-num",
  luz: "Prata",
  dificuldade: "Avançado",
  descricao: "Um dos feitiços mais poderosos e complexos, requer uma lembrança muito feliz para ser conjurado."
};

app.get('/feitico', (req, res) => {
  res.json(feitico);
});

app.get('/', (req, res) => {
  res.json({ 
    mensagem: "API Harry Potter Online! 🧙",
    endpoints: [
      "/feitico - Retorna o feitiço Expecto Patronum"
    ]
  });
});

app.listen(PORT, () => {
  console.log(`🎮 API Harry Potter rodando na porta ${PORT}`);
});
