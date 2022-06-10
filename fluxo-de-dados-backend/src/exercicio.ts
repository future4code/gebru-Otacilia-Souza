
import express, { request, response } from "express";
import {Request, Response} from "express";

//Exercício 2   
// Crie um arquivo chamado **`data.ts`** que exporta um array de produtos. 
//Cada produto será representado por um objeto com propriedades: id (`string`), name (`string`) e price (`number`). 
// Popule manualmente o array com pelo menos 3 produtos.
import { data } from "./data"


const app = express();
app.use(express.json());
const gate = 3003;




// Exercício 1
// Crie uma nova API do zero (ou utilizando um template) e desenvolva um endpoint 
// de teste com método `**GET`** no path **`“/test”`** que retorna uma mensagem genérica 
// avisando que a API está funcional.

app.get(("/test"), (req:Request, res:Response) => {
    res.send(`A api ta funcionando?`)
})

//Exercicio2 

app.get(("/products"), (req:Request, res:Response)=>{
    res.status(200).send(data)
})

// - Exercício 3

// Desenvolva um endpoint que cria um novo produto e 
// retorna a lista de produtos atualizada.
// A id do produto deve ser gerada automaticamente pela API.


app.post(("/products"), (req:Request, res:Response) => {
    const arrayData = [...data, { id: Date.now(), ...req.body }]
    res.status(201).send(arrayData)
})


// - Exercício 4

//     Crie um endpoint que **retorna todos os produtos**.

app.get(("/products"), (req:Request, res:Response) => {
    res.status(200).send(data)

})

// - Exercício 5


// Crie um endpoint que edita o preço deum determinado produto
//e retorna a lista de produtos atualizada.

app.put(("/products"), (req:Request, res:Response) => {

    const dataPriceChanges = data.map(item => {
        if (Number(item.id) === req.body.id) {
            return { ...item, price: req.body.price }
        } else return item

    })

    res.send(dataPriceChanges)
})





// - Exercício 7

//     Refatore o endpoint do exercício 3 (criar produto) para que sejam 
// implementados fluxos de validação dos dados recebidos (`name` e `price`)

app.post(("/produtos"), (req:Request, res:Response) => {
    try {
        //  erro caso um ou nenhum deles forem recebidos
        if (req.body.price === '' || req.body.name === '') {
            console.log(req.body.price, req.body.name)
            throw Error("Não recebi preço ou/e nome do produto")
        }
        //   erro caso `name` seja diferente de `string`
        if (typeof req.body.name !== "string") {
            throw Error("Não é um formato valido 'não é string' ")
        }
        //     - erro caso `price` seja diferente de `number`
        if (typeof req.body.price !== "number") {
            throw Error("Não é um formato valido 'não é um numero' ")
        }
        //     - erro caso `price` seja igual ou menor que `0`
        if (req.body.price <= 0) {
            throw Error("Preço invalido")
        }
    }

    //     - erro caso algo inesperado aconteça  
    // O catch vai pegar outros erros. 
    catch (error: any) {
        switch (error.message) {
            case "Não  é um formato valido 'não é string' ":
            case "Não  é um formato valido 'não é um numero' ":
            case "Não recebi preço ou/e nome do produto":
            case "Preço invalido":
                res.status(422).send(error.message)
                break;
            default:
                res.status(500).send(error.message)

        }

    }


    const arrayData = [...data, { id: Date.now(), ...req.body }]
    res.status(201).send(arrayData)
})

