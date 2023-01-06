import React, { ReactElement } from 'react'
import Layout from 'src/components/UI/Layout/Layout'
import RecordsTable from 'src/components/RecordsTable'
import { NextPage } from 'next'

const Records: NextPage = (): ReactElement => {
    return (
        <Layout>
            <RecordsTable />
        </Layout>
    )
}

export default Records
