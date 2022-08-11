import 'core-js/stable';
import 'regenerator-runtime/runtime';

import Login from "./modules/Login";
import Contato from "./modules/Contato";

const cadastro = new Login(".form-cadastro");
const login = new Login(".form-login");
login.init();
cadastro.init();

const contato = new Contato(".form-contato");
contato.init();

// import './assets/css/style.css';

