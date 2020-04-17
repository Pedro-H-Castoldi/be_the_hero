const express = require('express');

const cors = require('cors')

const routes = require('./routes');
/**
 * Rota / Recurso
 * 
 * Métodos HTTP:
 *     GET -> Busca/listar uma informação no back-end;
 *     POST -> Cria uma informação no back-end;
 *     PUT -> Altera uma informação no back-end;
 *     DELETE -> Deleta uma informação no back-end.
 * 
 * Tipos de Parâmetros:
 *     Query Params -> Parâmetros nomeados enviados na rota após "?" (filtros, paginação);
 *     Route Params -> Parâmetros utilizados para identificar recursos;
 *     Request Body -> Corpo da requisição, utilizado para criar ou alterar recursos.
 */
const app = express();
app.use(cors())
app.use(express.json()); // Pegar os arquivo json e tranformar em um objeto js (para ser entendível para a linguagem)
app.use(routes)


app.listen(3333);