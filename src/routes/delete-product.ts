import type { Request, Response } from 'express'
import { Products } from '../models/products'

export async function deleteProduct(req: Request, res: Response) {
  const { id } = req.params

  if (!id) {
    res.status(422).send({
      message: 'Missing id',
    })
    return
  }

  const product = await Products.findOne({
    where: {
      id,
    },
  })

  if (!product) {
    res.status(404).send({
      message: 'Product not found',
    })
    return
  }

  await Products.destroy({
    where: {
      id,
    },
  })

  res.status(200).send()
}
