// Recursos
const express = require("express");
const route = express.Router();

// Controllers
const indexController = require("./src/controllers/index");
const loginController = require("./src/controllers/login");
const contatoController = require("./src/controllers/contato");

const { loginRequired } = require("./src/middlewares/middleware");

// Rota: index
route.get("/", indexController.index);

// Rota: login
route.get("/login/index", loginController.index);
route.post("/login/register", loginController.register);
route.post("/login/login", loginController.login);
route.get("/login/logout", loginController.logout);

// Rota: contato
route.get("/contato/index", loginRequired, contatoController.index);
route.post("/contato/register", loginRequired, contatoController.register);
route.get("/contato/index/:id", loginRequired, contatoController.editIndex);
route.post("/contato/edit/:id", loginRequired, contatoController.edit);
route.get("/contato/delete/:id", loginRequired, contatoController.delete);

// Exports
module.exports = route;