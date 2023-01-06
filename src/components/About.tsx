import React, { FC, ReactElement } from 'react'
import Box from './UI/Box'
import ItemDetail from './UI/ItemDetail'

const About: FC = (): ReactElement => {
    return (
        <>
            <Box style={{ display: 'block' }}>
                <ItemDetail bolder>
                    github:{' '}
                    <a href="https://github.com/joacode/financial-tool">
                        https://github.com/joacode/financial-tool
                    </a>
                </ItemDetail>
                <div>
                    Icon:{' '}
                    <a
                        href="https://www.flaticon.com/free-icons/wallet"
                        title="wallet icons"
                    >
                        Wallet icons created by Vitaly Gorbachev - Flaticon
                    </a>
                </div>
            </Box>
        </>
    )
}

export default About
