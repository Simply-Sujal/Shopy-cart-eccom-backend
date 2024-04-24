const express = require("express")
const { PORT } = require("./config/server_config.js")

const ApiRouter = require("./routes/api_router.js");

const app = express();

app.use("/api", ApiRouter) // if any req. comes with url starting with /api

app.listen(PORT, () => {
    console.log(`Server for ecommerce is up ${PORT}`)
})