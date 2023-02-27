const express = require('express')
const router = express.Router()
const getProducts = require('../controllers/products')
const getProduct = require('../controllers/product')

router.get('/product/:id', (req, res) => {
	const { id } = req.params;
	const ProductData = getProduct(id)

	if (!ProductData) {
		res.status(400).send('Not found.')
	} else {
		res.send({ ProductData })
	}
})

router.get('/products', function (req, res, next) {
	const productList = getProducts()
	res.send({ productList })
})

router.get('/', function (req, res, next) {
	res.render('index', { title: 'API - Super Fresh' })
})

module.exports = router
