const express = require('express');
const router = express.Router();
const Product = require('../models/product');
const { getProduct } = require('../middleware/product');
const { validateProduct } = require('../middleware/validation');

// GET all products
router.get('/api/products', async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// GET a single product by ID
router.get('/api/products/:id', getProduct, async (req, res) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(product);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// POST a new product
router.post('/api/products', validateProduct, async (req, res) => {
  try {
    const { name, price, description, category, imageUrl } = req.body;
    const product = new Product({
      name,
      price,
      description,
      category,
      imageUrl
    });

    const savedProduct = await product.save();

    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// PUT/update a product by ID
router.put('/api/products/:id', validateProduct, async (req, res) => {
  try {
    const productId = req.params.id;
    const { name, price, description, category, imageUrl } = req.body;

    const updatedProduct = await Product.findByIdAndUpdate(
      productId,
      {
        name,
        price,
        description,
        category,
        imageUrl
      },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json(updatedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// DELETE a product by ID
router.delete('/api/products/:id', async (req, res) => {
  try {
    const productId = req.params.id;

    const deletedProduct = await Product.findByIdAndRemove(productId);

    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.json({ message: 'Product deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
