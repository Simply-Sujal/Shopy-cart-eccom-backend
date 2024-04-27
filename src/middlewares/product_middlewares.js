const { BadRequest } = require("../errors/bad_request_error")
const { errorResponse } = require("../utils/error_response")

function createProductValidator(req, res, next) {
    if (!req.body.title) {
        return res.status(400).json(errorResponse("Title is not present in the incoming request", new BadRequest("Title")))
    }
    if (!req.body.description) {
        return res.status(400).json(errorResponse("Description is not present in the incoming request", new BadRequest("Description")))
    }
    if (!req.body.price) {
        return res.status(400).json(errorResponse("Price is not present in the incoming request", new BadRequest("Price")))
    }
    if (!req.body.category) {
        return res.status(400).json(errorResponse("Category is not present in the incoming request", new BadRequest("Category")))
    }
    if (!req.body.image) {
        return res.status(400).json(errorResponse("Image is not present in the incoming request", new BadRequest("Image")))
    }

    // if everything looks good then look fot the next middleware
    next();
}

module.exports = {
    createProductValidator
}