import { DataSource, Raw, Repository } from "typeorm";
import { AppDataSource } from "../config/AppDataSource"
import { Livro } from "../model/Livro";

export class LivroRepository {

    private readonly repository: Repository<Livro>;
    private readonly dataSource: DataSource = AppDataSource.getInstance();

    constructor() {
        this.repository = this.dataSource.getRepository(Livro);
    }

    async findAll() {
        return await this.repository.find();
    }

    async findById(id: number) {
        return await this.repository.findOneBy({
            id: id
        })
    }

    async findByName(titulo: string) {
        return await this.repository.find({
            where: {
                titulo: Raw(alias => `LOWER(${alias}) Like LOWER('%${titulo}%')`)
            }
        })
    }

    async contagem() {
        return await this.repository.count();
    }
    
    async save(livro: Livro) {
        return await this.repository.save(livro);
    }

    async update(id: number, livro: Livro) {
        return await this.repository.save({
            id, ...livro
        });
    }

    async delete(id: number) {
        return await this.repository.delete(id);
    }

}