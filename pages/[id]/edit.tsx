import React, { ReactElement } from 'react'
import { NextPage } from 'next'
import Layout from '../../src/components/UI/Layout/Layout'
import RecordDetail from '../../src/components/RecordDetail'

const RecordEditPage: NextPage = (): ReactElement => {
    return (
        <Layout>
            <RecordDetail edit />
        </Layout>
    )
}

export default RecordEditPage
