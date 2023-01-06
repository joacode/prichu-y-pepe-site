import axios from 'axios'
import getConfig from 'next/config'

const { publicRuntimeConfig } = getConfig()

const apiClient = axios.create({
    headers: {
        'Content-Type': 'application/json',
    },
    baseURL: publicRuntimeConfig.baseURL,
})

export default apiClient
