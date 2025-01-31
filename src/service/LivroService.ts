import { LivroRepository } from '../repository/LivroRepository';
import { Livro } from '../model/Livro';

export class LivroService {
    private readonly livroRepository: LivroRepository;

    constructor() {
        this.livroRepository = new LivroRepository();
    }

    findAll () {
        return this.livroRepository.findAll();
    }

    findById (id: number) {
        return this.livroRepository.findById(id);
    }

    findByName (titulo: string) {
        return this.livroRepository.findByName(titulo);
    }

    contagem () {
        return this.livroRepository.contagem();
    }

    save (livro: Livro) {
        return this.livroRepository.save(livro);
    }

    update (id: number, livro: Livro) {
        return this.livroRepository.update(id, livro);
    }

    delete (id: number) {
        return this.livroRepository.delete(id);
    }

}
