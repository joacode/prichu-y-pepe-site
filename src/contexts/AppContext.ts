import { createContext } from 'react'

export interface WindowDimensions {
    width: number
    height: number
}

export interface AppContextType {
    maxResolutionQuery: number
    windowDimensions: WindowDimensions
}

const AppContext = createContext<AppContextType>({
    maxResolutionQuery: 600,
    windowDimensions: {
        width: 320,
        height: 669,
    },
})

export default AppContext
