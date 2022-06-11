const express  = require('express')
const products = require('./data/products')

const app = express()

app.get('/', (req, res)=> {
    res.send('Hello from Home Page')
})

app.get('/api/products', (req, res) => {
    res.json(products)
})

app.get('/api/products/:id', (req, res) => {
    const product = products.find((prod)=> prod._id === req.params.id)
    res.json(product)
})

const PORT = 5000

app.listen(PORT, () => {
    console.log(`your server is running on port ${PORT}`)
})