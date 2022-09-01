import React, { useState, createContext } from 'react'

export const ContextWidth = createContext("")


function ProjectContext({ children }) {

    const [stateWidth, setStateWidth] = useState("")

    return (
        <ContextWidth.Provider value={{ stateWidth, setStateWidth }}>
            {children}
        </ContextWidth.Provider>
    )
}

export default ProjectContext