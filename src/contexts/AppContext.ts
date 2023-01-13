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
}

const AppContext = createContext<AppContextType>({
    windowDimensions: {
        width: 320,
        height: 669,
    },
    scrollOffset: 0,
    setScrollOffset: noop,
})

export default AppContext
