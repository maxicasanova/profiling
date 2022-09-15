require('dotenv').config()
const args = require("yargs/yargs")(process.argv.slice(2)).alias({
    u: 'user',
    p: 'password'
}).default({
    port: 8080,
    mode: 'fork'
}).argv

module.exports = {
    port: process.env.port || args.port, 
    sessionsecret: process.env.SESSIONSECRET,
    mongoconnect: process.env.MONGOCONNECT,
    mode: args.mode,
    node_env: process.env.NODE_ENV
}