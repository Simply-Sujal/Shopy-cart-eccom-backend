const express = require("express")
const { PORT } = require("./config/serverConfig.js")
const app = express();

app.listen(PORT, () => {
    console.log(`Server for ecommerce is up ${PORT}`)
})