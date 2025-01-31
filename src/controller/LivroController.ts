import { NextFunction, Request, Response } from "express";
import { LivroService } from "../service/LivroService";
import { Livro } from "../model/Livro";

export class LivroController {

    private readonly livroService: LivroService = new LivroService();

    async findAll (request: Request, response: Response, next: NextFunction) {
        if (request.query.nome !== undefined) {
            let livro = await this.livroService.findByName(request.query.nome as string);
            return response.send(livro).status(200);
        } else {
            let livros = await this.livroService.findAll()
            return response.send(livros).status(200);
        }
    }

    async findById (request: Request, response: Response, next: NextFunction) {
        let id = request.params.id;
        let livro = await this.livroService.findById(Number(id))
        return response.send(livro).status(200);
    }

    async contagem (request: Request, response: Response, next: NextFunction) {
        let contagem = await this.livroService.contagem()
        return response.send(`Total de registros: ${contagem}`).status(200);
    }

    async save (request: Request, response: Response, next: NextFunction) {
        let body: Livro = request.body;
        console.log(request.body);
        let livro: Livro = new Livro(body.isbn, body.titulo, body.autor, body.editora, body.dataPublicacao, body.preco);
        let livroSalvo = await this.livroService.save(livro);
        return response.send(livroSalvo).status(201);
    }

    async update (request: Request, response: Response, next: NextFunction) {
        let body = request.body;
        let id: number = Number(request.params.id);
        let livro: Livro = new Livro(body.isbn, body.titulo, body.autor, body.editora, body.dataPublicacao, body.preco);
        let livroAtualizado = await this.livroService.update(id, livro);

        if(livroAtualizado === null) {
            return response.send('Livro não encontrado').status(404);
        }

        return response.send(livroAtualizado).status(200);
    }

    async delete (request: Request, response: Response, next: NextFunction) {
        let id = request.params.id;
        let livroDeletado = await this.livroService.delete(Number(id));
        return response.send(livroDeletado).status(200);
    }

}