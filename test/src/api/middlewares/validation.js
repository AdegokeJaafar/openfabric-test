const express = require('express');

const validateProduct = (req, res, next) => {
  const { name, price } = req.body;

  // Perform your validation checks here
  const errors = [];

  if (!name) {
    errors.push({ field: 'name', message: 'Product name is required' });
  }

  if (!price || isNaN(price)) {
    errors.push({ field: 'price', message: 'Price should be a valid number' });
  }

  // Add more validation checks as needed

  if (errors.length > 0) {
    return res.status(400).json({ errors });
  }

  // If validation succeeds, proceed to the next handler
  next();
};

// POST a new product
router.post('/api/products', validateProduct, async (req, res) => {
  try {
    // Create a new product based on the validated data
    const { name, price, description, category, imageUrl } = req.body;
    const product = new Product({
      name,
      price,
      });

    // Save the product to the database
    const savedProduct = await product.save();

    res.status(201).json(savedProduct);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
