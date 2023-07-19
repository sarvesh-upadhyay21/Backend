const Product = require('../Model/Products');

const getAllProducts = async (req, res) => {
    console.log('working here');
    const Products = await Product.find();
    if (!Products) return res.status(204).json({ 'message': 'No Products found' });
    res.json(Products);
};
module.exports = getAllProducts;