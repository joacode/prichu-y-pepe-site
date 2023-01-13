import Guest from 'src/models/guest'
import connectMongo from 'utils/connectMongo'

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function handler(req, res): Promise<void> {
    switch (req.method) {
        case 'GET': {
            await connectMongo()
            const guests = await Guest.find({})
            const data = JSON.parse(JSON.stringify(guests))

            res.status(200).json(data)
            break
        }

        case 'POST': {
            await connectMongo()
            const guest = await new Guest(req.body).save()

            res.status(200).json({ guest })
            break
        }

        default:
            break
    }
}
