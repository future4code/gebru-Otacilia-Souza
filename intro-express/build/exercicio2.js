"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/", (req, res) => {
    res.status(200).send(user);
});
app.listen(3003, () => {
    console.log("funcionandoquestao1");
});
const usuario = {
    id: "number",
    name: "string",
    username: "string",
    email: "string",
    phone: "string",
    website: "string/number"
};
const user = [
    {
        id: 1,
        name: "otacilia souza",
        username: "otacilia",
        email: "ota@gmail.com",
        address: {
            street: "da paz",
            suite: "Apt. 100",
            city: "caramelo",
        },
        phone: "80-3694-3685",
        website: "vivalavida.org"
    },
    {
        id: 2,
        name: "otacilia timoteo",
        username: "tacy",
        email: "tacy@gmail.com",
        address: {
            street: "da aurora",
            suite: "Apt. 105",
            city: "la paz",
        },
        phone: "80-3478-1245",
        website: "lapaz.org"
    }
];
app.get("/user", (req, res) => {
    console.log("usuario");
    res.status(200).send(user);
});
const dadosPost = [{
        id: 1,
        title: "Post  do usuario 1",
        body: "Body  do Usuario 1 ;abcdf",
        userId: 1
    },
    {
        id: 2,
        title: "Post do usuario 2 ",
        body: "Body  do Usuario 2 ;abcdf",
        userId: 2
    }];
const busca = (id) => {
    const buscar = dadosPost.filter((dado) => {
        const dados = dado.userId;
        return dados;
    });
    return buscar;
};
app.get("/posts", (req, res) => {
    res.status(200).send(busca(33));
});
//# sourceMappingURL=exercicio2.js.map