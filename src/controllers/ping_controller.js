function pingController(req, res) {
    return res.json({ msg: "OK from v1 api" })
}

function pingControllerV2(req, res) {
    return res.json({ msg: "Ok from v2 api got it " })
}

module.exports = {
    pingController,
    pingControllerV2
}