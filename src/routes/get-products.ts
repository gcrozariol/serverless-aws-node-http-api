import type { Request, Response } from 'express'
import { Products } from '../models/products'

export async function getProducts(req: Request, res: Response) {
  const { id } = req.params

  if (id) {
    const product = await Products.findOne({
      where: {
        id,
      },
    })

    res.status(200).send({ product })
    return
  }

  const products = await Products.findAll()

  res.status(200).send({
    products,
    count: products.length,
  })
}
