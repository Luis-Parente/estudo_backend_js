import livro from "../models/Livro.js";

class LivroController {

    static async listarLivros(req, res) {
        try {
            const listaLivros = await livro.find({});
            res.status(200).json(listaLivros);
        } catch (error) {
            res.status(500).json({ message: "Erro ao listar livros!", error: error });
        }

    };

    static async buscarLivroPorId(req, res) {
        try {
            const id = req.params.id;
            const livroEncontrado = await livro.findById(id);
            if (!livroEncontrado) {
                return res.status(404).json({ message: "Livro não encontrado!" });
            }
            res.status(200).json(livroEncontrado);
        } catch (error) {
            res.status(500).json({ message: "Erro ao buscar livro!", error: error });
        }
    };

    static async cadastrarLivro(req, res) {
        try {
            const novoLivro = await livro.create(req.body);
            res.status(201).json({ message: "Livro adicionado com sucesso!", livro: novoLivro });
        }
        catch (error) {
            res.status(500).json({ message: "Erro ao adicionar livro!", error: error });
        }
    };

    static async atualizarLivro(req, res) {
        try {
            const id = req.params.id;
            const livroAtualizado = await livro.findByIdAndUpdate(id, req.body);
            if (!livroAtualizado) {
                return res.status(404).json({ message: "Livro não encontrado!" });
            }
            res.status(200).json({ message: "Livro atualizado com sucesso!", livro: livroAtualizado });
        } catch (error) {
            res.status(500).json({ message: "Erro ao atualizar livro!", error: error });
        }
    };

    static async excluirLivro(req, res) {
        try {
            const id = req.params.id;
            const livroExcluido = await livro.findByIdAndDelete(id);
            if (!livroExcluido) {
                return res.status(404).json({ message: "Livro não encontrado!" });
            }
            res.status(200).json({ message: "Livro excluído com sucesso!", livro: livroExcluido });
        } catch (error) {
            res.status(500).json({ message: "Erro ao excluir livro!", error: error });
        }
    }
};

export default LivroController;