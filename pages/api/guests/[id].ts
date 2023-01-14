import Guest from 'src/models/guest'
import connectMongo from 'utils/connectMongo'
import { NextApiRequest } from 'next'

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

export default async function handler(req: NextApiRequest, res): Promise<void> {
    switch (req.method) {
        case 'GET': {
            await connectMongo()
            const guest = await Guest.findById(req.query.id).exec()
            const data = JSON.parse(JSON.stringify(guest))

            res.status(200).json(data)
            break
        }

        case 'PUT': {
            await connectMongo()
            const guest = await Guest.updateOne(
                // eslint-disable-next-line no-underscore-dangle
                { id: req.body._id },
                {
                    name: req.body.name,
                    lastName: req.body.lastName,
                    civilAssistance: req.body.civilAssistance,
                    partyAssistance: req.body.partyAssistance,
                    menu: req.body.menu,
                    song: req.body.song,
                    active: false,
                }
            )
            const data = JSON.parse(JSON.stringify(guest))
            res.status(200).json(data)
            break
        }

        case 'DELETE': {
            await connectMongo()
            const guest = await Guest.deleteOne({ _id: req.query.id })
            const data = JSON.parse(JSON.stringify(guest))
            res.status(200).json(data)
            break
        }

        default:
            break
    }
}
