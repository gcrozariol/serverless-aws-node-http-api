import express from 'express'
import serverless from 'serverless-http'

import { getProducts } from './routes/get-products'
import { createProduct } from './routes/create-product'
import { deleteProduct } from './routes/delete-product'

const app = express()

app.use(express.json())

app.get('/', (req, res) => {
  res.status(200).json({
    message: 'Testing the Serverless Framework',
  })
})

app.get('/products/:id?', getProducts)
app.post('/products', createProduct)
app.delete('/products/:id', deleteProduct)

app.use((req, res) => {
  res.status(404).json({
    error: 'Not Found',
  })
})

export const server = serverless(app)
