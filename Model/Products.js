const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const ProductSchema = new Schema({
    id: {
        type: String,
        required: true,
        unique: true
    },
    title: {
        type: String,
        required: true,
        //unique   :true
    },
    description: {
        type: String,
        required: true,
        // default: "No Description",
        // trim: true
    },
    price: {
        type: Number,
        required: true,
        min: [0, "Price must be greater than or equal to 0"]
    },
    discountPercentage: {
        type: Number,
        max: [100, 'Discount percentage cannot exceed 100%']
    },
    rating: {
        type: Number,
        required: true,
    },
    stock: {
        type: Number
    },
    brand: {
        type: String,
    },
    category: {
        type: String,
    },
    thumbnail: {
        type: String,
        // required: true
    },
    images: {
        data: Buffer,
        contentType: String
    }
});
module.exports = mongoose.model("Products", ProductSchema);