import express from 'express';

const app = express();
app.use(express.json());

const livros = [
  { id: 1, titulo: 'O Senhor dos Anéis', autor: 'J.R.R. Tolkien' },
  { id: 2, titulo: 'Harry Potter e a Pedra Filosofal', autor: 'J.K. Rowling' },
  { id: 3, titulo: 'O Código Da Vinci', autor: 'Dan Brown' },
];

function buscarLivroPorId(id) {
  return livros.findIndex(livro => {
    return livro.id === Number(id);
  });
}

app.get('/', (req, res) => {
  res.status(200).send('Curso de Node.js');
});

app.get('/livros', (req, res) => {
  res.status(200).json(livros);
});

app.get('/livros/:id', (req, res) => {
  const index = buscarLivroPorId(req.params.id);
  res.status(200).json(livros[index]);
});

app.post('/livros', (req, res) => {
  livros.push(req.body);
  res.status(201).send('Livro adicionado com sucesso!');
});

app.put('/livros/:id', (req, res) => {
  const index = buscarLivroPorId(req.params.id);
  livros[index].titulo = req.body.titulo;
  livros[index].autor = req.body.autor;
  res.status(200).send('Livro atualizado com sucesso!');
});

export default app;