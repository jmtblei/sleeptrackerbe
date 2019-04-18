# **sleeptrackerbe**
## Description
This api allows the user to add/edit and delete sleep entries. Maintaining a record of the hours and moods of when they went to bed and when they woke up as well as a time stamp for how long they slept that night.

## Getting Started
For an example of how to implement this code on the client side see the link below:
https://github.com/sleeptrackerteam/sleeptrackerfe

## Prerequisites
All of the below dependencies can be installed using:\
yarn add < name_of_dependency >\
for dev dependencies simply add --dev after the < name_of_dependency >

### Installation
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

## Examples of Tables

**User table**
{
- id       <-- Required
- fullName
- email
- username <-- Required
- password <-- Required
}

**SleepStat table**
{ 
- id        <-- Required
- user_id   <-- Foreign Key / Required
- timeSlept <-- Required
- wakeMood  <-- Required
- sleepMood <-- Required
- date      <--format('YYYY-MM-DD') / Required
}


# Usage
### EndPoints
### User
- **Register a user - POST**
- https://sleeper-app.herokuapp.com/api/auth/register    

- **Login - POST**
- https://sleeper-app.herokuapp.com/api/auth/login        

- **Get all user information - GET**
- https://sleeper-app.herokuapp.com/api/user              

- **Get a specific user - GET**
- https://sleeper-app.herokuapp.com/api/user/:id    

### SleepData

- **Get all sleep data - GET**
- https://sleeper-app.herokuapp.com/api/sleep             

- **Post sleep data - POST**
- https://sleeper-app.herokuapp.com/api/sleep             

- **Get a single sleep stat based on id - GET**
- https://sleeper-app.herokuapp.com/api/sleep/:id         

- **Delete a sleep stat based on id - DELETE**
- https://sleeper-app.herokuapp.com/api/sleep/:id         

- **Get a single sleep stat based on user_id and date - GET**
- https://sleeper-app.herokuapp.com/api/sleep/:id/:date   

# Support
GITHUB: https://github.com/LambdaSchool \
email: jacob.m.mcfaul@gmail.com

# Authors and acknowledgment
Shout out to **Giacomo Benati** and **Peter Pham!!!**

# Project status
This project may have updates from time to time to keep it up to date so if you have an issue see the support section.
