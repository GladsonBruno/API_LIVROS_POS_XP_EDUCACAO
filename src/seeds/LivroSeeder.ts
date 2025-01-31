import { Seeder, SeederFactoryManager } from 'typeorm-extension';
import { DataSource } from 'typeorm';
import { Livro } from '../model/Livro';
import { AppDataSource } from '../config/AppDataSource';

export default class UserSeeder implements Seeder {
    public async run(
        dataSource: DataSource,
        factoryManager: SeederFactoryManager
    ): Promise<any> {
      let appDataSource: DataSource = AppDataSource.getInstance();
      
      await appDataSource.initialize();

      const repository = dataSource.getRepository(Livro);
      
      let registros: number = await repository.count();
  
      if (registros == 0) {
        await repository.insert([{
          isbn: '978-85-333-0223-1',
          titulo: 'O Senhor dos Anéis',
          autor: 'J.R.R. Tolkien',
          editora: 'Martins Fontes',
          dataPublicacao: new Date('1954-07-29'),
          preco: 54.90,
        }, {
          isbn: '978-85-359-0277-8',
          titulo: 'O Hobbit',
          autor: 'J.R.R. Tolkien',
          editora: 'Martins Fontes',
          dataPublicacao: new Date('1937-09-21'),
          preco: 39.90,
        }, {
          isbn: '978-85-359-0280-8',
          titulo: 'O Silmarillion',
          autor: 'J.R.R. Tolkien',
          editora: 'Martins Fontes',
          dataPublicacao: new Date('1977-09-15'),
          preco: 49.90
        }, {
          isbn: '978-85-359-0278-5',
          titulo: 'Contos Inacabados',
          autor: 'J.R.R. Tolkien',
          editora: 'Martins Fontes',
          dataPublicacao: new Date('1980-09-15'),
          preco: 49.90
        }, {
          isbn: '978-85-359-0279-2',
          titulo: 'Os Filhos de Húrin',
          autor: 'J.R.R. Tolkien',
          editora: 'Martins Fontes',
          dataPublicacao: new Date('2007-04-17'),
          preco: 49.90
        }, {
          isbn: '978-85-359-0281-5',
          titulo: 'Beren e Lúthien',
          autor: 'J.R.R. Tolkien',
          editora: 'Martins Fontes',
          dataPublicacao: new Date('2017-06-01'),
          preco: 49.90
        }, {
          isbn: '978-85-359-0282-2',
          titulo: 'A Queda de Gondolin',
          autor: 'J.R.R. Tolkien',
          editora: 'Martins Fontes',
          dataPublicacao: new Date('2018-08-30'),
          preco: 49.90
        }, {
          isbn: '978-85-359-0283-9',
          titulo: 'O Guia Completo da Terra-média',
          autor: 'Robert Foster',
          editora: 'Martins Fontes',
          dataPublicacao: new Date('1971-01-01'),
          preco: 49.90
        }, {
          isbn: '978-85-359-0284-6',
          titulo: 'A História da Terra-média',
          autor: 'Christopher Tolkien',
          editora: 'Martins Fontes',
          dataPublicacao: new Date('1983-01-01'),
          preco: 49.90
        }, {
          isbn: '978-85-359-0285-3',
          titulo: 'Os Contos Perdidos',
          autor: 'J.R.R. Tolkien',
          editora: 'Martins Fontes',
          dataPublicacao: new Date('1983-01-01'),
          preco: 49.90
        }]);
    }
  }
}