### Exercício 1
    
    Na autenticação de usuários o elemento mais fundamental talvez seja o id. É muito importante 
    encontrar um que seja fácil de guardar e que garanta unicidade.
    Para isso usaremos a versão v4 do UUID, uma das mais recomendadas para isso. 
                    
                
```               
import { v4 } from "uuid"

const id = v4();

console.log("Generated Id: ", id);
```


a) O uso de string ao inves de numeros diminuimos  a probabilidade 
dos dos id se repetirem. Mesmo que a  bibiliteca uuid v4 use somendo hex , reduzindo para 16 caracteres ainda assim  aumenta em muito o range de ids. 




### - Exercício 2
     
    Antes de poder fazer o endpoint de cadastro, precisamos de uma forma para gerar o token de autenticação do usuário. Para isso, vamos usar o JWT. Ele possui uma função que permite gerar o token do usuário, que recebe três informações:
    
    - os dados que serão salvos no token (no nosso caso, o id);
    - a chave secreta usada pra criptografar o token;
    - algumas configurações, como o tempo de expiração

```
 import * as jwt from "jsonwebtoken";

const expiresIn = "1min"

const generateToken = (id: string): string => {
  const token = jwt.sign(
    {
      id
    },
    process.env.JWT_KEY as string,
    {
      expiresIn
    }
  );
  return token;
}

```

    a) *O que a linha `as string` faz? Por que precisamos usar ela ali?*

      process.env.JWT_KEY as string, type as string ta grantindo  o JWT_KEY que vem do .env é uma string. 

    b) *Agora, crie a função que gere o token. Além disso, crie um type  para representar o input dessa função.*


### exercicio 3

a) *Crie o endpoint que realize isso, com as funções que você implementou anteriormente*

b) *Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um `"@"`*

c) *Altere o seu endpoint para ele só aceitar uma senha com 6 caracteres ou mais*



     // validacao de email usando indexof em undefined 
     if (!req.body.email || req.body.email.indexOf("@") === -1) {
        throw new Error("Invalid email");
      }
    

       /// validacao da senha  tem que ser maior = a 6 usando length em da string ou undefined.
      if (!req.body.password || req.body.password.length <= 6) {
        throw new Error("Invalid password");
      }


         olhar o resto no  userSignup.ts 


### Exercício 4
    
    No login, vamos receber o email e a senha do usuário. Então, vamos precisar de uma 
    função que realize essa busca no banco de dados para gente. 
    
    a) *Crie uma função que retorne as informações de um usuário a partir do email*

```    
const getUserByEmail = async(email: string): Promise<any> => {
const result = await connection("USER")
 .select()
 .where("email", email );

return result[0];
}
```                 


### Exercício 5
    
    Agora, vamos implementar o endpoint de login, com as seguintes especificações:
    
    - *Verbo/Método*: POST
    - *Path*: `/user/login`
    - *Input:* O body da requisição deve ser


a) *Crie o endpoint que realize isso, com as funções que você implementou anteriormente*

b) *Altere o seu endpoint para ele não aceitar um email vazio ou que não possua um `"@"`*


### Exercício 6
    
    Ufa, agora temos toda a nossa base pronta para identificar o usuário. Antes de prosseguir, precisamos criar uma função que recebe o token e devolve as informações do usuário salvas nele. Veja o exemplo abaixo:
    

   