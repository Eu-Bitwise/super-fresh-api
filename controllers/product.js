const productsData = require('../models/products')

function getProduct(id) {
	return productsData.find((products => products.id === id))
}

module.exports = getProduct
