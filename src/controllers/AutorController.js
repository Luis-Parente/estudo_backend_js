import { autor } from "../models/Autor.js";

class AutorController {

    static async listarAutores(req, res) {
        try {
            const listaAutores = await autor.find({});
            res.status(200).json(listaAutores);
        } catch (error) {
            res.status(500).json({ message: "Erro ao listar autores!", error: error });
        }
    };

    static async buscarAutorPorId(req, res) {
        try {
            const id = req.params.id;
            const autorEncontrado = await autor.findById(id);
            if (!autorEncontrado) {
                return res.status(404).json({ message: "Autor não encontrado!" });
            }
            res.status(200).json(autorEncontrado);
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar autor!", error: error });
        }
    };

    static async cadastrarAutor(req, res) {
        try {
            const novoAutor = await autor.create(req.body);
            res.status(201).json({ message: "Autor adicionado com sucesso!", autor: novoAutor });
        }
        catch (error) {
            res.status(500).json({ message: "Erro ao adicionar autor!", error: error });
        }
    };

    static async atualizarAutor(req, res) {
        try {
            const id = req.params.id;
            const autorAtualizado = await autor.findByIdAndUpdate(id, req.body);
            if (!autorAtualizado) {
                return res.status(404).json({ message: "Autor não encontrado!" });
            }
            res.status(200).json({ message: "Autor atualizado com sucesso!", autor: autorAtualizado });
        } catch (error) {
            res.status(500).json({ message: "Erro ao atualizar autor!", error: error });
        }
    };

    static async excluirAutor(req, res) {
        try {
            const id = req.params.id;
            const autorExcluido = await autor.findByIdAndDelete(id);
            if (!autorExcluido) {
                return res.status(404).json({ message: "Autor não encontrado!" });
            }
            res.status(200).json({ message: "Autor excluído com sucesso!" });
        } catch (error) {
            res.status(500).json({ message: "Erro ao excluir autor!", error: error });
        }
    }
};

export default AutorController;