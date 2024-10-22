import type { Request, Response } from 'express'
import { v4 as uuidv4 } from 'uuid'
import { Products } from '../models/products'

export async function createProduct(req: Request, res: Response) {
  const { name, description, price } = req.body

  await Products.create({
    id: uuidv4(),
    name,
    description,
    price,
  })

  res.status(201).send()
}
