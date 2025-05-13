# API de Cadastro de Produtos

Esta é uma API mínima desenvolvida em Node.js com conexão ao SQL Server Express, permitindo operações CRUD em uma tabela de produtos.

## Tecnologias utilizadas

- Node.js
- Express.js
- MSSQL (driver)
- SQL Server Express
- Postman (para testes)

## Como rodar

1. Clone o repositório:
   git clone https://github.com/seu-usuario/seu-repositorio.git

2. Instale as dependências:
   npm install

3. Configure o arquivo .env (caso esteja usando variáveis de ambiente):

   DB_USER=sa  
   DB_PASSWORD=sua_senha_aqui  
   DB_SERVER=localhost  
   DB_DATABASE=ProdutosDB

4. Inicie o servidor:
   npm start

A API rodará por padrão em: http://localhost:3000

## Endpoints disponíveis

- POST /produtos  
  Cria um novo produto.

- GET /produtos  
  Retorna todos os produtos.

- GET /produtos/codigo/:codigo  
  Retorna o produto com o código informado.

- GET /produtos/categoria/:categoria  
  Retorna os produtos da categoria informada.

- PUT /produtos/:codigo  
  Atualiza um produto pelo código.

- DELETE /produtos/:codigo  
  Remove um produto pelo código.

## Exemplo de corpo da requisição (POST)

{  
  "nome": "Teclado Mecânico",  
  "codigo": "JP001",  
  "preco": 249.90,  
  "descricao": "Teclado para jogos com RGB",  
  "estoque": 15,  
  "avaliacao": 4.8,  
  "categoria": "Periféricos"  
}

## Observações

- Certifique-se de que o SQL Server esteja rodando e com a porta 1433 habilitada.
- O login 'sa' precisa estar ativado e com senha correta.
- Você pode testar todos os endpoints com o Postman.