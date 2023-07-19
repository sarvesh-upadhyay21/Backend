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
        default: "No Description",
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
        default: 3.5
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
        required: true
    },
    images: [
        {
            url: {
                type: String
            }

        }
    ]
});
module.exports = mongoose.model("Users", ProductSchema);