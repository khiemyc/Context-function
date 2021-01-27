import React, {useState} from 'react'

import AppContext from "./AppContext";

const AppProvider = props => {
    const [language, setLanguage] = useState('english')
    const changLanguage = (language) => {
        setLanguage(language)
    }
    return (
        <AppContext.Provider value={{language: language,changLanguage:changLanguage}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppProvider;