GET http://localhost:3003/users/1


###

PUT http://localhost:3003/character
Content-Type: application/json

{
   "name":"Saruman",
   "gender":"MALE",
   "description":"O mago branco!!!!"
}

###

DELETE http://localhost:3003/character/3