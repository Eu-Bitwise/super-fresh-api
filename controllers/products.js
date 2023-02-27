const productsData = require('../models/products')

function getProducts() {
	return productsData.map(({ id, name, picture }) => ({
		id,
		name,
		picture
	}))
}

module.exports = getProducts
