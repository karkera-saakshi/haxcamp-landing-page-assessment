const bookingModel = require("../models/bookingModel");

let create = (req, res) =>{
    bookingModel.create(req.body, res);
}

module.exports = { create };