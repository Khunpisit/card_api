# card_api
Steps to run this project inside card_api folder:

1. Run `npm i` command
2. Run `npm start` command
3. Run `npm run migration:run` to migrate DB first time only.

Tech stack : Express.js TypeScript, TypeORM, SQLite
Any question you can contact me kpisit29@gmail.com

## How to Call API

### authentication with author
POST http://localhost:8080/auth/login 

body
 {
  "username": "author",
  "password": "author"
}

response
{
    "id": 2,
    "username": "author",
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjIsInVzZXJuYW1lIjoiYXV0aG9yIiwiaWF0IjoxNTkyNTQ5NTM3LCJleHAiOjE1OTI1NTMxMzd9.867ZdeZi6trkYBWmBtYrJsRQ4-xGFrDACCj7BzMH_jY",
    "role": "author"
}

## *** Use Header Token for the rest API
header name : auth 

header value : {Token from auth api}

### create new card
POST http://localhost:8080/card/

body
{
  "name": "firt cardasdfaerqerqwerqwerqwerqwer",
  "status": "drafaasdfasdfasdf",
  "content": "test first card for my articleasdfjkaskehfq werhqkjwehrqwherhqwerhqwuehrqwherjqwejrhqwegrqpiwuerquwegrpqwugerpqwerhpqwieurhqweruhihwqerj",
  "category": "gametestjfjdaksfj",
  "author": "Deuce Khunpisit" 
}

### update card
use card id you created before

PUT http://localhost:8080/card/1/

body
{
  "name": "firtcardaserqwer12341234",
  "status": "draff1234",
  "content": "first card for my articleasdfjkaskehfq werhqkjwehrqwherhqwerhqwuehrqwherjqwejrhqwegrqpiwuerquwegrpqwugerpqwerhpqwieurhqweruhihwqerj12341234",
  "category": "gamesfj12341243",
  "author": "Deuce Khunpisit" 
}

### delete card 

DELETE http://localhost:8080/card/1/


