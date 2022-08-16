import express from "express";
import { arrayUser} from "./data"
import cors from "cors";
import { Request, Response } from "express";


const app = express();

app.use(express.json())

app.use(cors())


// Exercicio 
// Faça novamente a instalação e configuração 
// do Express na pasta do exercício. Para testar, crie um endpoint
//  que aponte para o path “/ping”. 
// Esse endpoint pode responder apenas com uma mensagem “pong”.
app.get(("/ping"),(req:Request, res:Response) => { 
    res.status(200).send("Pong")
} )

// Exercicio 2 
// Acesse a API do JSONPlaceholder e observe os endpoints
//  que buscam afazeres (”todos”). Crie uma variável de tipo para 
//  representar cada afazer.

type user = { 
    userId: number,
    id: number,
    title: string, 
    completed: boolean
}

const variavelExercicio2: user = { 
    userId: 1,
    id: 1,
    title: "olá", 
    completed: true
}

// Exercício 3
    
//     Crie um array de afazeres para servir como base de dados da nossa 
//     API e utilize a tipagem desenvolvida no exercício anterior.

const arrayUser1 : user[] = [ 
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
 
]

// Exercício 4
    
// Construa um endpoint que retorne todos os afazeres do exercício anterior de 
// acordo com um único status, ou seja, retorne ou afazeres concluídos ou somente 
// os que ainda estão em andamento.

    app.get(("/todo/:status"),(req:Request,res:Response) => { 
        const status = req.params.status

        res.status(200).send(arrayUser.filter(item => String(item.completed).toLowerCase() ===status.toLowerCase() ))

    } )

// Exercício 5

// Construa um endpoint de criação de afazer. 
// A resposta deve retornar o array de afazeres atualizado
  
    app.post(("/todo/add"),(req:Request,res:Response) => { 

        console.log("teste")

        const arrayTodo = [... arrayUser , req.body]
        

        res.status(201).send(arrayTodo)
    }),
    {
        userId: 1,
        id: 4,
        title: "et porro tempora",
        completed: false
      },


// Exercício 6

// Construa um endpoint de edição
//  do status de um afazer, ou seja, de completo para incompleto e vice-versa.

app.put(("/todo/:id"), (req:Request,res:Response)=> {
   res.status(201).send( arrayUser.filter(item => {

        if(item.id === Number(req.params.id)){ 
            return true
        } else return false
    })
    .map((item) => {return { ...item , completed : !item.completed  }} )
    )
})


// Exercício 7
    
// Construa um endpoint que deleta um determinado afazer de acordo com sua id.


app.delete("/todo/:id" , (req:Request,res:Response) => { 
   
   const arrayUserDeleted = arrayUser.filter(item =>     {
        if(item.id===Number(req.params.id))
        { return false}
        else return true 
    })

    res.status(201).send(arrayUserDeleted)

} ) 

