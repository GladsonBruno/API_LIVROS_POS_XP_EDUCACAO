import { LivroController } from "../controller/LivroController";

export const Routes = [
    {
        method: "get",
        route: "/api/livro",
        controller: LivroController,
        action: "findAll",
        /**
         * @swagger
         * /api/livro:
         *   get:
         *     summary: Retorna todos os livros
         *     parameters:
         *       - in: query
         *         name: nome
         *         required: false
         *         description: Filtra os livros pelo nome ( Opcional )
         *     responses:
         *       200:
         *         description: Lista de livros
         */
    },
    {
        method: "get",
        route: "/api/livro/contagem",
        controller: LivroController,
        action: "contagem"
        /**
         * @swagger
         * /api/livro/contagem:
         *   get:
         *     summary: Retorna a contagem de livros cadastrados
         *     responses:
         *       200:
         *         description: Total de registros X
         */
    },
    {
        method: "get",
        route: "/api/livro/:id",
        controller: LivroController,
        action: "findById",
        /**
         * @swagger
         * /api/livro/{id}:
         *   get:
         *     summary: Retorna um livro pelo ID
         *     parameters:
         *       - in: path
         *         name: id
         *         required: true
         *         schema:
         *           type: integer
         *         description: ID do livro
         *     responses:
         *       200:
         *         description: Livro encontrado
         *       404:
         *         description: Livro não encontrado
         */
    },
    {
        method: "post",
        route: "/api/livro",
        controller: LivroController,
        action: "save",
        /**
         * @swagger
         * /api/livro:
         *   post:
         *     summary: Cria um novo livro
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             type: object
         *             properties:
         *               isbn:
         *                 type: string
         *               titulo:
         *                 type: string
         *               autor:
         *                 type: string
         *               editora:
         *                 type: string
         *               dataPublicacao:
         *                 type: string
         *                 format: date
         *               preco:
         *                 type: number
         *     responses:
         *       201:
         *         description: Livro criado
         */
    },
    {
        method: "put",
        route: "/api/livro/:id",
        controller: LivroController,
        action: "update",
        /**
         * @swagger
         * /api/livro/{id}:
         *   put:
         *     summary: Atualiza um livro pelo ID
         *     parameters:
         *       - in: path
         *         name: id
         *         required: true
         *         schema:
         *           type: integer
         *         description: ID do livro
         *     requestBody:
         *       required: true
         *       content:
         *         application/json:
         *           schema:
         *             type: object
         *             properties:
         *               titulo:
         *                 type: string
         *               autor:
         *                 type: string
         *               ano:
         *                 type: integer
         *     responses:
         *       200:
         *         description: Livro atualizado
         *       404:
         *         description: Livro não encontrado
         */
    },
    {
        method: "delete",
        route: "/api/livro/:id",
        controller: LivroController,
        action: "delete",
        /**
         * @swagger
         * /api/livro/{id}:
         *   delete:
         *     summary: Deleta um livro pelo ID
         *     parameters:
         *       - in: path
         *         name: id
         *         required: true
         *         schema:
         *           type: integer
         *         description: ID do livro
         *     responses:
         *       200:
         *         description: Livro deletado
         *       404:
         *         description: Livro não encontrado
         */
    },
]