const express = require("express")
const bodyParser = require("body-parser")
const responseTime = require("response-time")

const { PORT } = require("./config/server_config.js")

const ApiRouter = require("./routes/api_router.js");


const app = express();

// app.use(responseTime(function f(req, res, time) {
//     console.log("Time Elapsed : ", time);
//     res.setHeader("X-Response-Time", time)
// }))
app.use(responseTime())

app.use(bodyParser.json())
app.use(bodyParser.text())
app.use(bodyParser.urlencoded({ extended: true }))

app.use("/api", ApiRouter) // if any req. comes with url starting with /api

app.listen(PORT, () => {
    console.log(`Server for ecommerce is up ${PORT}`)
})