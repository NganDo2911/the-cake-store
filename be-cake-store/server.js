const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = 3000;
const morgan = require('morgan');
const dotenv = require('dotenv');

const categoryRoutes = require('./routes/category-route');
const productTypeRoutes = require('./routes/productType-route');
const productRoutes = require('./routes/product-route');
const reviewRoutes = require('./routes/review-route');
const authRoutes = require('./routes/auth-route');
const addressRoutes = require('./routes/address-route');
const accountRoutes = require('./routes/account-route');
dotenv.config();

mongoose
	.connect(process.env.MONGO_ATLAS, { useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => {
		console.log('Connected to database');
	})
	.catch((e) => {
		console.log(e);
		console.log('Connection failed!');
	});
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(morgan('dev'));
app.use((req, res, next) => {
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
	res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PATCH, OPTIONS, PUT');

	next();
});

app.use('/api/category', categoryRoutes);
app.use('/api/producttype', productTypeRoutes);
app.use('/api/product', productRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/account', accountRoutes);
app.use('/api/address', addressRoutes);

app.listen(port, () => {
	console.log(`REST API on http://localhost:${port}/api/`);
});
module.exports = app;
