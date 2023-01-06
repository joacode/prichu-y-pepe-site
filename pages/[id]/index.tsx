import React, { ReactElement } from 'react'
import { NextPage } from 'next'
import Layout from '../../src/components/UI/Layout/Layout'
import RecordDetail from '../../src/components/RecordDetail'

const RecordPage: NextPage = (): ReactElement => {
    return (
        <Layout>
            <RecordDetail />
        </Layout>
    )
}

export default RecordPage
