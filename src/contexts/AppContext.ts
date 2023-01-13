import noop from 'lodash/noop'
import { createContext } from 'react'

export interface WindowDimensions {
    width: number
    height: number
}

export interface AppContextType {
    windowDimensions: WindowDimensions
    scrollOffset: number
    setScrollOffset: (n: number) => void
    auth: boolean
    setAuth: (b: boolean) => void
}

const AppContext = createContext<AppContextType>({
    windowDimensions: {
        width: 320,
        height: 669,
    },
    scrollOffset: 0,
    setScrollOffset: noop,
    auth: false,
    setAuth: noop,
})

export default AppContext
