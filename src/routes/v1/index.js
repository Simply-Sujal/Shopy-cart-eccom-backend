const express = require("express")

const pingRouter = require("./ping_router")
const productRouter = require("./product_router")

const v1router = express.Router();

// any new api if we have to introduce we should just regisyter it here if it is a v1 api

v1router.use("/ping", pingRouter)
v1router.use("/products", productRouter)

module.exports = v1router