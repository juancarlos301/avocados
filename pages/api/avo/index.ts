import { NextApiRequest, NextApiResponse } from 'next'
import DB from '../../../database/db'

const allAvos = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = new DB()
  const allEntries = await db.getAll()
  res.statusCode = 200
  res.setHeader('content-type', 'application/json')
  res.end(JSON.stringify({ data: allEntries }))
}

export default allAvos
