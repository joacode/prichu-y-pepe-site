import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import Layout from '../src/components/UI/Layout/Layout'

function HomePage(): JSX.Element {
    const router = useRouter()

    useEffect(() => {
        router.push('/records')
    }, [router])

    return <Layout loading />
}

export default HomePage
