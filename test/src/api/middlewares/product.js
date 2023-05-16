const express = require('express');

const getProduct = async (req, res, next) => {
  try {
    const productId = req.params.id;
    const product = await Product.findById(productId);

    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }

    res.product = product;
    next();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
