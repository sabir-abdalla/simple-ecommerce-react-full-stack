const express = require('express');
const os = require('os');

const app = express();
app.use(express.json());
app.use(express.static('dist'));

// pictures and ategories
const products = [
  { id: 1, name: 'Aura Wireless Headphones', price: 299.99, category: 'Audio', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80' },
  { id: 2, name: 'Mechanical Keyboard Pro', price: 159.50, category: 'Accessories', image: 'https://images.unsplash.com/photo-1595225476474-87563907a212?w=500&q=80' },
  { id: 3, name: 'Titanium Gaming Mouse', price: 89.99, category: 'Accessories', image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&q=80' },
  { id: 4, name: 'UltraWide 4K Monitor', price: 699.00, category: 'Displays', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80' },
  { id: 5, name: 'USB-C Hub 8-in-1', price: 49.00, category: 'Accessories', image: 'https://images.unsplash.com/photo-1625842268584-8f3296236761?w=500&q=80' },
  { id: 6, name: 'Ergonomic Laptop Stand', price: 39.99, category: 'Workspace', image: 'https://images.unsplash.com/photo-1618788372246-79faff0c3742?w=500&q=80' },
];

app.get('/api/getUsername', (req, res) => res.send({ username: os.userInfo().username }));
app.get('/api/products', (req, res) => res.json(products));

// checkout endpoint
app.post('/api/checkout', (req, res) => {
  const { cart, total } = req.body;
  console.log(`New Order: ${cart.length} items. Total: $${total}`);
  
  setTimeout(() => {
    res.json({ 
      success: true, 
      orderId: 'ORD-' + Math.floor(Math.random() * 1000000),
      message: 'Payment processed successfully!' 
    });
  }, 1500); // 1.5 second fake processing time
});

app.listen(8080, () => console.log('Server running on port 8080!'));