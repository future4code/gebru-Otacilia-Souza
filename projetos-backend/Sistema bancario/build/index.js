"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
let errorCode = 400;
let contas = [];
const app = (0, express_1.default)();
app.use(express_1.default.json()),
    app.use((0, cors_1.default)());
app.post("/novaconta", (req, res) => {
    try {
        const [dia, mes, ano] = req.body.nascimento.split("/");
        const dataNascimento = new Date(`${ano}-${mes}-${dia}`);
        const idade = Date.now() - dataNascimento.getTime();
        const idadeFinal = idade;
        if (idadeFinal < 18) {
            errorCode = 405;
            throw new Error('Para criar conta cliente tem que ser maior de 18 anos');
        }
        const novaConta = {
            id: Date.now(),
            nome: req.body.nome,
            cpf: req.body.cpf,
            nascimento: dataNascimento,
            saldo: 0,
            extrato: []
        };
        if (!req.body.nome || !req.body.cpf || !req.body.nascimento) {
            errorCode = 423;
            throw new Error('Preencha corretamente todos os campos.');
        }
        if (contas.length !== 0) {
            const encontraCpf = contas.findIndex((dados => dados.cpf === novaConta.cpf));
            if (encontraCpf !== -1) {
                errorCode = 400;
                throw new Error('CPF já cadastrado');
            }
        }
        contas.push(novaConta);
        res.status(200).send({ message: 'Conta criado com sucesso!' });
    }
    catch (error) {
        res.status(errorCode);
    }
});
app.get("/contas", (req, res) => {
    try {
        if (contas.length === 0) {
            errorCode = 404;
            throw new Error('Nenhuma conta cadastrada !');
        }
        res.status(200).send(contas);
    }
    catch (error) {
        res.status(errorCode).send(error.message);
    }
});
//# sourceMappingURL=index.js.map