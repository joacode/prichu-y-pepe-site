import { createContext } from 'react'

export interface WindowDimensions {
    width: number
    height: number
}

export interface AppContextType {
    windowDimensions: WindowDimensions
}

const AppContext = createContext<AppContextType>({
    windowDimensions: {
        width: 320,
        height: 669,
    },
})

export default AppContext
