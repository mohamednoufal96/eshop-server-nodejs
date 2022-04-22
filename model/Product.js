const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
            unique: true,
        },
        desc: {
            type: String,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        categories: { type: Array },
        size: {
            type: String,
            required: true,
        },
        color: {
            type: String,
        },
        price: {
            type: Number,
        },
    },
    { timeStamps: true }
);

module.exports = mongoose.model("Product", ProductSchema);
