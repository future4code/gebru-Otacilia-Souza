"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_1 = require("./data");
const app = (0, express_1.default)();
app.use(express_1.default.json());
const gate = 3003;
app.get(("/test"), (req, res) => {
    res.send(`A api ta funcionando?`);
});
app.get(("/products"), (req, res) => {
    res.status(200).send(data_1.data);
});
app.post(("/products"), (req, res) => {
    const arrayData = [...data_1.data, Object.assign({ id: Date.now() }, req.body)];
    res.status(201).send(arrayData);
});
app.get(("/products"), (req, res) => {
    res.status(200).send(data_1.data);
});
app.put(("/products"), (req, res) => {
    const dataPriceChanges = data_1.data.map(item => {
        if (Number(item.id) === req.body.id) {
            return Object.assign(Object.assign({}, item), { price: req.body.price });
        }
        else
            return item;
    });
    res.send(dataPriceChanges);
});
app.post(("/produtos"), (req, res) => {
    try {
        if (req.body.price === '' || req.body.name === '') {
            console.log(req.body.price, req.body.name);
            throw Error("Não recebi preço ou/e nome do produto");
        }
        if (typeof req.body.name !== "string") {
            throw Error("Não é um formato valido 'não é string' ");
        }
        if (typeof req.body.price !== "number") {
            throw Error("Não é um formato valido 'não é um numero' ");
        }
        if (req.body.price <= 0) {
            throw Error("Preço invalido");
        }
    }
    catch (error) {
        switch (error.message) {
            case "Não  é um formato valido 'não é string' ":
            case "Não  é um formato valido 'não é um numero' ":
            case "Não recebi preço ou/e nome do produto":
            case "Preço invalido":
                res.status(422).send(error.message);
                break;
            default:
                res.status(500).send(error.message);
        }
    }
    const arrayData = [...data_1.data, Object.assign({ id: Date.now() }, req.body)];
    res.status(201).send(arrayData);
});
//# sourceMappingURL=exercicio.js.map