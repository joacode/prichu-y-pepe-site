import { useRouter } from 'next/router'
import { useContext, useEffect } from 'react'
import AppContext from 'src/contexts/AppContext'

const admin = (): void => {
    const { auth } = useContext(AppContext)
    const router = useRouter()

    useEffect(() => {
        if (!auth) {
            router.push('/admin/login')
        } else {
            router.push('/admin/prichuypepecom')
        }
    }, [])
}

export default admin
