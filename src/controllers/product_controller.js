const { StatusCodes, ReasonPhrases } = require("http-status-codes")

const ProductService = require("../services/product_service")

function createProduct(req, res) {
    try {
        // some db processing 

        const response = ProductService.createProduct(req.body);

        return res
            .status(StatusCodes.CREATED)
            .json({
                success: true,
                error: {},
                message: ReasonPhrases.CREATED + " Product Successfully",
                data: response
            })
    } catch (error) {
        console.log("Something went wrong", error)
    }
}

function getProducts(req, res) {
    try {
        const response = ProductService.getProducts();
        return res
            .status(StatusCodes.OK)
            .json({
                success: true,
                error: {},
                message: "Successfully fetched the products",
                data: response
            })
    } catch (error) {

    }
}


function getProduct(req, res) {
    try {
        const response = ProductService.getProduct(req.params.id);
        return res
            .status(StatusCodes.OK)
            .json({
                success: true,
                error: {},
                message: "Successfully fetched the Product",
                data: response
            })
    } catch (error) {
        console.log(error)
    }
}

module.exports = {
    createProduct,
    getProducts,
    getProduct
}