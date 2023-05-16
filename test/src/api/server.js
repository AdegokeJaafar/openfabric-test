const express = require('express');
// const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const cors = require('cors');
const { generateToken, verifyToken, hashPassword, comparePassword } = require('./auth');

// Connect to MongoDB
// const dbURI = 'mongodb://localhost:27017/mydatabase';

// mongoose.connect(dbURI, {
//   useNewUrlParser: true,
//   useUnifiedTopology: true,
// })
//   .then(() => {
//     console.log('Connected to MongoDB');
//   })
//   .catch((error) => {
//     console.error('Error connecting to MongoDB:', error);
//   });

// Dummy data for testing purposes
let products = [
    { id: 1, name: 'Product 1', description: 'Description for Product 1', price: 10.99 },
    { id: 2, name: 'Product 2', description: 'Description for Product 2', price: 20.99 },
    { id: 3, name: 'Product 3', description: 'Description for Product 3', price: 30.99 },
    { id: 4, name: 'Product 4', description: 'Description for Product 4', price: 40.99 },
    { id: 4, name: 'Product 5', description: 'Description for Product 5', price: 50.99 },
    { id: 4, name: 'Product 6', description: 'Description for Product 6', price: 60.99 },
];

// Middleware to parse JSON body
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());


// Middleware to protect routes
const authenticate = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Unauthorized' });
  }

  const decoded = verifyToken(token);

  if (!decoded) {
    return res.status(401).json({ message: 'Invalid token' });
  }

  req.user = decoded;
  next();
};

// Get all products (protected route)
app.get('/api/products', authenticate, (req, res) => {
  res.json(products);
});

// GET endpoint to retrieve all products
app.get('/products', (req, res) => {
    res.send(products);
});

// GET endpoint to retrieve a single product by ID
app.get('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const product = products.find(product => product.id === id);
    if (product) {
        res.send(product);
    } else {
        res.status(404).send('Product not found');
    }
});

// POST endpoint to add a new product
app.post('/products', (req, res) => {
    const product = req.body;
    product.id = products.length + 1;
    products.push(product);
    res.send(product);
});

// PUT endpoint to update an existing product by ID
app.put('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex(product => product.id === id);
    if (productIndex !== -1) {
        const updatedProduct = { ...products[productIndex], ...req.body };
        products[productIndex] = updatedProduct;
        res.send(updatedProduct);
    } else {
        res.status(404).send('Product not found');
    }
});

// DELETE endpoint to delete an existing product by ID
app.delete('/products/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const productIndex = products.findIndex(product => product.id === id);
    if (productIndex !== -1) {
        products.splice(productIndex, 1);
        res.send('Product deleted');
    } else {
        res.status(404).send('Product not found');
    }
});

// Start server
app.listen(port, () => {
    console.log(`Server started at http://localhost:${port}`);
});
