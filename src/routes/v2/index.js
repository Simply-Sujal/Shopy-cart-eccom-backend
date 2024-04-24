const express = require("express")

const pingRoutesV2 = require("./ping_router_v2")

const v2Router = express.Router();

// any new api if we have to introduce we should just regisyter it here if it is a v1 api

v2Router.use("/ping", pingRoutesV2)

module.exports = v2Router