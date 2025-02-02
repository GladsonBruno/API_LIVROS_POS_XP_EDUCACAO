import { LivroRepository } from '../repository/LivroRepository';
import { Livro } from '../model/Livro';

export class LivroService {
    private readonly livroRepository: LivroRepository;

    constructor() {
        this.livroRepository = new LivroRepository();
    }

    async findAll () {
        return this.livroRepository.findAll();
    }

    async findById (id: number) {
        let livro = await this.livroRepository.findById(id);
        if(!livro) {
            return null;
        } else {
            return livro;
        }
    }

    async findByName (titulo: string) {
        return this.livroRepository.findByName(titulo);
    }

    async contagem () {
        let contagem = await this.livroRepository.contagem();
        return {
            total: contagem
        };
    }

    async save (novoLivro: Livro) {
        let livro: Livro = new Livro(novoLivro.isbn, novoLivro.titulo, novoLivro.autor, novoLivro.editora, novoLivro.dataPublicacao, novoLivro.preco);
        return this.livroRepository.save(livro);
    }

    async update (id: number, livro: Livro) {
        let livroParaAtualizar = await this.livroRepository.findById(id);

        if (!livroParaAtualizar) {
            return null;
        }

        livroParaAtualizar.isbn = livro.isbn;
        livroParaAtualizar.titulo = livro.titulo;
        livroParaAtualizar.autor = livro.autor;
        livroParaAtualizar.editora = livro.editora;
        livroParaAtualizar.dataPublicacao = livro.dataPublicacao;
        livroParaAtualizar.preco = livro.preco;

        return this.livroRepository.update(id, livroParaAtualizar);
    }

    async delete (id: number) {
        let livroParaDeletar = await this.livroRepository.findById(id);

        if (!livroParaDeletar) {
            return null;
        }

        return this.livroRepository.delete(id);
    }

}
