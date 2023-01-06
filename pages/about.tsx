import React, { ReactElement } from 'react'
import Layout from 'src/components/UI/Layout/Layout'
import { NextPage } from 'next'
import About from 'src/components/About'

const AboutPage: NextPage = (): ReactElement => {
    return (
        <Layout>
            <About />
        </Layout>
    )
}

export default AboutPage
