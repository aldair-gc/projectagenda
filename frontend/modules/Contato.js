import validator from "validator";

export default class Contato {
    constructor(formContato) {
        this.form = document.querySelector(formContato);
    };

    init() {
        this.events();
    };

    events() {
        if (!this.form) return;
        this.form.addEventListener("submit", event => {
            this.validate(event);
        });
    };

    validate(event) {
        const nome = event.target.querySelector("input[name='nome']");
        const sobrenome = event.target.querySelector("input[name='sobrenome']");
        const tel = event.target.querySelector("input[name='tel']");
        const email = event.target.querySelector("input[name='email']");;

        function createMessage(field, message) {
            field.nextElementSibling.innerText = `${message}`;
        }
        
        if (!nome.value) {
            event.preventDefault();
            nome.nextElementSibling.innerText = "nome inválido";
        } else {
            nome.nextElementSibling.innerText = "";
        };

        if (tel.value && validator.isMobilePhone(tel.value, "pt-BR")) {
            event.preventDefault();
            createMessage(tel, "número de telefone inválido");
            tel.after(message);
        } else {
            createMessage(tel, "");
        };

        if(email.value && validator.isEmail(email.value)) {
            event.preventDefault();
            createMessage(email, "endereço de e-mail inválido");
            email.after(message);
        } else {
            createMessage(email, "");
        };

        if(!tel.value && !email.value) {
            event.preventDefault();
            const msg = "pelo menos telefone ou e-mail devem ser preenchidos";
            createMessage(tel, msg);
            createMessage(email, msg);
        } else {
            createMessage(tel, "");
            createMessage(email, "");
        };
    };
};