const express = require('express');
const mongoose = require('mongoose');
const app = express();
const port = 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/views/index.html');
});

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/views/about.html');
});

app.get('/products', (req, res) => {
  res.sendFile(__dirname + '/views/products.html');
});

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/views/contact.html');
});

mongoose.connect('mongodb://localhost/cosmetic_website', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log('Підключено до бази даних');
  })
  .catch((error) => {
    console.error('Помилка підключення до бази даних:', error);
  });

const Product = mongoose.model('Product', {
  name: String,
  description: String,
  price: Number
});


app.get('/products', (req, res) => {
  
  Product.find({}, (error, products) => {
    if (error) {
      console.error('Помилка отримання продуктів:', error);
      res.status(500).send('Помилка сервера');
    } else {
      res.render('products', { products: products });
    }
  });
});


app.listen(port, () => {
  console.log(`Сервер запущений на порту ${port}`);
});