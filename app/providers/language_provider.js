import { createContext, useState } from "react"

const LanguageContext = createContext()
export const LanguageConsumer = LanguageContext.Consumer;
export const LanguageProvider = ({children}) => {
    const [language, setLanguage] = useState('ru');

    return (
        <LanguageContext.Provider value={{
            language: language,
            updateLang: setLanguage,
        }}>
            {children}
        </LanguageContext.Provider>
    )
}