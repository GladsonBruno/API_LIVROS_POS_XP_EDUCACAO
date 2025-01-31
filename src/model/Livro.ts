import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity('livros')
export class Livro {

    @PrimaryGeneratedColumn()
    id?: number;

    @Column()
    isbn: string;

    @Column()
    titulo: string;

    @Column()
    autor: string;

    @Column()
    editora: string;

    @Column()
    dataPublicacao: Date;

    @Column('decimal', { precision: 6, scale: 2 })
    preco: number;

    constructor(isbn: string, titulo: string, autor: string, editora: string, dataPublicacao: Date, preco: number) {
        this.isbn = isbn;
        this.titulo = titulo;
        this.autor = autor;
        this.editora = editora;
        this.dataPublicacao = dataPublicacao;
        this.preco = preco;
    }

    public getId(): number | undefined {
        return this.id;
    }

    public setId(id: number): void {
        this.id = id;
    }

    public getIsbn(): string {
        return this.isbn;
    }

    public setIsbn(isbn: string): void {
        this.isbn = isbn;
    }

    public getTitulo(): string {
        return this.titulo;
    }

    public setTitulo(titulo: string): void {
        this.titulo = titulo;
    }

    public getAutor(): string {
        return this.autor;
    }

    public setAutor(autor: string): void {
        this.autor = autor;
    }

    public getEditora(): string {
        return this.editora;
    }

    public setEditora(editora: string): void {
        this.editora = editora;
    }

    public getDataPublicacao(): Date {
        return this.dataPublicacao;
    }

    public setDataPublicacao(dataPublicacao: Date): void {
        this.dataPublicacao = dataPublicacao;
    }

    public getPreco(): number {
        return this.preco;
    }

    public setPreco(preco: number): void {
        this.preco = preco;
    }

}