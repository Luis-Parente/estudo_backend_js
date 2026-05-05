import express from 'express';
import connectDB from './config/dbConnect';
import routes from './routes/index.js';

const conexao = await connectDB();

conexao.on('error', (erro) => {
  console.log('Erro de conexão: ' + erro);
});

conexao.once('open', () => {
  console.log('Conexão com o banco feita com sucesso!');
});

const app = express();
routes(app);

export default app;