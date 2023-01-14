import apiClient from 'utils/apiClient'
import { GuestInterface } from '../models/guest'

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

const path = '/api/guests'

export const GuestsService = {
    find: async (): Promise<GuestInterface[]> => {
        const { data } = await apiClient.get(path)
        return data
    },

    create: async (guest: GuestInterface): Promise<GuestInterface> => {
        const { data } = await apiClient.post(path, guest)
        return data
    },

    // THIS SERVICE MAKES A SOFT DELETE. ACTIVATE THE ONE BELOW TO DELETE PERMANENTLY FROM DB
    // delete: async (guest: GuestUpdateRequest): Promise<GuestUpdateRequest> => {
    //     // eslint-disable-next-line no-underscore-dangle
    //     const { data } = await apiClient.put(`${path}/${guest._id}`, guest)
    //     return data
    // },

    delete: async (id: number): Promise<GuestInterface> => {
        const { data } = await apiClient.delete(`${path}/${id}`)
        return data
    },
}
