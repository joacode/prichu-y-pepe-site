import apiClient from 'utils/apiClient'
import { RecordInterface, RecordUpdateRequest } from '../models/record'

/**
 * @param {import('next').NextApiRequest} req
 * @param {import('next').NextApiResponse} res
 */

const path = '/api/records'

export const RecordsService = {
    find: async (): Promise<RecordInterface[]> => {
        const { data } = await apiClient.get(path)
        return data
    },

    findById: async (id: string | string[]): Promise<RecordInterface> => {
        const { data } = await apiClient.get(`${path}/${id}`)
        return data
    },

    create: async (record: RecordInterface): Promise<RecordInterface> => {
        const { data } = await apiClient.post(path, record)
        return data
    },

    update: async (
        record: RecordUpdateRequest
    ): Promise<RecordUpdateRequest> => {
        // eslint-disable-next-line no-underscore-dangle
        const { data } = await apiClient.put(`${path}/${record._id}`, record)
        return data
    },

    delete: async (id: number): Promise<RecordInterface> => {
        const { data } = await apiClient.delete(`${path}/${id}`)
        return data
    },
}
