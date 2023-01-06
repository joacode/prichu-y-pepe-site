import Record from 'src/models/record'
import connectMongo from 'utils/connectMongo'

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function handler(req, res): Promise<void> {
    switch (req.method) {
        case 'GET': {
            await connectMongo()
            const records = await Record.find({})
            const data = JSON.parse(JSON.stringify(records))

            res.status(200).json(data)
            break
        }

        case 'POST': {
            await connectMongo()
            const record = await new Record(req.body).save()

            res.status(200).json({ record })
            break
        }

        default:
            break
    }
}
