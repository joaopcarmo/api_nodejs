# Product Registration API

English | [Português](README_PT.md) 

This is a minimal API developed in Node.js with SQL Server Express connection, allowing CRUD operations on a product table.

## Technologies used

- Node.js
- Express.js
- MSSQL (driver)
- SQL Server Express
- Postman (for testing)

## How to run

1. Clone the repository:
   git clone https://github.com/your-username/your-repo-name.git

2. Install dependencies:
   npm install

3. Configure the .env file (if using environment variables):

   DB_USER=sa  
   DB_PASSWORD=your_password_here  
   DB_SERVER=localhost  
   DB_DATABASE=ProdutosDB

4. Start the server:
   npm start

The API will run by default on: http://localhost:3000

## Available Endpoints

- POST /produtos  
  Creates a new product.

- GET /produtos  
  Returns all products.

- GET /produtos/codigo/:codigo  
  Returns the product with the specified code.

- GET /produtos/categoria/:categoria  
  Returns all products from the specified category.

- PUT /produtos/:codigo  
  Updates a product by its code.

- DELETE /produtos/:codigo  
  Deletes a product by its code.

## Example Request Body (POST)

{  
  "nome": "Mechanical Keyboard",  
  "codigo": "JP001",  
  "preco": 249.90,  
  "descricao": "Gaming keyboard with RGB",  
  "estoque": 15,  
  "avaliacao": 4.8,  
  "categoria": "Peripherals"  
}



