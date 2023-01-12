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

    // findById: async (id: string | string[]): Promise<RecordInterface> => {
    //     const { data } = await apiClient.get(`${path}/${id}`)
    //     return data
    // },

    create: async (guest: GuestInterface): Promise<GuestInterface> => {
        const { data } = await apiClient.post(path, guest)
        return data
    },

    // update: async (
    //     record: RecordUpdateRequest
    // ): Promise<RecordUpdateRequest> => {
    //     // eslint-disable-next-line no-underscore-dangle
    //     const { data } = await apiClient.put(`${path}/${record._id}`, record)
    //     return data
    // },

    // delete: async (id: number): Promise<RecordInterface> => {
    //     const { data } = await apiClient.delete(`${path}/${id}`)
    //     return data
    // },
}
