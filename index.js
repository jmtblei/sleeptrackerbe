require('dotenv').config()
const server = require('./api/server.js');

const port = process.env.PORT || 5000;

console.log(process.env.SECRET_MESSAGE)
console.log(process.env.TOKEN)

server.listen(port, () => {
    console.log(`server is running on localhost:${port}`)
})