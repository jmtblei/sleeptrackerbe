# Name
**sleeptrackerbe**

## Description
This api allows the user to add/edit and delete sleep entries.
{ 
- user_id
- timeSlept
- wakeMood
- sleepMood
- date
}

## Installation
This project was created using yarn and designed for react client side. Other dependencies include:
### "dependencies": {
    - "bcryptjs": "^2.4.3",
    - "cors": "^2.8.5",
    - "dotenv": "^7.0.0",
    - "email-validator": "^2.0.4",
    - "express": "^4.16.4",
    - "helmet": "^3.16.0",
    - "jsonwebtoken": "^8.5.1",
    - "knex": "^0.16.5",
    - "knex-cleaner": "^1.1.4",
    - "pg": "^7.9.0",
    - "sqlite3": "^4.0.6"
  },
### "devDependencies": {
    - "jest": "^24.7.1",
    - "nodemon": "^1.18.11",
    - "supertest": "^4.0.2"
  }

# Usage
### EndPoints
 //Register a user - POST
- https://sleeper-app.herokuapp.com/api/auth/register    
//Login - POST
- https://sleeper-app.herokuapp.com/api/auth/login        
//Get all user information - GET
- https://sleeper-app.herokuapp.com/api/user              
//Get a specific user - GET
- https://sleeper-app.herokuapp.com/api/user/:id          
//Get all sleep data - GET
- https://sleeper-app.herokuapp.com/api/sleep             
//Post sleep data - POST
- https://sleeper-app.herokuapp.com/api/sleep             
//Get a single sleep stat based on id - GET
- https://sleeper-app.herokuapp.com/api/sleep/:id         
//Delete a sleep stat based on id - DELETE
- https://sleeper-app.herokuapp.com/api/sleep/:id         
//Get a single sleep stat based on user_id and date - GET
- https://sleeper-app.herokuapp.com/api/sleep/:id/:date   

# Support
https://github.com/LambdaSchool
email: jacob.m.mcfaul@gmail.com

# Authors and acknowledgment
**Shout out to Giacomo Benati and Peter Pham!!!**

# Project status
This project may have updates from time to time to keep it up to date so if you have an issue see the support section.