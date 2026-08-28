const { Schema } = require("mongoose");

const OrdersSchema = new Schema({
    name: String,
    price: Number,
    price: Number,
    mode: String, // buy or sell mode
})

module.exports = { OrdersSchema }