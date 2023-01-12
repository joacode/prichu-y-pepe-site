import React, { ReactElement } from 'react'
import Layout from 'src/components/UI/Layout/Layout'
import { NextPage } from 'next'
import MainPage from 'src/components/MainPage'

const Guests: NextPage = (): ReactElement => {
    return (
        <Layout>
            <MainPage />
        </Layout>
    )
}

export default Guests
