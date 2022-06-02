// Exercício 1
    
// Faça a instalação e configuração do Express na pasta do 
// exercício. Para testar, crie um endpoint que aponte para a URL base da API.
//  Esse endpoint pode responder apenas com um status ou mensagem fixa.

import express, { request, response } from "express";
import cors from "cors";
import {Request, Response} from "express";

const app = express()
app.use(express.json())
app.use(cors())


app.get("/" , (req:Request, res:Response)=>{


  res.status(200).send(user)
})

app.listen(3003, ()=>{console.log("funcionandoquestao1")
})

// Exercício 2
    
// Acesse a API do JSONPlaceholder e observe os endpoints que buscam usuários.
//  No seu projeto, crie uma variável de tipo para representar esse recurso. 
//  Eles devem possuir as seguintes propriedades:
//  - id/ - name/- phone/- email/- website

const usuario = 
    {
        id: "number",
        name: "string",
        username: "string",
        email: "string",
        phone: "string",
        website: "string"
      }

      // Exercício 3
    
// Crie um array de usuários para servir como base de dados da nossa API. 
    
// Insira nele quantos objetos quiser, fique à vontade para explorar sua criatividade 😉
    
//  Não se esqueça de fazer a tipagem correta desse array.

type endereco = {
    street: string
    suite:string
    city: string 
   
    }


type usuario = {     
    id: number
    name: string
    username: string
    email: string
    address: endereco
    phone: string
    website: string
    }

const user: usuario[] = [ 

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
]

// Exercício 4
    
// Construa um endpoint que retorne os usuários criados no exercício anterior.
// Use o JSONPlaceholder como exemplo para o nome da rota e formato da resposta.


 
 app.get("/user" , (req:Request,res:Response)=>{
   console.log("usuario")
  res.status(200).send(user)
})


 
 // Exercício 5
    
// Acesse a API do JSONPlaceholder e observe os endpoints que buscam **posts**. No seu projeto, crie uma variável de tipo para representar esse recurso. Eles devem possuir as seguintes propriedades:
    
//  - id/title/body/userId


type post = {
    id: number,
    title:string,
    body: string ,
    userId: number
  
   
    }
    // Exercício 6
    
    // Crie um array de posts para incrementar a base de dados da nossa API. 
    
    // Você acha melhor criá-los dentro ou fora do array de usuários? Justifique com comentários no código.
    
    // Não se esqueça de fazer a tipagem correta desse array.
  const dadosPost: post[] = [{ 
    
    id: 1,
    title: "eu termino este troço",
    body: "ainda faço as pazes com API's", 
    userId: 1
  },
  { 
    id: 2,
    title: "meus neuronios tao a mil ",
    body: "axo que vou sonhar com os codigos", 
    userId: 2
   
  }]


  // Exercício 7
    
// Construa um endpoint que retorne os posts criados no exercício anterior.
    
// Use o JSONPlaceholder como exemplo para o nome da rota e formato da resposta.

app.get("/posts/:userId", (req:Request, res: Response) => {

  const userId = req.params.userId
  
   res.send({resultado:userId})
  })

// Exercício 8
    
// Construa um endpoint que retorne os posts de um usuário em particular.
    
// Use o JSONPlaceholder como exemplo para a construção da rota.
    

const busca = (id:number) => {
    const buscar = dadosPost.filter((dado)=>{
        const dados = dado.userId
        return dados
    })
    return buscar
  }
  app.get("/posts", (req: Request, res: Response) => {
     
    res.status(200).send(busca(33))
  })
  
  
  
  

