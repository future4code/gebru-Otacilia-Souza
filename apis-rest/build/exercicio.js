"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const port = 3003;
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.listen(port, () => {
    console.log("The server is running at :", port);
});
var uType;
(function (uType) {
    uType["ADMIN"] = "ADMIN";
    uType["NORMAL"] = "NORMAL";
})(uType || (uType = {}));
let users = [
    {
        id: 1,
        name: "Alice",
        email: "alice@email.com",
        type: uType.ADMIN,
        age: 12
    },
    {
        id: 2,
        name: "Bob",
        email: "bob@email.com",
        type: uType.NORMAL,
        age: 36
    },
    {
        id: 3,
        name: "Coragem",
        email: "coragem@email.com",
        type: uType.NORMAL,
        age: 21
    },
    {
        id: 4,
        name: "Dory",
        email: "dory@email.com",
        type: uType.NORMAL,
        age: 17
    },
    {
        id: 5,
        name: "Elsa",
        email: "elsa@email.com",
        type: uType.ADMIN,
        age: 17
    },
    {
        id: 6,
        name: "Fred",
        email: "fred@email.com",
        type: uType.ADMIN,
        age: 60
    }
];
app.get(("/users"), (req, res) => {
    try {
        let type = req.query.type;
        type = type.toLowerCase().trim();
        if (type === "normal" || type === "admin") {
            res.status(200).send(users.filter(item => {
                console.log(item.type, req.query.type);
                return item.type.toLowerCase() === type;
            }));
        }
        throw new Error("type invalido");
    }
    catch (error) {
        switch (error.message) {
            case "type invalido":
                res.status(400).send(error.message);
                break;
            default:
                res.status(500).send(error.message);
        }
    }
});
app.get("/users/:name", (req, res) => {
    try {
        const name = req.params.name;
        const namefiltered = users.filter(item => item.name.toLowerCase() === name.toLowerCase());
        if (namefiltered.length <= 0) {
            throw new Error("Usuario não existe");
        }
        res.status(200).send(users.filter(item => item.name.toLowerCase() === name.toLowerCase()));
    }
    catch (e) {
        res.status(400).send(e.message);
    }
});
app.post("/users", (req, res) => {
    try {
        const { name, type, email, age } = req.body;
        if (!name || !type || !email || !age) {
            throw new Error("observe os inputs!");
        }
        const newUsers = ([...users, Object.assign({ id: Date.now() }, req.body)]);
        res.status(201).send(newUsers);
    }
    catch (e) {
        switch (e.message) {
            case "observe os inputs!":
                res.status(400).send(e.message);
                break;
            default:
                res.status(500).send(e.message);
        }
    }
});
app.put("/users", (req, res) => {
    try {
        const { name, type, email, age } = req.body;
        console.log("Resolução put ");
        if (!name || !type || !email || !age) {
            throw new Error("observe os inputs!");
        }
        const newUsers1 = ([...users, Object.assign({ id: Date.now() }, req.body)]);
        res.status(201).send(newUsers1);
    }
    catch (e) {
    }
});
//# sourceMappingURL=exercicio.js.map