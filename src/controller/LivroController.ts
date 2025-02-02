import { NextFunction, Request, Response } from "express";
import { LivroService } from "../service/LivroService";
import { Livro } from "../model/Livro";

export class LivroController {

    private readonly livroService: LivroService = new LivroService();

    async findAll (request: Request, response: Response, next: NextFunction) {
        if (request.query.nome !== undefined) {
            let livrosPorNome = await this.livroService.findByName(request.query.nome as string);
            return response.status(200).send(livrosPorNome);
        } else {
            let livros = await this.livroService.findAll()
            return response.status(200).send(livros);
        }
    }

    async findById (request: Request, response: Response, next: NextFunction) {
        let id = request.params.id;
        let livro = await this.livroService.findById(Number(id));

        if(livro === null) {
            return response.status(404).send('Livro não encontrado');
        } else {
            return response.status(200).send(livro);   
        }
    }

    async contagem (request: Request, response: Response, next: NextFunction) {
        let contagem = await this.livroService.contagem()
        return response.status(200).send(contagem);
    }

    async save (request: Request, response: Response, next: NextFunction) {
        let novoLivro: Livro = request.body;
        let livroSalvo = await this.livroService.save(novoLivro);
        return response.status(201).send(livroSalvo);
    }

    async update (request: Request, response: Response, next: NextFunction) {
        let id: number = Number(request.params.id);
        let livro = request.body;
        let livroAtualizado = await this.livroService.update(id, livro);

        if(livroAtualizado === null) {
            return response.status(404).send('Livro não encontrado');
        } else {
            return response.status(200).send(livroAtualizado);
        }
    }

    async delete (request: Request, response: Response, next: NextFunction) {
        let id = request.params.id;
        let livroDeletado = await this.livroService.delete(Number(id));

        if(livroDeletado === null) {
            return response.status(404).send('Livro não encontrado');
        } else {
            return response.status(200).send('Livro deletado com sucesso');
        }
    }

}