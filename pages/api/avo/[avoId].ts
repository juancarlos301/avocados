import { NextApiRequest, NextApiResponse } from 'next'
import DB from '../../../database/db'

const avoId = async (req: NextApiRequest, res: NextApiResponse) => {
  const db = new DB()
  const id = req.query.avoId

  const entry = await db.getById(id as string)
  res.status(200).json({ data: entry })
}

export default avoId
