# Executando a aplicação

## Requisitos
 * Docker
 * Postman

## Build da aplicação

Antes de realizar o build da aplicação basta criar um arquivo **.env** na raiz do projeto e copiar o conteúdo do arquivo **.env.example**.

Após isso basta executar o comando:

```sh
docker-compose up -d
```

Este comando irá realizar o build da aplicação, irá subir o banco de dados PostgreSQL e também o PG Admin via container Docker.

A aplicação em si irá povoar o banco de dados automaticamente via Seeds.

## Acessando a aplicação

localhost:8080

## Acessando documentação de API Swagger

Acessar no navegador localhost:8080/api-docs

As requisições também podem ser testadas nesta página.

## Uso da collection Postman

Collection postman disponível em [LivroAPI.postman_collection.json](./docs/LivroAPI.postman_collection.json)

Basta importar no Postman e testar as requisições.

## Diagrama C4 Model

O diagrama C4 pode ser baixado através deste [link](./docs/Diagrama%20C4.drawio).

O mesmo deve ser aberto no [draw.io](https://app.diagrams.net/).

### Nivel 1 - Contexto

![Nivel 1 - Contexto](./docs/C4-01%20-%20Contexto.jpg)

### Nivel 2 - Container

![Nivel 2 - Container](./docs/C4-02%20-%20Container.jpg)

### Nivel 3 - Componente

![Nivel 3 - Componente](./docs/C4-03%20-%20Componente.jpg)

### Nivel 4 - Codigo

Gerado automáticamente via pluggin [classdiagram-ts](https://marketplace.visualstudio.com/items?itemName=AlexShen.classdiagram-ts) do Visual Studio Code.

![Nivel 4 - Codigo](./docs/C4%20-%2004%20-%20Codigo.png)