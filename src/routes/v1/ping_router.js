const express = require("express")
const { pingController } = require("../../controllers/ping_controller")

const router = express.Router();

// inbuilt middle ware 
function checkRequest(req, res, next) {
    console.log("Checking the request")

    next();
    console.log("Endin vro1")
}

function logger(req, res, next) {
    console.log("Logging request")
    next();
    console.log("Endin vro2")

}

function authcheck(req, res, next) {
    console.log("Auth check")
    next();
    console.log("Endin vro3")

}

router.get("/", [checkRequest, logger, authcheck], pingController); // mapping a route to a controller

module.exports = router;