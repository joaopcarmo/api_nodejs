require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const sql = require("mssql");
const app = express();
const port = 3000;

const config = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_DATABASE,
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

app.use(bodyParser.json());

app.post("/produtos", async (req, res) => {
  const { nome, codigo, preco, descricao, estoque, avaliacao, categoria } =
    req.body;
  try {
    await sql.connect(config);
    await sql.query`INSERT INTO Produtos (Nome, Codigo, Preco, Descricao, Estoque, Avaliacao, Categoria) VALUES (${nome}, ${codigo}, ${preco}, ${descricao}, ${estoque}, ${avaliacao}, ${categoria})`;
    res.send("Produto inserido com sucesso.");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/produtos", async (req, res) => {
  try {
    await sql.connect(config);
    const result = await sql.query`SELECT * FROM Produtos`;
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/produtos/codigo/:codigo", async (req, res) => {
  try {
    await sql.connect(config);
    const result =
      await sql.query`SELECT * FROM Produtos WHERE Codigo = ${req.params.codigo}`;
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.get("/produtos/categoria/:categoria", async (req, res) => {
  try {
    await sql.connect(config);
    const result =
      await sql.query`SELECT * FROM Produtos WHERE Categoria = ${req.params.categoria}`;
    res.json(result.recordset);
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.put("/produtos/:codigo", async (req, res) => {
  const { nome, preco, descricao, estoque, avaliacao, categoria } = req.body;
  try {
    await sql.connect(config);
    await sql.query`UPDATE Produtos SET Nome=${nome}, Preco=${preco}, Descricao=${descricao}, Estoque=${estoque}, Avaliacao=${avaliacao}, Categoria=${categoria} WHERE Codigo = ${req.params.codigo}`;
    res.send("Produto atualizado com sucesso.");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.delete("/produtos/:codigo", async (req, res) => {
  try {
    await sql.connect(config);
    await sql.query`DELETE FROM Produtos WHERE Codigo = ${req.params.codigo}`;
    res.send("Produto deletado com sucesso.");
  } catch (err) {
    res.status(500).send(err.message);
  }
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
