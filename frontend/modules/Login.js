import validator from "validator";

export default class Login {
    constructor(formClass) {
        this.form = document.querySelector(formClass);
    };
    init() {
        this.events();
    };
    events() {
        if (!this.form) return;
        this.form.addEventListener("submit", e => {
            this.validate(e);
        });
    };

    validate(element) {
        const emailImput = element.target.querySelector("input[name='email']");
        const passwordInput = element.target.querySelector("input[name='password']");
        const messageDiv = document.querySelector(".message");
        const errors = [];
        
        if (!validator.isEmail(emailImput.value)) errors.push("E-mail inválido");
        
        if (passwordInput.value.length < 3 || passwordInput.value.length > 50)
        errors.push("A senha precisa ter entre 3 e 50 caracteres");
        
        if (errors.length > 0) {
            element.preventDefault();
            const message =
            `<div class="row"><div class="col my-3">
                <div class="alert alert-danger">
                    ${errors.join("<br>")}
                </div>
            </div></div>`;
            messageDiv.innerHTML = message;
        };
    };
};