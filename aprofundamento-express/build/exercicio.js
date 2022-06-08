"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const data_1 = require("./data");
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get(("/ping"), (req, res) => {
    res.status(200).send("Pong");
});
const variavelExercicio2 = {
    userId: 1,
    id: 1,
    title: "olá",
    completed: true
};
const arrayUser1 = [
    {
        userId: 1,
        id: 1,
        title: "delectus aut autem",
        completed: false
    },
    {
        userId: 1,
        id: 2,
        title: "quis ut nam facilis et officia qui",
        completed: false
    },
    {
        userId: 1,
        id: 3,
        title: "fugiat veniam minus",
        completed: true
    },
    {
        userId: 1,
        id: 4,
        title: "et porro tempora",
        completed: false
    },
    {
        userId: 1,
        id: 5,
        title: "laboriosam mollitia et enim quasi adipisci quia provident illum",
        completed: false
    },
];
app.get(("/todo/:status"), (req, res) => {
    const status = req.params.status;
    res.status(200).send(data_1.arrayUser.filter(item => String(item.completed).toLowerCase() === status.toLowerCase()));
});
app.post(("/todo/add"), (req, res) => {
    console.log("teste");
    const arrayTodo = [...data_1.arrayUser, req.body];
    res.status(201).send(arrayTodo);
}),
    {
        userId: 1,
        id: 4,
        title: "et porro tempora",
        completed: false
    },
    app.put(("/todo/:id"), (req, res) => {
        res.status(201).send(data_1.arrayUser.filter(item => {
            if (item.id === Number(req.params.id)) {
                return true;
            }
            else
                return false;
        })
            .map((item) => { return Object.assign(Object.assign({}, item), { completed: !item.completed }); }));
    });
app.delete("/todo/:id", (req, res) => {
    const arrayUserDeleted = data_1.arrayUser.filter(item => {
        if (item.id === Number(req.params.id)) {
            return false;
        }
        else
            return true;
    });
    res.status(201).send(arrayUserDeleted);
});
//# sourceMappingURL=exercicio.js.map