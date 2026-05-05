import express from "express";
import AutorController from "../controllers/AutorController";

const router = express.Router();

router.get('/autores', AutorController.listarAutores);

router.get('/autores/:id', AutorController.buscarAutorPorId);

router.post('/autores', AutorController.cadastrarAutor);

router.put('/autores/:id', AutorController.atualizarAutor);

router.delete('/autores/:id', AutorController.excluirAutor);

export default router;