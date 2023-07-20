const Product = require('../Model/Products');

//Get All products
const getAllProducts = async (req, res) => {
    // console.log('working here');
    const products = await Product.find();
    if (!products) return res.status(204).json({ 'message': 'No Products found' });
    res.json(products);
};

//Get a single product 
const getProduct = async (req, res) => {
    console.log('Get a single product');
    if (!req?.params?.id)
        return res.status(400).json({
            'message': 'Product Id required'
        });
    const products = await Product.findOne({ _id: req.params.id });
    if (!products)
    {
        return res.status(204).json({
            'message': `Product Id is not matches ${ req.params.id },`
        });
    }
    res.json(products);
};

//Add a new product
const addNewProduct = async (req, res) => {
    if (
        !req?.body?.id || !req?.body?.title || !req?.body?.description || !req?.body?.price || !req?.body?.rating)
    {
        return res.status(400).json({
            'message': 'Id and title are mandatory fields'
        });
    };
    try
    {
        const result = await Product.create({
            id: req.body.id,
            title: req.body.title,
            description: req.body.description,
            price: req.body.price,
            rating: req.body.rating,
        });
        res.status(200).json(result);
    }
    catch (err)
    {
        console.log(err);
        return res.status(500).send("Internal Server Error");
    }
};

//Update a product
const productUpdateById = async (req, res) => {
    console.log("product Update By Id");
    if (!req?.params?.id)
    {
        return res.status(400).json({ 'message': 'Please provide valid ID' });
    }
    const product = await Product.findOne({ _id: req.params.id }).exec();
    if (!product)
    {
        return res.status(404).json({
            'message': `No record found with given Id ${ req.body._id }`
        });
    }
    if (req.body?.id) product.id = req.body.id;
    if (req.body?.title) product.title = req.body.title;
    if (req.body?.description) product.description = req.body.description;
    if (req.body?.price) product.price = req.body.price;
    if (req.body?.rating) product.rating = req.body.rating;
    const result = await product.save();
    res.status(201).json(result);
};

//Delete a product
const productDeleteById = async (req, res) => {
    if (!req?.params?.id) return res.status(400).json({
        'message': 'please proved id for deleting the data'
    });
    const product = await Product.findOne({ _id: req.params.id }).exec();
    if (!product)
    {
        return res.status(204).json({
            "message": `No product matches in database ${ req.body.id }`
        });
    };
    const result = await product.deleteOne();
    res.json(result);
};

module.exports = {
    getAllProducts,
    getProduct,
    addNewProduct,
    productUpdateById,
    productDeleteById

};